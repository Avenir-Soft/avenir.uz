# Релиз 1: архитектура на прод — план работ

> **Для исполнителя:** используй `superpowers:executing-plans` и иди по задачам сверху вниз. Шаги отмечены чекбоксами.

**Цель:** вывести на `avenir.uz` языковые маршруты, редиректы, обновлённый приём заявок и почищенные зависимости — не потеряв ни одной заявки.

**Подход:** ветка `feat/site-architecture` уже содержит нужный код (это содержимое `XasanCooks` плюс три коммита от 26 августа). Задача плана — доказать, что код исправен, слить в `main` и убедиться на живом сайте, что заявки доходят.

**Стек:** Next 16.1.6, React 19.2.4, Tailwind 4, деплой — Docker через Dokploy по push в `main`.

**Что уже сделано до начала плана:**
- ветка `feat/site-architecture` создана от `95b48b6`, три коммита: правки макета, карточка Avenir OS, спека;
- доступ на запись в `Avenir-Soft/avenir.uz` проверен;
- `npm run build` проходит (проверено 26 августа);
- новых переменных окружения ветка не вводит — `.env.example` не менялся относительно `main`.

**Спека:** `docs/superpowers/specs/2026-08-26-avenir-v2-redesign-design.md`

---

## Задача 1: Проверки качества на ветке

**Файлы:** изменений нет, только проверки.

- [ ] **Шаг 1: Убедиться, что дерево чистое и ветка та**

```powershell
git -C C:\Users\Oybek\Desktop\avenir-landing status --short
git -C C:\Users\Oybek\Desktop\avenir-landing rev-parse --abbrev-ref HEAD
```

Ожидается: пустой вывод у `status`, `feat/site-architecture` у второй команды. Если дерево грязное — разобраться, что за файлы, до продолжения.

- [ ] **Шаг 2: Проверка типов**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing; npm run typecheck
```

Ожидается: команда завершается без вывода ошибок, код возврата 0.

- [ ] **Шаг 3: Линтер**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing; npm run lint
```

Ожидается: код возврата 0. Предупреждения допустимы, ошибки — нет.

- [ ] **Шаг 4: Боевая сборка**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing; npm run build
```

Ожидается: в конце вывода таблица маршрутов, где присутствуют `/[lang]`, `/[lang]/services`, `/[lang]/services/[slug]`, `/[lang]/portfolio`, `/[lang]/portfolio/[slug]`, `/[lang]/privacy`, `/[lang]/terms`, `/api/contact`, `/robots.txt`, `/sitemap.xml` и строка `Proxy (Middleware)`. Код возврата 0.

Если сборка падает — остановиться и чинить, дальше по плану не идти.

---

## Задача 2: Языковые маршруты и редиректы на боевой сборке

Проверяем именно собранное приложение, а не dev-сервер: в деве редиректы из `next.config.mjs` ведут себя иначе.

**Файлы:** изменений нет.

- [ ] **Шаг 1: Поднять боевой сервер на свободном порту**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing; $env:PORT=3005; npm run start
```

Запускать в фоне. Ожидается строка `Ready` и `http://localhost:3005`.

- [ ] **Шаг 2: Проверить корень и три языка**

```powershell
foreach ($u in @("/","/uz","/ru","/en")) { "{0,-10} -> {1}" -f $u, (& curl.exe -s -o NUL -w "%{http_code} %{redirect_url}" --max-time 15 "http://localhost:3005$u") }
```

Ожидается: `/` отдаёт `307` с переходом на один из языков; `/uz`, `/ru`, `/en` отдают `200`.

- [ ] **Шаг 3: Проверить редиректы со старых адресов**

```powershell
foreach ($u in @("/services/crm-erp","/portfolio/avenir-os","/privacy","/terms")) { "{0,-24} -> {1}" -f $u, (& curl.exe -s -o NUL -w "%{http_code} %{redirect_url}" --max-time 15 "http://localhost:3005$u") }
```

Ожидается: у всех четырёх код `308` либо `301`, а `redirect_url` начинается с `/uz`. Это те адреса, которые сейчас живы на проде и отдают 200 — терять их нельзя.

- [ ] **Шаг 4: Проверить, что языковые страницы услуг и кейсов открываются**

```powershell
foreach ($u in @("/uz/services/crm-erp","/ru/services/mini-apps","/en/portfolio/vac-uz","/ru/services","/uz/portfolio")) { "{0,-28} -> {1}" -f $u, (& curl.exe -s -o NUL -w "%{http_code}" --max-time 15 "http://localhost:3005$u") }
```

Ожидается: все `200`.

- [ ] **Шаг 5: Проверить карту сайта**

```powershell
$sm = & curl.exe -s --max-time 20 "http://localhost:3005/sitemap.xml"
"всего адресов: " + ([regex]::Matches($sm, '<loc>')).Count
"без языкового префикса: " + ([regex]::Matches($sm, '<loc>https://avenir\.uz/(?!uz/|ru/|en/)[^<]')).Count
```

Ожидается: `всего адресов: 51` (17 путей × 3 языка) и `без языкового префикса: 0`.

