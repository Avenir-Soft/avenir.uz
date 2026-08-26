// Maketning I18N lug'atlarini lib/i18n-v2.ts ga yig'adi.
// Manbalar: design/v2/index.html (bosh sahifa) va design/v2/assets/page.js
// (ichki sahifalar). Kalit — o'zbekcha satr, qiymat — ru/en tarjimalar.
// Bir marta ishlatiladi: node scripts/extract-i18n.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function extractI18N(source, label) {
  const start = source.indexOf('var I18N = {')
  if (start === -1) throw new Error(`I18N topilmadi: ${label}`)
  // Qavslarni sanab, obyekt oxirini topamiz
  let i = source.indexOf('{', start)
  let depth = 0
  let end = -1
  let inString = null
  for (; i < source.length; i++) {
    const ch = source[i]
    const prev = source[i - 1]
    if (inString) {
      if (ch === inString && prev !== '\\') inString = null
      continue
    }
    if (ch === '"' || ch === "'") { inString = ch; continue }
    if (ch === '{') depth++
    if (ch === '}') { depth--; if (depth === 0) { end = i; break } }
  }
  if (end === -1) throw new Error(`I18N yopilmagan: ${label}`)
  const objText = source.slice(source.indexOf('{', start), end + 1)
  // O'z faylimiz, build vaqtida: oddiy evaluate yetarli
  return new Function(`return (${objText})`)()
}

const indexHtml = readFileSync(resolve(root, 'design/v2/index.html'), 'utf8')
const pageJs = readFileSync(resolve(root, 'design/v2/assets/page.js'), 'utf8')

const fromPage = extractI18N(pageJs, 'page.js')
const fromIndex = extractI18N(indexHtml, 'index.html')

// page.js — asos, index.html ustidan yozadi (bosh sahifa aniqrog'i)
const merged = { ru: {}, en: {} }
for (const lang of ['ru', 'en']) {
  Object.assign(merged[lang], fromPage[lang] ?? {}, fromIndex[lang] ?? {})
}

const counts = { ru: Object.keys(merged.ru).length, en: Object.keys(merged.en).length }
console.log(`ru: ${counts.ru} juft, en: ${counts.en} juft`)

const header = `// AVTOGENERATSIYA: scripts/extract-i18n.mjs, manba — design/v2 maketi.
// Kalit — maketdagi o'zbekcha satr (kanonik matn), qiymat — tarjima.
// Qo'lda tahrir qilinmaydi; matn o'zgarsa, maketda o'zgartirib qayta generatsiya qilinadi.

export type V2Language = 'uz' | 'ru' | 'en'

export const v2Dict: Record<'ru' | 'en', Record<string, string>> = `

const body = JSON.stringify(merged, null, '\t')

const footer = `

/** Maket matni: uz — kalitning o'zi, ru/en — lug'atdan; topilmasa uz qaytadi. */
export function tv(lang: V2Language, uz: string): string {
\tif (lang === 'uz') return uz
\treturn v2Dict[lang][uz] ?? uz
}
`

writeFileSync(resolve(root, 'lib/i18n-v2.ts'), header + body + footer)
console.log('lib/i18n-v2.ts yozildi')
