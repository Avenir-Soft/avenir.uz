'use client'

/* Maket xatti-harakatlarining so'zma-so'z porti (design/v2: index.html va
   assets/page.js dagi skriptlar). Farqlar:
   - til dvijoki yo'q — sahifalar serverda tilda render qilinadi, til
     tugmalari marshrutga olib boradi;
   - sarlavha bo'lish (splitOne) va odometr qurish serverda (split.tsx);
   - hamma obunalar unmount'da yig'ishtiriladi — SPA navigatsiyada skript
     qayta ishga tushadi, eski tinglovchilar qolmaydi. */

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { languages, type Language } from '@/lib/languages'

const PH_DAY: Record<Language, string[]> = {
  uz: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
  ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
}
const PH_MONTH: Record<Language, string[]> = {
  uz: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

export type FeedStrings = {
  items: [string, string][]
  now: string
  min: string
}

/* Ilova-ichi brauzerlar (Instagram, Telegram) va eski WebView'larda ba'zi API
   yo'q. Ular yo'qligi bezakni o'chirsin, sahifani emas. */
type IOEntry = { isIntersecting: boolean; target: Element }
type IOLike = { observe(el: Element): void; unobserve(el: Element): void; disconnect(): void }

/* IntersectionObserver yo'q bo'lsa — hamma narsa darhol ko'rinadi. Aks holda
   .rise/.sol__c/.nums__c CSS bilan yashirilgan holicha qolib, sahifa bo'sh
   ko'rinardi: ularni ochadigan yagona narsa — shu observer. */
class FallbackIO implements IOLike {
  cb: (es: IOEntry[]) => void
  constructor(cb: (es: IOEntry[]) => void) {
    this.cb = cb
  }
  observe(el: Element) {
    this.cb([{ isIntersecting: true, target: el }])
  }
  unobserve() {}
  disconnect() {}
}

type IOCtor = new (cb: (es: IOEntry[]) => void, opts?: object) => IOLike

/* matchMedia yo'q bo'lsa — «mos kelmadi» deb hisoblaymiz: animatsiyalar
   o'chadi, tinglovchilar bo'sh qoladi. */
const noopMedia = {
  matches: false,
  addEventListener() {},
  removeEventListener() {},
} as unknown as MediaQueryList

export function V2Behaviors({ lang, feed }: { lang: Language; feed?: FeedStrings }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const mq = (q: string) =>
      typeof window.matchMedia === 'function' ? window.matchMedia(q) : noopMedia
    const IO = (typeof IntersectionObserver === 'function'
      ? IntersectionObserver
      : FallbackIO) as unknown as IOCtor

    const reduce = mq('(prefers-reduced-motion: reduce)').matches
    const fine = mq('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 900

    /* --- yig'ishtirish reestri --- */
    let alive = true
    const offs: (() => void)[] = []
    const on = (
      t: EventTarget,
      ev: string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions,
    ) => {
      t.addEventListener(ev, fn, opts)
      offs.push(() => t.removeEventListener(ev, fn, opts))
    }
    const timers: ReturnType<typeof setTimeout>[] = []
    const later = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
      return id
    }
    const tickers: ReturnType<typeof setInterval>[] = []
    const every = (fn: () => void, ms: number) => {
      const id = setInterval(fn, ms)
      tickers.push(id)
      return id
    }
    const observers: { disconnect(): void }[] = []

    const $ = <T extends Element = HTMLElement>(q: string) => document.querySelector<T>(q)
    const $$ = <T extends Element = HTMLElement>(q: string) => Array.prototype.slice.call(document.querySelectorAll<T>(q)) as T[]

    /* Butun bezak bloki qo'riqlanadi. Effekt ichidagi istalgan xato React'da
       yuqoriga otiladi va sahifa butunlay «Application error» ga aylanadi —
       bitta animatsiya uchun juda qimmat. Buzilsa: bezak yo'q, sayt bor.
       Yig'ishtirish reestri try'dan tashqarida — cleanup baribir ishlaydi. */
    try {

    /* ---------- odometr (index.html:1512) ---------- */
    function rollOd(el: Element) {
      Array.prototype.slice.call(el.querySelectorAll('u')).forEach((u: HTMLElement, i: number) => {
        const to = parseInt(u.getAttribute('data-to') || '0', 10)
        later(() => { u.style.transform = 'translateY(-' + to + 'em)' }, i * 110)
      })
    }

    /* ---------- ochilish (index.html:1519) ---------- */
    const io = new IO(
      es => {
        es.forEach(e => {
          if (!e.isIntersecting) return
          e.target.classList.add('is-in')
          later(() => e.target.classList.add('unmask'), 1400)
          if (e.target.classList.contains('nums__c')) {
            const od = e.target.querySelector('[data-od]')
            if (od) rollOd(od)
          }
          if (e.target.classList.contains('sol__c') || e.target.classList.contains('gc')) e.target.classList.add('is-play')
          io.unobserve(e.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )
    observers.push(io)
    function startReveals() {
      $$('.rise, [data-split], .nums__c, .sol__c, .center, .final, .gc').forEach(el => io.observe(el))
    }

    /* ---------- kirish (index.html:1536) ----------
       #intro'ni React chizadi (V2Intro), shuning uchun uni DOMdan qo'lda
       olib tashlamaymiz — faqat yashiramiz. Ilgari bu yerda removeChild edi:
       React keyin o'sha tugunni o'zi unmount qilmoqchi bo'lganda uni topa
       olmay «removeChild: node is not a child» bilan yiqilardi. Maketda bu
       muammo yo'q edi — u yerda DOM'ni faqat skript boshqaradi.
       intro-out animatsiyasi visibility:hidden bilan tugaydi, display:none
       esa uni layoutdan ham chiqaradi — ko'rinish o'zgarmaydi.
       Ishlov berilgani `data-done` bilan belgilanadi: ilgari buni removeChild
       bajarardi — o'chirilgan tugun qaytib topilmasdi. Endi tugun joyida
       qoladi, shuning uchun belgi kerak. Aks holda bosh sahifada til
       almashtirilganda effekt eski, yashirilgan pardani topib, yangisini
       hech kim yopmay qolardi. */
    const hideIntro = (el: HTMLElement) => {
      el.dataset.done = '1'
      el.style.display = 'none'
    }
    const intro = document.querySelector<HTMLElement>('#intro:not([data-done])')
    const hero = $('.hero') || $('.sv-hero')
    let introDone = false
    function endIntro() {
      if (introDone || !intro) return
      introDone = true
      intro.classList.add('is-out')
      document.body.classList.remove('intro-on')
      later(() => hideIntro(intro), 650)
      hero?.classList.add('is-in')
      later(() => hero?.classList.add('unmask'), 1500)
      startReveals()
    }
    if (intro) {
      if (reduce) {
        hideIntro(intro)
        document.body.classList.remove('intro-on')
        introDone = true
        hero?.classList.add('is-in')
        startReveals()
      } else {
        document.body.classList.add('intro-on')
        later(endIntro, 1350)
        on(intro, 'click', endIntro)
        on(window, 'keydown', (e: Event) => {
          const k = (e as KeyboardEvent).key
          if (k === 'Escape' || k === ' ') endIntro()
        })
      }
    } else {
      hero?.classList.add('is-in')
      later(() => hero?.classList.add('unmask'), 1500)
      startReveals()
    }
    offs.push(() => document.body.classList.remove('intro-on'))

    /* ---------- kursor (index.html:1560) ---------- */
    if (fine && !reduce) {
      const cur = document.getElementById('cur')
      if (cur) {
        let cx = -60, cy = -60, tx = -60, ty = -60
        on(window, 'mousemove', (e: Event) => { tx = (e as MouseEvent).clientX; ty = (e as MouseEvent).clientY }, { passive: true })
        on(document, 'mouseover', (e: Event) => {
          const t = (e.target as Element).closest?.('a, button, input, label, .gc')
          cur.classList.toggle('is-big', !!t)
          cur.classList.remove('is-hidden')
        })
        on(document, 'mouseout', (e: Event) => { if (!(e as MouseEvent).relatedTarget) cur.classList.add('is-hidden') })
        on(window, 'blur', () => cur.classList.add('is-hidden'))
        on(window, 'focus', () => cur.classList.remove('is-hidden'))
        ;(function loop() {
          if (!alive) return
          cx += (tx - cx) * 0.24
          cy += (ty - cy) * 0.24
          cur.style.setProperty('--cx', cx.toFixed(1) + 'px')
          cur.style.setProperty('--cy', cy.toFixed(1) + 'px')
          requestAnimationFrame(loop)
        })()
      }
    }

    /* ---------- hero kartasi qiyshayadi (index.html:1583) ---------- */
    const tilt = document.getElementById('tilt')
    if (tilt && fine && !reduce) {
      const wrap = tilt.closest('.tiltwrap')
      if (wrap) {
        on(wrap, 'mousemove', (e: Event) => {
          const me = e as MouseEvent
          const r = tilt.getBoundingClientRect()
          tilt.style.setProperty('--ry', (((me.clientX - r.left) / r.width - 0.5) * 8).toFixed(2) + 'deg')
          tilt.style.setProperty('--rx', ((0.5 - (me.clientY - r.top) / r.height) * 6).toFixed(2) + 'deg')
        })
        on(wrap, 'mouseleave', () => {
          tilt.style.setProperty('--ry', '0deg')
          tilt.style.setProperty('--rx', '0deg')
        })
      }
    }

    /* ---------- jonli maketlar ko'rinish darvozalari (index.html:1597) ---------- */
    let heroVis = true
    let trustVis = true
    {
      const h = $('.hero')
      const t = $('.trust')
      if (h) {
        const o = new IO(es => es.forEach(e => { heroVis = e.isIntersecting }), { rootMargin: '200px' })
        o.observe(h)
        observers.push(o)
      }
      if (t) {
        const o = new IO(es => es.forEach(e => { trustVis = e.isIntersecting }), { rootMargin: '200px' })
        o.observe(t)
        observers.push(o)
      }
    }

    /* ---------- jonli raqamlar, grafiklar, lenta, ustunlar (index.html:1605) ---------- */
    if (!reduce) {
      const nums = $$('[data-live]').map(el => ({
        el,
        cur: parseFloat(el.getAttribute('data-live') || '0'),
        from: 0, to: 0, t: 1, t0: 0, dur: 1500,
        min: parseFloat(el.getAttribute('data-min') || '0'),
        max: parseFloat(el.getAttribute('data-max') || '0'),
        dec: parseInt(el.getAttribute('data-dec') || '0', 10),
      }))
      nums.forEach(n => { n.from = n.cur; n.to = n.cur })
      let nextNum = 0
      function retarget(n: (typeof nums)[number], now: number) {
        const sp = n.max - n.min
        let nx = n.cur + (Math.random() - 0.45) * sp * 0.32
        if (nx < n.min) nx = n.min + Math.random() * sp * 0.2
        if (nx > n.max) nx = n.max - Math.random() * sp * 0.2
        n.from = n.cur; n.to = nx; n.t = 0; n.t0 = now; n.dur = 1300 + Math.random() * 900
      }

      const charts = $$('[data-chart]').map(svg => {
        const N = 26
        const vals: number[] = []
        for (let i = 0; i <= N; i++) vals.push(0.35 + Math.random() * 0.4)
        return {
          N, vals, t: 0, step: 950, last: 0,
          area: svg.querySelector('.lc__area')!, line: svg.querySelector('.lc__line')!,
          dot: svg.querySelector('.lc__dot')!, halo: svg.querySelector('.lc__halo')!,
        }
      }).filter(c => c.area && c.line && c.dot && c.halo)
      function drawChart(c: (typeof charts)[number]) {
        const W = 300, H = 92, dx = W / (c.N - 1)
        let d = ''
        const pts: [number, number][] = []
        for (let i = 0; i <= c.N; i++) {
          const x = (i - c.t) * dx
          const y = H - 6 - c.vals[i] * (H - 20)
          pts.push([x, y])
          d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1)
        }
        c.line.setAttribute('d', d)
        c.area.setAttribute('d', d + 'L' + pts[c.N][0].toFixed(1) + ' ' + H + 'L' + pts[0][0].toFixed(1) + ' ' + H + 'Z')
        const a = pts[c.N - 1], b = pts[c.N]
        const k = (W - a[0]) / Math.max(0.001, b[0] - a[0])
        const ey = a[1] + (b[1] - a[1]) * Math.min(1, Math.max(0, k))
        c.dot.setAttribute('cx', String(W)); c.dot.setAttribute('cy', ey.toFixed(1))
        c.halo.setAttribute('cx', String(W)); c.halo.setAttribute('cy', ey.toFixed(1))
      }

      const feeds = $$('[data-feed]')
      let fi = 0
      let nextFeed = 0
      function pushFeed() {
        if (!feed) return
        feeds.forEach(f => {
          const it = feed.items[fi % feed.items.length]
          const row = document.createElement('div')
          row.className = 'feed__row'
          row.innerHTML = '<i></i><b>' + it[0] + '</b>' + it[1] + '<span>' + feed.now + '</span>'
          f.insertBefore(row, f.firstChild)
          const rows = f.querySelectorAll('.feed__row')
          for (let i = 3; i < rows.length; i++) rows[i].remove()
          const st = f.querySelectorAll('.feed__row span')
          for (let j = 1; j < st.length; j++) st[j].textContent = j + ' ' + feed.min
        })
        fi++
      }

      const bars = $$('.m-chart')
      let nextBars = 0
      function morph() {
        bars.forEach(set => {
          Array.prototype.slice.call(set.children).forEach((b: HTMLElement, i: number) => {
            later(() => b.style.setProperty('--h', (26 + Math.random() * 68).toFixed(0) + '%'), i * 60)
          })
        })
      }

      requestAnimationFrame(function loop(now) {
        if (!alive) return
        if (!heroVis) { requestAnimationFrame(loop); return }
        if (now > nextNum) { nums.forEach(n => retarget(n, now)); nextNum = now + 3600 }
        nums.forEach(n => {
          if (n.t >= 1) return
          const p = Math.min(1, (now - n.t0) / n.dur)
          n.t = p
          const e = 1 - Math.pow(1 - p, 3)
          n.cur = n.from + (n.to - n.from) * e
          const txt = n.cur.toFixed(n.dec)
          const dot = txt.indexOf('.')
          let head = dot < 0 ? txt : txt.slice(0, dot)
          const tail = dot < 0 ? '' : txt.slice(dot)
          if (head.length > 3) head = head.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          n.el.textContent = head + tail + (n.el.getAttribute('data-suffix') || '')
        })
        charts.forEach(c => {
          if (!c.last) c.last = now
          c.t += (now - c.last) / c.step
          c.last = now
          while (c.t >= 1) {
            c.t -= 1
            c.vals.shift()
            const pv = c.vals[c.vals.length - 1]
            c.vals.push(Math.min(0.92, Math.max(0.08, pv + (Math.random() - 0.5) * 0.26 + (0.5 - pv) * 0.12)))
          }
          drawChart(c)
        })
        if (now > nextFeed) { pushFeed(); nextFeed = now + 3400 }
        if (now > nextBars) { morph(); nextBars = now + 3200 }
        requestAnimationFrame(loop)
      })
    }

    /* ---------- kartalar ichidagi navbat (index.html:1700) ---------- */
    const POS = ['p0', 'p1', 'p2', 'p3', 'px']
    function setPos(el: Element, cls: string) {
      for (let q = 0; q < POS.length; q++) el.classList.remove(POS[q])
      el.classList.add(cls)
    }
    $$('[data-cyc]').forEach((c, ci) => {
      const items = Array.prototype.slice.call(c.children) as Element[]
      const n = items.length
      if (!n) return
      const host = c.closest('.sol__c')
      const links = host ? (Array.prototype.slice.call(host.querySelectorAll('[data-cyc-link]')) as Element[]) : []
      let i = 0
      function place() {
        for (let k = 0; k < n; k++) {
          const d = (i - k + n) % n
          setPos(items[k], d < 4 ? 'p' + d : 'px')
        }
        links.forEach(lk => {
          const kids = Array.prototype.slice.call(lk.children) as Element[]
          for (let m = 0; m < kids.length; m++) {
            const dd = (i - m + kids.length) % kids.length
            setPos(kids[m], dd === 0 ? 'p0' : 'px')
          }
        })
      }
      place()
      if (reduce || n < 2) return
      later(() => {
        every(() => {
          const r = c.getBoundingClientRect()
          if (r.bottom < -260 || r.top > window.innerHeight + 260) return
          i = (i + 1) % n
          place()
        }, 3400)
      }, ci * 540)
    })

    /* ---------- hero: ERP modullari almashadi (index.html:1743) ---------- */
    {
      const wrap = $('[data-screens]')
      const stage = $('.stage')
      const scrAll = wrap ? (Array.prototype.slice.call(wrap.children) as HTMLElement[]) : []
      /* maketdagidek: reduce yoki bitta ekran — butun modul ishlamaydi
         (fit ham chaqirilmaydi, balandlik CSSdan qoladi) */
      if (wrap && stage && scrAll.length >= 2 && !reduce) {
        const scr = scrAll
        const icons = $$('.dash__ico')
        const urls = $$('.stage__url i')
        let cur = 0
        const fit = () => { wrap.style.height = scr[cur].offsetHeight + 'px' }
        function show(n: number) {
          cur = n
          for (let k = 0; k < scr.length; k++) scr[k].classList.toggle('is-on', k === n)
          for (let m = 0; m < icons.length; m++) icons[m].classList.toggle('is-on', m === n)
          for (let u = 0; u < urls.length; u++) urls[u].classList.toggle('is-on', u === n)
          fit()
        }
        fit()
        on(window, 'load', fit)
        if (document.fonts?.ready) document.fonts.ready.then(() => { if (alive) fit() })
        later(fit, 600)
        later(fit, 1600)
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(() => fit())
          scr.forEach(x => ro.observe(x))
          observers.push(ro)
        }
        let rt: ReturnType<typeof setTimeout> | undefined
        on(window, 'resize', () => { if (rt) clearTimeout(rt); rt = later(fit, 120) }, { passive: true })
        every(() => {
          const r = stage.getBoundingClientRect()
          if (r.bottom < 60 || r.top > window.innerHeight - 60) return
          show((cur + 1) % scr.length)
        }, 4600)
      }
    }

    /* ---------- telefon soati (index.html:1394) ---------- */
    {
      let phTimer: ReturnType<typeof setTimeout> | null = null
      function paintPhoneClock() {
        const clock = $('.ph__clock')
        if (!clock) return
        const now = new Date()
        const time = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2)
        clock.textContent = time
        const status = $('.ph__now')
        if (status) status.textContent = time
        const date = $('.ph__date')
        if (date) {
          const d = now.getDate()
          const day = PH_DAY[lang][now.getDay()]
          const month = PH_MONTH[lang][now.getMonth()]
          date.textContent = day + ', ' + (lang === 'uz' ? d + '-' + month : d + ' ' + month)
        }
        if (phTimer) clearTimeout(phTimer)
        phTimer = later(paintPhoneClock, (60 - now.getSeconds()) * 1000 + 250)
      }
      paintPhoneClock()
      on(document, 'visibilitychange', () => { if (!document.hidden) paintPhoneClock() })
    }

    /* ---------- jamoa akkordeoni (index.html:1780) ---------- */
    {
      const wrap = $('.crew')
      const cards = $$('[data-team]')
      if (wrap && cards.length >= 2) {
        const wide = mq('(min-width: 861px)')
        const open = (c: Element) => {
          if (!wide.matches) return
          cards.forEach(x => x.classList.toggle('is-on', x === c))
        }
        cards.forEach(c => {
          on(c, 'mouseenter', () => open(c))
          on(c, 'focus', () => open(c))
          on(c, 'click', () => open(c))
        })
        on(wrap, 'mouseleave', () => {
          if (!wide.matches) return
          cards.forEach(x => x.classList.remove('is-on'))
        })
      }
    }

    /* ---------- tasma (index.html:1803) ---------- */
    let boost = 0
    {
      const mq = document.getElementById('mq')
      let off = 0
      let half = 0
      const measure = () => { if (mq) half = mq.scrollWidth / 2 }
      measure()
      on(window, 'resize', measure)
      ;(function tick() {
        if (!alive) return
        if (!reduce && half && mq && trustVis) {
          off -= 0.6 + boost
          boost *= 0.92
          if (-off >= half) off += half
          mq.style.transform = 'translate3d(' + off.toFixed(1) + 'px,0,0)'
        }
        requestAnimationFrame(tick)
      })()
    }

    /* ---------- scroll: panel va bo'lim belgisi (index.html:1816) ---------- */
    {
      const top = document.getElementById('top')
      const links = $$('.nav a[data-sec]')
      const secs = $$('[data-sec]').filter(s => !s.matches('a'))
      let lastY = window.scrollY
      let ticking = false
      const onFrame = () => {
        const y = window.scrollY
        const dy = y - lastY
        top?.classList.toggle('is-stuck', y > 24)
        top?.classList.toggle('is-away', dy > 4 && y > 500)
        const mid = y + window.innerHeight * 0.4
        let cur = ''
        secs.forEach(s => { if ((s as HTMLElement).offsetTop <= mid) cur = s.getAttribute('data-sec') || '' })
        links.forEach(a => a.classList.toggle('is-on', a.getAttribute('data-sec') === cur))
        boost = Math.min(9, Math.abs(dy) * 0.35)
        lastY = y
        ticking = false
      }
      on(window, 'scroll', () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => { if (alive) onFrame() })
      }, { passive: true })
      onFrame()
    }

    /* ---------- shisha tugmalar (index.html:1833) ---------- */
    $$('.btn').forEach(b => {
      on(b, 'mousemove', (e: Event) => {
        const me = e as MouseEvent
        const r = b.getBoundingClientRect()
        b.style.setProperty('--gx', (((me.clientX - r.left) / r.width) * 100).toFixed(1) + '%')
        b.style.setProperty('--gy', (((me.clientY - r.top) / r.height) * 100).toFixed(1) + '%')
      })
    })

    /* ---------- menyu (index.html:1842) ---------- */
    {
      const burger = document.getElementById('burger')
      const drawer = document.getElementById('drawer')
      if (burger && drawer) {
        on(burger, 'click', () => {
          const open = drawer.classList.toggle('is-open')
          burger.classList.toggle('is-open', open)
          burger.setAttribute('aria-expanded', String(open))
        })
        drawer.querySelectorAll('a').forEach(a => {
          on(a, 'click', () => {
            drawer.classList.remove('is-open')
            burger.classList.remove('is-open')
            burger.setAttribute('aria-expanded', 'false')
          })
        })
      }
    }

    /* ---------- til: menyu ochish + marshrutga o'tish ---------- */
    $$('.lang').forEach(box => {
      const trigger = box.querySelector<HTMLButtonElement>('.lang__btn')
      if (!trigger) return
      const close = () => { box.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false') }
      on(trigger, 'click', (e: Event) => {
        e.stopPropagation()
        const open = !box.classList.contains('is-open')
        box.classList.toggle('is-open', open)
        trigger.setAttribute('aria-expanded', String(open))
      })
      box.querySelectorAll<HTMLButtonElement>('.lang__menu button').forEach(b => {
        on(b, 'click', () => {
          const l = b.getAttribute('data-lang') as Language | null
          close()
          if (!l || l === lang || !languages.includes(l)) return
          const rest = pathname.replace(/^\/(uz|ru|en)(?=\/|$)/, '')
          router.push(`/${l}${rest || ''}`)
        })
      })
      on(document, 'click', (e: Event) => { if (!box.contains(e.target as Node)) close() })
      on(document, 'keydown', (e: Event) => { if ((e as KeyboardEvent).key === 'Escape') close() })
    })

    /* ---------- yopishqoq CTA va telefon tugmasi (index.html:1879+) ---------- */
    {
      const bar = document.getElementById('cta')
      const fab = document.getElementById('ctaFab')
      if (bar) {
        const heroEl = $('.hero')
        const aloqa = document.getElementById('aloqa')
        const drawer = document.getElementById('drawer')
        const closeBtn = document.getElementById('ctaX')
        const KEY = 'avenir-cta-closed'
        let dismissed = false
        try { dismissed = localStorage.getItem(KEY) === '1' } catch { /* mumkin emas — mayli */ }
        let pastHero = false
        let atContact = false
        const apply = () => {
          const menuOpen = !!drawer?.classList.contains('is-open')
          const visible = pastHero && !atContact && !menuOpen
          bar.classList.toggle('is-on', !dismissed && visible)
          fab?.classList.toggle('is-on', dismissed && visible)
        }
        if (heroEl) {
          const o = new IO(es => { pastHero = !es[0].isIntersecting; apply() }, { threshold: 0 })
          o.observe(heroEl)
          observers.push(o)
        } else {
          pastHero = true
        }
        if (aloqa) {
          const o = new IO(es => { atContact = es[0].isIntersecting; apply() }, { threshold: 0 })
          o.observe(aloqa)
          observers.push(o)
        }
        if (drawer && 'MutationObserver' in window) {
          const mo = new MutationObserver(apply)
          mo.observe(drawer, { attributes: true, attributeFilter: ['class'] })
          observers.push(mo)
        }
        if (closeBtn) {
          on(closeBtn, 'click', () => {
            dismissed = true
            try { localStorage.setItem(KEY, '1') } catch { /* mumkin emas — mayli */ }
            apply()
          })
        }
        apply()
      }
    }

    } catch (err) {
      console.error('[v2] xatti-harakatlar skripti to\'xtadi:', err)
      /* Bezak yarim yo'lda uzilgan bo'lishi mumkin: kirish pardasi ekranni
         to'sib qolmasin va CSS bilan yashiringan bloklar ochilsin — aks holda
         sahifa ishlayotgan bo'lsa ham bo'sh ko'rinadi. */
      try {
        document.body.classList.remove('intro-on')
        const el = document.querySelector<HTMLElement>('#intro')
        if (el) { el.dataset.done = '1'; el.style.display = 'none' }
        document
          .querySelectorAll('.hero, .sv-hero, .rise, [data-split], .nums__c, .sol__c, .center, .final, .gc')
          .forEach(el => el.classList.add('is-in', 'unmask'))
      } catch { /* mumkin emas — mayli */ }
    }

    return () => {
      alive = false
      offs.forEach(f => f())
      timers.forEach(clearTimeout)
      tickers.forEach(clearInterval)
      observers.forEach(o => o.disconnect())
    }
  }, [lang, pathname, router, feed])

  return null
}
