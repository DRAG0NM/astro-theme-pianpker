---
title: Руководство по теме
published: 2025-01-26
updated: 2025-04-13
tags:
  - Тема блога
  - Руководство
pin: 99
lang: ru
abbrlink: theme-guide
---

Pianpker — персональный блог-проект, созданный на [Astro](https://astro.build/). Это руководство описывает его конфигурацию и процесс публикации, чтобы проект оставался понятным и пригодным для повторного использования.

## Конфигурация темы

Настройте свой блог путем изменения конфигурационного файла [src/config.ts](https://github.com/DRAG0NM/astro-theme-pianpker/blob/main/src/config.ts).

### Информация о сайте

```ts
site: {
  // заголовок сайта
  title: 'Pianpker'
  // подзаголовок сайта
  subtitle: 'Less, between the lines'
  // описание сайта
  description: 'Pianpker — Less, between the lines.'
  // использовать многоязычные заголовок/подзаголовок/описание из src/i18n/ui.ts вместо статических выше
  i18nTitle: true // true | false
  // имя автора
  author: 'Drag0nM'
  // адрес сайта
  url: 'https://pianpker.pages.dev'
  // базовый путь
  // корневая директория для всех страниц и ресурсов
  base: '/' // например, '/blog', '/docs'
  // url фавикона
  // рекомендуемые форматы: svg, png или ico
  favicon: '/icons/favicon.svg' // или https://example.com/favicon.svg
}
```

### Цвет темы

```ts
color: {
  // режим темы по умолчанию
  mode: 'light' // light | dark | auto
  // светлый режим
  light: {
    // основной цвет
    // используется для заголовков, эффекта наведения и т.д.
    primary: 'oklch(25% 0.005 298)'
    // вторичный цвет
    // используется для текста постов
    secondary: 'oklch(40% 0.005 298)'
    // цвет фона
    background: 'oklch(96% 0.005 298)'
    // цвет выделения
    // используется для панели навигации, выделенного текста и т.д.
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)'
  }
  // темный режим
  dark: {
    // основной цвет
    primary: 'oklch(92% 0.005 298)'
    // вторичный цвет
    secondary: 'oklch(77% 0.005 298)'
    // цвет фона
    background: 'oklch(22% 0.005 298)'
    // цвет выделения
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)'
  }
}
```

### Глобальные настройки

```ts
global: {
  // язык по умолчанию
  // язык корневого пути сайта '/'
  locale: 'zh' // de | en | es | fr | ja | ko | pl | pt | ru | zh | zh-tw
  // дополнительные языки
  // создает многоязычные пути, такие как '/en/' '/fr/'
  // не указывайте код языка, указанный выше, можно оставить пустым массивом []
  moreLocales: ['en', 'fr', 'ja', 'ru', 'zh-tw'] // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
  // стиль шрифта статьи
  fontStyle: 'sans' // sans | serif
  // формат даты статьи
  // YYYY-MM-DD | MM-DD-YYYY | DD-MM-YYYY | MMM D YYYY | D MMM YYYY
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025，13 Apr 2025
  dateFormat: 'YYYY-MM-DD'
  // включить оглавление
  toc: true // true | false
  // включить математический рендеринг katex
  katex: true // true | false
  // уменьшить движение
  reduceMotion: false // true | false
}
```

### Система комментариев

```ts
comment: {
  // включить систему комментариев
  enabled: true // true | false
  // система комментариев giscus
  giscus: {
    repo: ''
    repoId: ''
    category: ''
    categoryId: ''
    mapping: 'pathname'
    strict: '0'
    reactionsEnabled: '1'
    emitMetadata: '0'
    inputPosition: 'bottom'
  }
  // система комментариев twikoo
  twikoo: {
    envId: ''
    // version: версию фронтенда можно изменить в package.json
  }
  // система комментариев waline
  waline: {
    // URL сервера
    serverURL: ''
    // URL эмодзи
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // дополнительные эмодзи: https://waline.js.org/en/guide/features/emoji.html
    ]
    // поиск gif
    search: false // true | false
    // загрузчик изображений
    imageUploader: false // true | false
  }
}
```

### SEO

```ts
seo: {
  // @twitter ID
  twitterID: ''
  // верификация сайта
  verification: {
    // консоль поиска Google
    google: ''
    // инструменты вебмастера Bing
    bing: ''
    // вебмастер Яндекса
    yandex: ''
    // поиск Baidu
    baidu: ''
  }
  // Google Analytics
  googleAnalyticsID: ''
  // Umami Analytics
  umamiAnalyticsID: ''
  // верификация folo
  folo: {
    // ID ленты
    feedID: ''
    // ID пользователя
    userID: ''
  }
  // ключ доступа apiflash
  // генерировать скриншоты веб-сайта для изображений open graph
  // получите ключ доступа на: https://apiflash.com/
  apiflashKey: ''
}
```

### Настройки подвала

```ts
footer: {
  // социальные ссылки
  links: [
    {
      name: 'RSS',
      url: '/atom.xml', // или /rss.xml
    },
    {
      name: 'GitHub',
      url: 'https://github.com/DRAG0NM/astro-theme-pianpker',
    },
    {
      name: 'Email',
      url: 'tyloobylmm@outlook.com',
    }
  ]
  // год начала работы веб-сайта
  startYear: 2026
}
```

### Предзагрузка ресурсов

```ts
preload: {
  // URL хостинга изображений
  // оптимизировать удаленные изображения и создавать заполнители низкого качества
  imageHostURL: ''
  // пользовательский скрипт Google Analytics
  // для пользователей, которые проксируют скрипты отслеживания через собственный домен
  customGoogleAnalyticsJS: ''
  // пользовательский скрипт Umami Analytics
  // для пользователей, которые самостоятельно разворачивают Umami или проксируют скрипты отслеживания через собственный домен
  customUmamiAnalyticsJS: ''
}
```

## Дополнительная конфигурация

Кроме файла конфигурации `src/config.ts`, некоторые параметры находятся в других файлах.

### Подсветка синтаксиса

Темы подсветки синтаксиса для блоков кода.

```ts
// astro.config.ts

shikiConfig: {
  // Доступные темы: https://shiki.style/themes
  // Цвет фона по умолчанию следует теме блога, а не теме подсветки синтаксиса
  themes: {
    light: 'github-light' // Светлая тема
    dark: 'github-dark' // Темная тема
  }
}
```

### Отрывок статьи

Количество символов для автоматических отрывков статей.

```ts
// src/utils/description.ts

const excerptLengths: Record<ExcerptScene, {
  cjk: number // Китайский, Японский, Корейский
  other: number // Другие языки
}> = {
  list: { // Список записей на главной странице
    cjk: 120, // Автоматически берет первые 120 символов
    other: 240, // Автоматически берет первые 240 символов
  },
}
```

### Open Graph

Стили [карточек Open Graph для социальных сетей](https://orcascan.com/tools/open-graph-validator?url=https%3A%2F%2Fpianpker.pages.dev%2Fru%2Fposts%2Ftheme-guide%2F).

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // Требуется локальный путь и формат PNG
    size: [250], // Ширина логотипа
  },
  font: {
    title: { // Заголовок
      families: ['Noto Sans SC'], // Шрифт
      weight: 'Bold', // Вес
      color: [34, 33, 36], // Цвет
      lineHeight: 1.5, // Высота строки
    },
  },
  fonts: [ // Пути к шрифтам (локальные или удаленные)
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // Цвет фона
  // Дополнительные настройки: https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### RSS-лента

Стили [страницы RSS-ленты](https://pianpker.pages.dev/ru/atom.xml).

```html
<!-- public/feeds/xxx-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* Цвет шрифта */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* Цвет фона */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* Вторичный цвет шрифта */
</style>
```

## Создание новой статьи

Выполните команду `pnpm new-post <filename>` для создания новой статьи, которую затем можно редактировать в директории `src/content/posts/`.

```bash
pnpm new-post                      ->  src/content/posts/new-post.md
pnpm new-post first-post           ->  src/content/posts/first-post.md
pnpm new-post 2025/03/first-post   ->  src/content/posts/2025/03/first-post.md
pnpm new-post first-post.mdx       ->  src/content/posts/first-post.mdx
```

### Front Matter

Только поля `title` и `published` являются обязательными, все остальные конфигурации можно опустить.

```markdown
---
# Обязательные
title: Руководство по теме
published: 2025-01-26

# Опциональные
description: Первые 240 символов статьи будут автоматически выбраны в качестве отрывка.
updated: 2025-03-26
tags:
  - Тема блога
  - Руководство

# Расширенные, опциональные
draft: true/false
pin: 0-99
toc: true/false
lang: de/en/es/fr/ja/ko/pl/pt/ru/zh/zh-tw
abbrlink: theme-guide
---
```

### Расширенные настройки

#### draft

Отметить статью как черновик. Когда установлено значение true, статью нельзя опубликовать, и она доступна только для локального предварительного просмотра. По умолчанию — false.

#### pin

Закрепить статью вверху. Чем выше число, тем выше приоритет закрепленной статьи. По умолчанию — 0, что означает отсутствие закрепления.

#### toc

Генерировать оглавление. Показывает заголовки от h2 до h4. По умолчанию определяется глобальным параметром `global.toc`, но может быть изменен индивидуально в каждой статье.

#### lang

Указывает язык статьи. Можно указать только один язык. Если не указано, статья будет отображаться по умолчанию во всех языковых путях.

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['fr', 'ru']

# lang: ''
src/content/posts/apple.md  ->  example.com/posts/apple/
                            ->  example.com/fr/posts/apple/
                            ->  example.com/ru/posts/apple/
# lang: en
src/content/posts/apple.md  ->  example.com/posts/apple/
# lang: fr
src/content/posts/apple.md  ->  example.com/fr/posts/apple/
# lang: ru
src/content/posts/apple.md  ->  example.com/ru/posts/apple/
```

#### abbrlink

Настраивает URL статьи. Может содержать только строчные буквы, цифры и дефисы `-`.

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['fr', 'ru']
# lang: 'fr'

# abbrlink: ''
src/content/posts/apple.md           ->  example.com/fr/posts/apple/
src/content/posts/guide/apple.md     ->  example.com/fr/posts/guide/apple/
src/content/posts/2025/03/apple.md   ->  example.com/fr/posts/2025/03/apple/

# abbrlink: 'banana'
src/content/posts/apple.md           ->  example.com/fr/posts/banana/
src/content/posts/guide/apple.md     ->  example.com/fr/posts/banana/
src/content/posts/2025/03/apple.md   ->  example.com/fr/posts/banana/
```

### Форматирование смешанного текста

Запустите `pnpm format-posts` для оптимизации форматирования в Markdown-файлах в директории `src/content/`. Эта команда автоматически исправляет пробелы между символами CJK (китайский, японский, корейский) и латиницей, корректирует знаки пунктуации и улучшает общую читаемость текста.

```bash
pnpm format-posts
🔍 Scanning Markdown files...
📦 Found 56 Markdown files
✅ src/content/posts/guides/Theme Guide-ja.md
✅ src/content/posts/guides/Theme Guide-zh-tw.md
✅ src/content/posts/guides/Theme Guide-zh.md
✨ Formatted 3 files successfully
```
