# PoC hugo + svelte

Статически сгенерированный сайт с динамически рендерируемым виджетом поиска по сайту.

## Требования

+ Наличие [node](https://nodejs.org/en/download/)
+ Наличие [npm](https://www.npmjs.com/get-npm)
+ Наличие [go](https://golang.org/dl/)
+ Наличие [hugo](https://gohugo.io/getting-started/installing/)

## Установка зависимостей для сборки виджетов клиента

1. Перейти в каталог с проектом
2. Выполнить ```sh npm i```

## Сборка

1. Выполнить ```sh npm run build```
2. Выполнить ```sh hugo server --disableFastRender -D```

### Флаги запуска hugo сервера разработки

| Флаг | Пояснение | Причина |
| :--: | :-------- | :------ |
| --disableFastRender | Включает принудительный полный ререндер при обнаружении изменений | Избавляет от багов дублирования страниц, индексируемых при рендере домашней страницы |
| -D (--buildDrafts) | Включает в сборку контент помеченный как драфт в frontmatter | Добавляет страницы в сборку |

## Источники

1. [Флаги разработчиской сборки](https://forestry.io/blog/build-a-json-api-with-hugo/)
2. [Hugo Server](https://gohugo.io/commands/hugo_server/)
