# Релиз 2: дизайн v2 в приложение — план работ

> **Для исполнителя:** `superpowers:executing-plans`, задачи сверху вниз. Источник правды для разметки и текстов — файлы `design/v2/*` на коммите слияния релиза 1; в задачах указаны диапазоны строк, дублировать их HTML в план бессмысленно.

**Цель:** боевой avenir.uz выглядит как макет `design/v2` — 12 страниц, 3 языка, — при живой форме заявок, сохранном SEO и аналитике.

**Подход:** «пересадка кожи». `v2.css` и `fx.js` переносятся байт в байт, разметка макета переводится в JSX дословно (классы не меняются), тексты уходят в словарь с серверным рендером по языкам, интерактив переписывается на хуки. Совпадение с макетом доказывается попиксельным сравнением, не глазами.

**Ветка:** `feat/site-design-v2` от текущего `main` (после релиза 1).

**Решения, принятые владельцем:** тексты и переводы — из макета; Mini-apps собирается по шаблону страницы «Telegram-боты» с текстами из текущего каталога; списки услуг/портфолио собираются из блоков макета; privacy/terms перекрашиваются.

---

## Задача 1: Фундамент — стили, шрифт, канвас-фон

**Файлы:**
- Создать: `app/v2.css` (копия `design/v2/assets/v2.css`, байт в байт)
- Создать: `app/v2-bridge.css` (мост поверх v2.css, только переопределения)
- Создать: `public/fx.js` (копия `design/v2/assets/fx.js`)
- Создать: `public/work/**` (копии `design/v2/assets/work/**` — скриншоты кейсов)
- Изменить: `app/[lang]/layout.tsx` (шрифт Inter вместо Cormorant/Manrope, импорт v2.css вместо globals.css)

- [ ] **Шаг 1: Скопировать файлы и сверить хеши**

```powershell
$p="C:\Users\Oybek\Desktop\avenir-landing"
Copy-Item "$p\design\v2\assets\v2.css" "$p\app\v2.css"
Copy-Item "$p\design\v2\assets\fx.js" "$p\public\fx.js"
Copy-Item "$p\design\v2\assets\work" "$p\public\work" -Recurse
(Get-FileHash "$p\design\v2\assets\v2.css").Hash -eq (Get-FileHash "$p\app\v2.css").Hash
(Get-FileHash "$p\design\v2\assets\fx.js").Hash -eq (Get-FileHash "$p\public\fx.js").Hash
```

Ожидается: оба сравнения `True`.

- [ ] **Шаг 2: Мост `app/v2-bridge.css`**

Правки в сам v2.css запрещены — всё, что нужно поверх, живёт здесь и подключается после него:

```css
/* Ko'prik: v2.css'ga tegmaymiz, ustidan shu fayl yozadi. */

/* next/font beradigan Inter'ni maketning --font o'zgaruvchisiga ulaymiz */
:root { --font: var(--font-inter), -apple-system, 'Segoe UI', sans-serif; }
```

Сюда же позже лягут стили для перекрашенных privacy/terms (задача 7) — с префиксом `.legal-v2`, чтобы не задевать макетные классы.

- [ ] **Шаг 3: Пересадить layout**

В `app/[lang]/layout.tsx`: убрать Cormorant_Garamond и Manrope, подключить `Inter` (`subsets: ['latin','latin-ext','cyrillic']`, `weight: ['400','500','600','700','800']`, `variable: '--font-inter'`), заменить `import '../globals.css'` на `import '../v2.css'` и `import '../v2-bridge.css'`. GA, Meta Pixel, метаданные, hreflang — не трогать. В `<body>` добавить `<canvas id="fx" aria-hidden="true">` первым элементом и `<Script src="/fx.js" strategy="afterInteractive">`.