- [ ] **Шаг 6: Проверить robots.txt**

```powershell
& curl.exe -s --max-time 15 "http://localhost:3005/robots.txt"
```

Ожидается: присутствует строка `Sitemap: https://avenir.uz/sitemap.xml` и нет `Disallow: /`.

- [ ] **Шаг 7: Остановить сервер**

```powershell
$pid3005 = (Get-NetTCPConnection -LocalPort 3005 -State Listen -ErrorAction SilentlyContinue).OwningProcess
if ($pid3005) { Stop-Process -Id $pid3005 -Force -Confirm:$false }
```

---

## Задача 3: Обработчик заявок — проверка на боевой сборке

Реальную доставку в Telegram и CRM здесь проверить нельзя: боевые токены лежат в окружении Dokploy, локально их нет и заводить их локально не нужно. Проверяем то, что проверяемо без секретов — валидацию и антиспам. Живую доставку проверяем после деплоя, в задаче 6.

**Файлы:** изменений нет. `app/api/contact/route.ts` не трогаем.

- [ ] **Шаг 1: Поднять боевой сервер**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing; $env:PORT=3005; npm run start
```

Запускать в фоне.

- [ ] **Шаг 2: Пустое тело — должно отлететь**

```powershell
& curl.exe -s -o NUL -w "%{http_code}`n" -X POST -H "Content-Type: application/json" -d "{}" --max-time 15 "http://localhost:3005/api/contact"
```

Ожидается: `400`.

- [ ] **Шаг 3: Телефон-мусор — должен отлететь**

```powershell
& curl.exe -s -o NUL -w "%{http_code}`n" -X POST -H "Content-Type: application/json" -d "{\"name\":\"Тест\",\"phone\":\"abc\",\"telegramUsername\":\"@test\",\"employeeCount\":\"10\",\"language\":\"ru\"}" --max-time 15 "http://localhost:3005/api/contact"
```

Ожидается: `400`.

- [ ] **Шаг 4: Корректная заявка — валидацию проходит**

```powershell
& curl.exe -s -w "`nHTTP %{http_code}`n" -X POST -H "Content-Type: application/json" -d "{\"name\":\"Тест Тестов\",\"phone\":\"+998901234567\",\"telegramUsername\":\"@testuser\",\"employeeCount\":\"10\",\"language\":\"ru\"}" --max-time 20 "http://localhost:3005/api/contact"
```

Ожидается: код **не** `400`. Без токена Telegram обработчик вернёт ошибку отправки (`500` или `502`) — это правильное поведение, оно означает, что валидация пройдена и дело дошло до доставки. Если пришёл `400` — валидация ломает нормальные заявки, это блокер.

- [ ] **Шаг 5: Антиспам-лимит**

```powershell
1..7 | ForEach-Object { & curl.exe -s -o NUL -w "$_`: %{http_code}`n" -X POST -H "Content-Type: application/json" -d "{\"name\":\"Тест Тестов\",\"phone\":\"+998901234567\",\"telegramUsername\":\"@testuser\",\"employeeCount\":\"10\",\"language\":\"ru\"}" --max-time 20 "http://localhost:3005/api/contact" }
```

Ожидается: на пятой-шестой попытке код меняется на `429`. Лимит по умолчанию — 5 отправок за 10 минут с одного адреса.

- [ ] **Шаг 6: Остановить сервер**

```powershell
$pid3005 = (Get-NetTCPConnection -LocalPort 3005 -State Listen -ErrorAction SilentlyContinue).OwningProcess
if ($pid3005) { Stop-Process -Id $pid3005 -Force -Confirm:$false }
```

---

## Задача 4: Зафиксировать состояние прода до релиза

Нужно, чтобы после деплоя было с чем сравнивать, а в случае отката — куда возвращаться.

**Файлы:**
- Создать: `docs/superpowers/plans/2026-08-26-prod-before.md`

- [ ] **Шаг 1: Снять текущие ответы прода**

```powershell
$out = @()
foreach ($u in @("/","/uz","/ru","/en","/services/crm-erp","/portfolio/avenir-os","/privacy","/terms","/sitemap.xml","/robots.txt")) {
  $out += "{0,-24} -> {1}" -f $u, (& curl.exe -s -o NUL -w "%{http_code}" --max-time 20 "https://avenir.uz$u")
}
$out
```

- [ ] **Шаг 2: Записать снимок в файл**

Узнать коммит, на котором сейчас стоит прод:

```powershell
git -C C:\Users\Oybek\Desktop\avenir-landing rev-parse upstream/main
```

Создать `docs/superpowers/plans/2026-08-26-prod-before.md` ровно такого вида, подставив вывод шага 1 и коммит:

```markdown
# Состояние avenir.uz до релиза 1

Снято: 26 августа 2026
Коммит `main` на момент снимка: `<хеш из команды выше>`

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

## После релиза 1

Заполняется в задаче 6.
```

Числа в блоке заменить на фактический вывод шага 1, если он отличается.

- [ ] **Шаг 3: Коммит**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing
git add docs/superpowers/plans/2026-08-26-prod-before.md
git commit -m "docs: снимок состояния прода перед релизом 1"
```

