# Состояние avenir.uz до релиза 1

Снято: 26 августа 2026
Коммит `main` на момент снимка: `a4d78a066fa2e491c905ab24815dfc2753a9f9c2`

## Ответы прода

```
/                        -> 200
/uz                      -> 404
/ru                      -> 404
/en                      -> 404
/services/crm-erp        -> 200
/portfolio/avenir-os     -> 200
/privacy                 -> 200
/terms                   -> 200
/sitemap.xml             -> 200
/robots.txt              -> 200
```

Адресов в карте сайта: 15, все без языкового префикса.

## Проверки ветки перед слиянием (задачи 1–3 плана)

- `npm run typecheck` — чисто.
- `npm run lint` — чисто.
- `npm run build` — успешно; в таблице маршрутов все языковые страницы, `/api/contact`, `robots`, `sitemap`, `Proxy (Middleware)`.
- Боевая сборка локально: `/` → 307 на `/uz`; `/uz` `/ru` `/en` → 200; старые адреса (`/services/:slug`, `/portfolio/:slug`, `/privacy`, `/terms`) → 308 на `/uz/...`; языковые страницы услуг и кейсов → 200.
- Карта сайта: 51 адрес, все с языковым префиксом. Хост в локальной сборке — из `.env.local`; на проде подставляется `https://avenir.uz` через ARG в Dockerfile.
- Обработчик заявок: пустое тело → 400, кривой телефон → 400, корректная заявка проходит валидацию и падает на доставке с 500 «Server is not configured» (локально нет токена — ожидаемо), частые запросы → 429. Помимо окна «5 заявок за 10 минут» действует минимальный интервал 15 секунд между отправками с одного адреса.

## После релиза 1

Мерж `a4d78a0..88e0c60` запушен 26 августа в 14:25, Dokploy выкатил за ~3 минуты.

```
/                        -> 307 https://avenir.uz/uz
/uz /ru /en              -> 200, 200, 200
/services/crm-erp        -> 308 https://avenir.uz/uz/services/crm-erp
/portfolio/avenir-os     -> 308 https://avenir.uz/uz/portfolio/avenir-os
/privacy                 -> 308 https://avenir.uz/uz/privacy
/terms                   -> 308 https://avenir.uz/uz/terms
```

- Карта сайта: 51 адрес, все `https://avenir.uz/{uz|ru|en}/...`, вне схемы 0.
- `robots.txt`: `Host: https://avenir.uz`, ссылка на sitemap корректна.
- `/ru` рендерится с русским title («Avenir — IT-агентство в Ташкенте…»).
- Новая карточка `portfolio/avenir-os.webp` отдаётся, 81 868 байт — наш файл.
- `/api/contact` жив: пустое тело → 400.

Живая тестовая заявка (Telegram + CRM): ожидает отправки владельцем.