- [ ] **Шаг 4: Смоук**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing; npm run build
```

Ожидается: сборка проходит (страницы пока старые по разметке — это нормально, они временно «разъедутся» по виду до задач 3–7).

- [ ] **Шаг 5: Коммит** `feat(v2): стили, шрифт Inter и канвас-фон макета`

---

## Задача 2: Словарь переводов

В макете перевод — подмена DOM-текста по узбекской строке: `I18N['ru']['Yechimlar'] = 'Решения'`. Два источника: `design/v2/index.html:828–1325` (главная) и `design/v2/assets/page.js:31–1325` (подстраницы). Вместе ≈1284 пары.

**Модель словаря:** ключ = узбекская строка (канонический текст макета), значения ru/en. Это сохраняет тексты макета дословно и избавляет от ручного придумывания 1284 ключей.

**Файлы:**
- Создать: `scripts/extract-i18n.mjs` (одноразовый генератор)
- Создать: `lib/i18n-v2.ts` (сгенерированный словарь + helper)

- [ ] **Шаг 1: Генератор** — `scripts/extract-i18n.mjs` читает оба файла, вырезает объекты `I18N` (они — валидный JSON после `var I18N =` до `};`), сливает (при конфликте приоритет у index.html), пишет `lib/i18n-v2.ts`:

```ts
export type V2Language = 'uz' | 'ru' | 'en'
export const v2Dict: Record<'ru' | 'en', Record<string, string>> = { /* сгенерировано */ }
export function tv(lang: V2Language, uz: string): string {
  if (lang === 'uz') return uz
  return v2Dict[lang][uz] ?? uz
}
```

- [ ] **Шаг 2: Запустить, проверить объём** — `node scripts/extract-i18n.mjs`; ожидается ≥600 пар в ru и в en; выборочно сверить 3 строки с макетом.
- [ ] **Шаг 3: Typecheck + коммит** `feat(v2): словарь переводов из макета`

---

## Задача 3: Оболочка — шапка, подвал, интро, липкая панель, хуки

**Файлы (все создать):**
- `components/v2/header.tsx` — `index.html:41–85` (лого, меню, бургер, шторка `#drawer`, переключатель языка списком; на подстраницах меню ведёт на `/#секция`)
- `components/v2/footer.tsx` — `index.html:791–798` + юр-строка из `crm-erp.html:183–189`
- `components/v2/intro.tsx` — `index.html:19–39` + логика `index.html:1531–1553` (таймер 1350 мс, клик/Esc, reduce-motion → пропуск)
- `components/v2/sticky-cta.tsx` — `index.html:800–811` + `1879–1933`, включая кнопку-телефон и `localStorage: avenir-cta-closed` (наша сегодняшняя правка)
- `components/v2/hooks.ts` — `useReveal` (IntersectionObserver: `is-in`, `unmask` через 1400 мс, `is-play` для `.sol__c`/`.gc`, счётчики `[data-od]`), `useHeaderScroll` (скрытие шапки при скролле вниз, `index.html:1465–1490`), `useSplit` (разбивка заголовков `[data-split]` на буквы — портировать `splitOne`, `index.html:809–828` в page.js), `useClock` (живые часы ERP-макета)
- `components/v2/lang-switcher.tsx` — переход по маршруту `localizedPath(lang, текущий путь)`, НЕ подмена DOM

**Правило для всех компонентов:** классы и структура тегов — дословно из макета; текст — через `tv(lang, 'узбекская строка')`.

- [ ] Шаг 1: хуки → Шаг 2: шапка+подвал → Шаг 3: интро+панель → Шаг 4: `npm run build` → Шаг 5: коммит `feat(v2): оболочка сайта`

---

## Задача 4: Главная страница

**Файлы:** `components/v2/home/hero.tsx` (`index.html:88–336`, внутри ERP-макет с часами), `solutions.tsx` (`337–565`), `projects.tsx` (`566–633`), `process.tsx` (`634–657`), `team.tsx` (`658–742`), `contact.tsx` (`743–790` — разметка макета, отправка и состояния из старого `components/contact.tsx`: fetch `/api/contact`, обработка 429/ошибок, событие Lead в Pixel). Изменить: `app/[lang]/page.tsx` — собрать из этих секций.

- [ ] По секции за шаг, после каждой `npm run build`; коммит `feat(v2): главная страница` (или посекционно).

---

## Задача 5: Страницы решений (6)

**Файлы:** `components/v2/service-page.tsx` — общий шаблон подстраницы (`crm-erp.html:20–189`: sv-hero, блоки, экраны `#ekranlar`, процесс, CTA). Данные по каждой услуге — `lib/v2-services.ts` (тексты из соответствующих html). Изменить: `app/[lang]/services/[slug]/page.tsx`.