---

## Задача 5: Отправить ветку и открыть слияние

**Файлы:** изменений нет.

- [ ] **Шаг 1: Отправить ветку в основной репозиторий**

```powershell
$env:GIT_SSH_COMMAND = "ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new"
git -C C:\Users\Oybek\Desktop\avenir-landing push -u upstream feat/site-architecture
```

Ожидается: `* [new branch] feat/site-architecture -> feat/site-architecture`.

- [ ] **Шаг 2: Показать владельцу, что уедет**

```powershell
git -C C:\Users\Oybek\Desktop\avenir-landing log upstream/main..HEAD --oneline
git -C C:\Users\Oybek\Desktop\avenir-landing diff --stat upstream/main..HEAD
```

Вывод отдать владельцу вместе со ссылкой на сравнение:
`https://github.com/Avenir-Soft/avenir.uz/compare/main...feat/site-architecture`

- [ ] **Шаг 3: Остановиться и спросить разрешение**

Слияние в `main` запускает автодеплой Dokploy и меняет боевой сайт. Дальше не двигаться, пока владелец явно не скажет «мержим». Спросить прямо: слить самому или он сделает это через интерфейс GitHub.

- [ ] **Шаг 4: Слияние (только после разрешения)**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing
git fetch upstream
git checkout -B main upstream/main
git merge --no-ff feat/site-architecture -m "feat(site): языковые маршруты, редиректы и обновлённый приём заявок"
git push upstream main
```

Ожидается: push проходит, Dokploy начинает сборку.

---

## Задача 6: Проверка живого сайта после деплоя

Это главная задача релиза. Пока она не пройдена, релиз 2 не начинается.

**Файлы:** изменений нет.

- [ ] **Шаг 1: Дождаться выкатки**

Опрашивать прод, пока не появятся языковые маршруты:

```powershell
for ($i=0; $i -lt 40; $i++) {
  $c = & curl.exe -s -o NUL -w "%{http_code}" --max-time 20 "https://avenir.uz/ru"
  "попытка $i : /ru -> $c"
  if ($c -eq "200") { break }
  Start-Sleep -Seconds 30
}
```

Ожидается: рано или поздно `200`. Если через 20 минут всё ещё `404` — смотреть логи сборки в Dokploy.

- [ ] **Шаг 2: Языки открываются**

```powershell
foreach ($u in @("/uz","/ru","/en")) { "{0,-6} -> {1}" -f $u, (& curl.exe -s -o NUL -w "%{http_code}" --max-time 20 "https://avenir.uz$u") }
```

Ожидается: три раза `200`.

- [ ] **Шаг 3: Старые адреса не потерялись**

```powershell
foreach ($u in @("/services/crm-erp","/portfolio/avenir-os","/privacy","/terms")) { "{0,-24} -> {1}" -f $u, (& curl.exe -s -o NUL -w "%{http_code} %{redirect_url}" --max-time 20 "https://avenir.uz$u") }
```

Ожидается: `301` либо `308`, адрес перехода начинается с `https://avenir.uz/uz/`.

- [ ] **Шаг 4: Карта сайта обновилась**

```powershell
$sm = & curl.exe -s --max-time 25 "https://avenir.uz/sitemap.xml"
"всего адресов: " + ([regex]::Matches($sm, '<loc>')).Count
```

Ожидается: `51`.

- [ ] **Шаг 5: Живая заявка — критерий приёмки релиза**

Открыть `https://avenir.uz/ru`, дойти до формы и отправить настоящую заявку с пометкой в имени, например «Проверка релиза 26.08». Заполняет владелец: вводить чужие данные в формы я не могу.

Ожидается: сообщение приходит **и в Telegram, и в CRM** (лид виден в AvenirOS). Проверить оба канала, а не один.

- [ ] **Шаг 6: Если заявка не дошла — откат**

```powershell
cd C:\Users\Oybek\Desktop\avenir-landing
git fetch upstream
git checkout -B main upstream/main
git revert --no-edit -m 1 HEAD
git push upstream main
```

Dokploy соберёт предыдущее состояние. После отката разбираться с причиной, не оставляя прод сломанным.

- [ ] **Шаг 7: Зафиксировать результат**

Дописать в `docs/superpowers/plans/2026-08-26-prod-before.md` раздел «После релиза 1» с ответами прода и отметкой, дошла ли тестовая заявка. Закоммитить.

---

## Что дальше

После зелёной задачи 6 пишется отдельный план на релиз 2 — перенос дизайна. До этого его писать рано: разбивка задач зависит от поблочной инвентаризации макета, которую имеет смысл делать на уже слитой архитектуре.

**Вопрос, который к тому моменту надо будет закрыть:** в каталоге услуг шесть позиций (`web-sites`, `mobile-apps`, `ai-bots`, `crm-erp`, `telegram-bots`, `mini-apps`), а в макете страниц решений пять — для `mini-apps` эталона нет. Решить, рисуем ли ей страницу в стиле макета или убираем услугу из каталога.
