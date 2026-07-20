---
title: Guide du thème
published: 2025-01-26
updated: 2025-04-13
tags:
  - Thème de blog
  - Guide
pin: 99
lang: fr
abbrlink: theme-guide
---

Pianpker est un projet de blog personnel construit avec [Astro](https://astro.build/). Ce guide documente sa configuration et son processus de publication afin que le projet reste compréhensible et réutilisable.

## Configuration du thème

Personnalisez votre blog en modifiant le fichier de configuration [src/config.ts](https://github.com/DRAG0NM/astro-theme-pianpker/blob/main/src/config.ts).

### Informations du site

```ts
site: {
  // titre du site
  title: 'Pianpker'
  // sous-titre du site
  subtitle: 'Less, between the lines'
  // description du site
  description: 'Pianpker — Less, between the lines.'
  // utiliser le titre, le sous-titre et la description multilingues de src/i18n/ui.ts à la place des valeurs statiques ci-dessus
  i18nTitle: true // true | false
  // nom de l’auteur
  author: 'Drag0nM'
  // URL du site
  url: 'https://pianpker.pages.dev'
  // chemin de base
  // répertoire racine de toutes les pages et ressources
  base: '/' // par ex. '/blog', '/docs'
  // URL du favicon
  // formats recommandés : svg, png ou ico
  favicon: '/icons/favicon.svg' // ou https://example.com/favicon.svg
}
```

### Couleurs du thème

```ts
color: {
  // mode de thème par défaut
  mode: 'light' // light | dark | auto
  // mode clair
  light: {
    // couleur primaire
    // utilisée pour les titres, le survol, etc.
    primary: 'oklch(25% 0.005 298)'
    // couleur secondaire
    // utilisée pour le texte des articles
    secondary: 'oklch(40% 0.005 298)'
    // couleur d’arrière-plan
    background: 'oklch(96% 0.005 298)'
    // couleur de surlignage
    // utilisée pour la barre de navigation, le texte sélectionné, etc.
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)'
  }
  // mode sombre
  dark: {
    // couleur primaire
    primary: 'oklch(92% 0.005 298)'
    // couleur secondaire
    secondary: 'oklch(77% 0.005 298)'
    // couleur d’arrière-plan
    background: 'oklch(22% 0.005 298)'
    // couleur de surlignage
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)'
  }
}
```

### Configuration globale

```ts
global: {
  // langue par défaut
  // langue de la route racine du site '/'
  locale: 'zh' // de | en | es | fr | ja | ko | pl | pt | ru | zh | zh-tw
  // autres langues
  // génère des routes multilingues comme '/en/' et '/fr/'
  // ne répétez pas le code de langue précédent ; un tableau vide [] est possible
  moreLocales: ['en', 'fr', 'ja', 'ru', 'zh-tw'] // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
  // style de police des articles
  fontStyle: 'sans' // sans | serif
  // format de date des articles
  // YYYY-MM-DD | MM-DD-YYYY | DD-MM-YYYY | MMM D YYYY | D MMM YYYY
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025, 13 Apr 2025
  dateFormat: 'YYYY-MM-DD'
  // activer la table des matières
  toc: true // true | false
  // activer le rendu mathématique KaTeX
  katex: true // true | false
  // réduire les animations
  reduceMotion: false // true | false
}
```

### Système de commentaires

```ts
comment: {
  // activer le système de commentaires
  enabled: true // true | false
  // système de commentaires giscus
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
  // système de commentaires twikoo
  twikoo: {
    envId: ''
    // version : la version frontend peut être modifiée dans package.json
  }
  // système de commentaires waline
  waline: {
    // URL du serveur
    serverURL: ''
    // URL des emojis
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // autres emojis : https://waline.js.org/en/guide/features/emoji.html
    ]
    // recherche de GIF
    search: false // true | false
    // téléversement d’images
    imageUploader: false // true | false
  }
}
```

### SEO

```ts
seo: {
  // identifiant Twitter
  twitterID: ''
  // vérification du site
  verification: {
    // Google Search Console
    google: ''
    // outils pour les webmasters Bing
    bing: ''
    // webmaster Yandex
    yandex: ''
    // recherche Baidu
    baidu: ''
  }
  // Google Analytics
  googleAnalyticsID: ''
  // Umami Analytics
  umamiAnalyticsID: ''
  // vérification Folo
  folo: {
    // identifiant du flux
    feedID: ''
    // identifiant utilisateur
    userID: ''
  }
  // clé d’accès apiflash
  // générer des captures du site pour les images Open Graph
  // obtenir une clé d’accès sur : https://apiflash.com/
  apiflashKey: ''
}
```

### Configuration du pied de page

```ts
footer: {
  // liens sociaux
  links: [
    {
      name: 'RSS',
      url: '/atom.xml', // ou /rss.xml
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
  // année de début du site
  startYear: 2026
}
```

### Préchargement des ressources

```ts
preload: {
  // URL d’hébergement des images
  // optimiser les images distantes et générer des espaces réservés basse qualité
  imageHostURL: ''
  // JS personnalisé de Google Analytics
  // pour les utilisateurs qui font passer les scripts de suivi par un domaine personnalisé
  customGoogleAnalyticsJS: ''
  // JS personnalisé d’Umami Analytics
  // pour les utilisateurs qui auto-hébergent Umami ou font passer les scripts par un domaine personnalisé
  customUmamiAnalyticsJS: ''
}
```

## Configuration supplémentaire

En plus du fichier de configuration `src/config.ts`, certaines options se trouvent dans d’autres fichiers.

### Coloration syntaxique

Thèmes de coloration syntaxique pour les blocs de code.

```ts
// astro.config.ts

shikiConfig: {
  // thèmes disponibles : https://shiki.style/themes
  // la couleur d’arrière-plan suit par défaut le thème du blog, et non celui de la coloration syntaxique
  themes: {
    light: 'github-light' // thème clair
    dark: 'github-dark' // thème sombre
  }
}
```

### Extrait d’article

Nombre de caractères utilisés pour les extraits automatiques des articles.

```ts
// src/utils/description.ts

const excerptLengths: Record<ExcerptScene, {
  cjk: number // chinois, japonais, coréen
  other: number // autres langues
}> = {
  list: { // liste des articles sur la page d’accueil
    cjk: 120, // extrait automatiquement les 120 premiers caractères
    other: 240, // extrait automatiquement les 240 premiers caractères
  },
}
```

### Open Graph

Styles des [cartes sociales Open Graph](https://orcascan.com/tools/open-graph-validator?url=https%3A%2F%2Fpianpker.pages.dev%2Ffr%2Fposts%2Ftheme-guide%2F).

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // chemin local requis, format PNG
    size: [250], // largeur du logo
  },
  font: {
    title: { // titre
      families: ['Noto Sans SC'], // police
      weight: 'Bold', // graisse
      color: [34, 33, 36], // couleur
      lineHeight: 1.5, // hauteur de ligne
    },
  },
  fonts: [ // chemins des polices, locaux ou distants
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // couleur d’arrière-plan
  // plus de configurations : https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### Canal RSS

Styles de la [page du flux RSS](https://pianpker.pages.dev/fr/atom.xml).

```html
<!-- public/feeds/xxx-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* couleur de police */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* couleur d’arrière-plan */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* couleur de police secondaire */
</style>
```

## Création d’un nouvel article

Exécutez `pnpm new-post <filename>` pour créer un nouvel article, qui pourra ensuite être modifié dans le répertoire `src/content/posts/`.

```bash
pnpm new-post                      ->  src/content/posts/new-post.md
pnpm new-post first-post           ->  src/content/posts/first-post.md
pnpm new-post 2025/03/first-post   ->  src/content/posts/2025/03/first-post.md
pnpm new-post first-post.mdx       ->  src/content/posts/first-post.mdx
```

### Front Matter

Seuls les champs `title` et `published` sont obligatoires ; toutes les autres options peuvent être omises.

```markdown
---
# Obligatoire
title: Guide du thème
published: 2025-01-26

# Facultatif
description: Les 240 premiers caractères de l’article seront automatiquement sélectionnés comme extrait.
updated: 2025-03-26
tags:
  - Thème de blog
  - Guide

# Avancé, facultatif
draft: true/false
pin: 0-99
toc: true/false
lang: de/en/es/fr/ja/ko/pl/pt/ru/zh/zh-tw
abbrlink: theme-guide
---
```

### Configuration avancée

#### draft

Marque l’article comme brouillon. Lorsque la valeur est true, l’article n’est pas publié et n’est disponible qu’en prévisualisation dans le développement local. La valeur par défaut est false.

#### pin

Épingle l’article en haut de la liste. Plus le nombre est élevé, plus la priorité de l’article épinglé est grande. La valeur par défaut est 0, ce qui signifie qu’il n’est pas épinglé.

#### toc

Génère une table des matières qui affiche les titres h2 à h4. La valeur est déterminée par la configuration globale `global.toc` par défaut, mais peut être modifiée individuellement pour chaque article.

#### lang

Indique la langue de l’article. Une seule langue peut être spécifiée. Si aucune langue n’est indiquée, l’article sera affiché par défaut dans toutes les routes linguistiques.

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['fr', 'ru']

# lang: ''
src/content/posts/apple.md   ->  example.com/posts/apple/
                             ->  example.com/fr/posts/apple/
                             ->  example.com/ru/posts/apple/
# lang: en
src/content/posts/apple.md   ->  example.com/posts/apple/
# lang: fr
src/content/posts/apple.md   ->  example.com/fr/posts/apple/
# lang: ru
src/content/posts/apple.md   ->  example.com/ru/posts/apple/
```

#### abbrlink

Personnalise l’URL de l’article. Elle ne peut contenir que des lettres minuscules, des chiffres et des tirets `-`.

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

### Formatage de texte mixte

Exécutez `pnpm format-posts` pour optimiser le format des fichiers Markdown du répertoire `src/content/`. Cette commande corrige automatiquement les espaces entre les caractères CJK (chinois, japonais, coréen) et latins, ajuste la ponctuation et améliore la lisibilité générale du texte.

```bash
🔍 Scanning Markdown files...
📦 Found 56 Markdown files
✅ src/content/posts/guides/Theme Guide-ja.md
✅ src/content/posts/guides/Theme Guide-zh-tw.md
✅ src/content/posts/guides/Theme Guide-zh.md
✨ Formatted 3 files successfully
```