Mini-apps: тот же шаблон, тексты из `lib/service-catalog.ts` (текущая боевая страница), переводы уже есть в `lib/i18n.ts`.

- [ ] Шаблон → данные 6 услуг → сборка → коммит `feat(v2): страницы решений`

---

## Задача 6: Страницы кейсов (6)

Аналогично: `components/v2/portfolio-page.tsx` (по `vac-uz.html`/`avenir-os.html` — там структура богаче: скрины `public/work/...`), `lib/v2-portfolio.ts`, изменить `app/[lang]/portfolio/[slug]/page.tsx`.

- [ ] Шаблон → данные 6 кейсов → сборка → коммит `feat(v2): страницы кейсов`

---

## Задача 7: Списки, privacy/terms, not-found

- `app/[lang]/services/page.tsx` — сетка решений из секции `yechimlar` главной + свой заголовок.
- `app/[lang]/portfolio/page.tsx` — сетка кейсов из секции `loyihalar`.
- privacy/terms: обернуть существующий текст в оболочку v2, тёмные стили в `v2-bridge.css` под `.legal-v2`. Юр-текст не менять ни на символ.
- `app/[lang]/not-found.tsx` — перекрасить.
- [ ] Сборка → коммит `feat(v2): списки и служебные страницы`

---

## Задача 8: Метаданные и чистка

- title/description страниц — из `<title>`/`<meta name="description">` соответствующих html макета (через `tv`).
- Удалить осиротевшее: старые `components/*.tsx`, не используемые новыми страницами (проверить `grep -r` по импортам), `app/globals.css`.
- `npm run typecheck && npm run lint && npm run build` — чисто.
- [ ] Коммит `feat(v2): метаданные из макета, чистка старых компонентов`

---

## Задача 9: Попиксельная сверка

**Файлы:** `scratchpad/pixel-diff.js` (CDP: два URL → скриншоты → диф).

Методика:
- Один Chrome (порт 9223), viewport 1440×2000@1, `captureBeyondViewport` для полной высоты; главная дополнительно 390×844.
- Обе стороны загружаются с заранее внедрённым скриптом (`Page.addScriptToEvaluateOnNewDocument`): фиксированный `Date` (одно и то же время → часы ERP-макета совпадают) и `Math.random` с сидом (звёзды фона).
- `prefers-reduced-motion: reduce` эмулируется на обеих сторонах — интро, канвас и появления отключаются одинаково, кадр детерминирован.
- Языки макета: ru/en включаются `localStorage.setItem('avenir-language', ...)` до загрузки.
- Сравнение канвасом: доля пикселей с |Δ|>8 хотя бы в одном канале. Порог: ≤0.3%. Выход — процент + PNG-карта расхождений.

Матрица: 12 страниц × 3 языка + главная 390px = 37 сравнений.

- [ ] Скрипт → прогон → чинить всё выше порога → повторить до зелёного → результаты в `docs/superpowers/plans/2026-08-26-pixel-report.md` → коммит

---

## Задача 10: Функциональная приёмка на боевой сборке

Как в релизе 1: `PORT=3005 npm run start`, затем:
- [ ] маршруты: `/`→307, языки 200, старые адреса 308, sitemap 51;
- [ ] форма: `{}`→400, мусор→400, корректная (тело из файла!)→не-400, очередь→429; напоминание: между запросами 16 с, тела через `--data-binary "@file"`;
- [ ] клик по форме в браузере: заполнение → кнопка → состояние «отправляется» → ошибка доставки без токена (локально это норма);
- [ ] коммит итогов.

---

## Задача 11: Выкатка

- [ ] Пуш `feat/site-design-v2`, ссылка сравнения владельцу.
- [ ] **СТОП: мерж только после явного «мержи».**
- [ ] После мержа: опрос прода до появления нового вида (маркер: в html `/uz` есть `class="hero"` из v2), проверка маршрутов/карты, скриншоты прода владельцу.
- [ ] Владелец шлёт живую заявку → дошла в Telegram и CRM → релиз закрыт.
- [ ] Откат при беде: `git revert -m 1` мерж-коммита, пуш.
