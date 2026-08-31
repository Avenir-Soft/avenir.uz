import { notFound } from 'next/navigation'

/* Noma'lum manzil uchun FIRMA 404 sahifasi.
   Ilgari `/uz/zzz`, `/foo`, `/fr` kabi manzillar Next ning standart sahifasiga
   tushardi: oq fon butunlay qorong'i saytda, ingliz tilidagi «404: This page
   could not be found», `<html>` da `lang` yo'q va sahifada BITTA ham havola
   yo'q — bosadigan joyning o'zi qolmasdi. Firma sahifasi loyihada bor edi
   (`[lang]/not-found.tsx`), lekin u faqat ma'lum bo'lim ichidagi noma'lum
   slug uchun ishlardi: `/uz/services/nope` — ha, `/uz/nope` — yo'q.
   Ushbu catch-all barcha qolganini o'sha sahifaga olib keladi, to'g'ri 404
   statusi va serverda chizilgan HTML bilan (ya'ni bo'sh body ham qolmaydi).
   Statik segmentlar (`services`, `portfolio`, `privacy`, `terms`) undan
   ustunroq, shuning uchun mavjud sahifalar avvalgidek ochiladi. */
export default function CatchAllNotFound() {
  notFound()
}
