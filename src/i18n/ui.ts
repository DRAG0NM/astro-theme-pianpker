import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  tags: string
  about: string
  toc: string
}

export const ui: Record<Language, Translation> = {
  'de': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Beiträge',
    tags: 'Schlagwörter',
    about: 'Über',
    toc: 'Inhaltsverzeichnis',
  },
  'en': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Posts',
    tags: 'Tags',
    about: 'About',
    toc: 'Table of Contents',
  },
  'es': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Artículos',
    tags: 'Etiquetas',
    about: 'Sobre',
    toc: 'Índice',
  },
  'fr': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Articles',
    tags: 'Étiquettes',
    about: 'À propos',
    toc: 'Table des matières',
  },
  'ja': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: '記事',
    tags: 'タグ',
    about: '概要',
    toc: '目次',
  },
  'ko': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: '게시물',
    tags: '태그',
    about: '소개',
    toc: '목차',
  },
  'pl': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Artykuły',
    tags: 'Tagi',
    about: 'O stronie',
    toc: 'Spis treści',
  },
  'pt': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Artigos',
    tags: 'Tags',
    about: 'Sobre',
    toc: 'Sumário',
  },
  'ru': {
    title: 'Pianpker',
    subtitle: 'Less, between the lines',
    description: 'Pianpker — Less, between the lines.',
    posts: 'Посты',
    tags: 'Теги',
    about: 'О себе',
    toc: 'Оглавление',
  },
  'zh': {
    title: '落纸之间',
    subtitle: '字落有间，读来无距',
    description: '落纸之间——字落有间，读来无距。',
    posts: '文章',
    tags: '标签',
    about: '关于',
    toc: '目录',
  },
  'zh-tw': {
    title: '落紙之間',
    subtitle: '字落有間，讀來無距',
    description: '落紙之間——字落有間，讀來無距。',
    posts: '文章',
    tags: '標籤',
    about: '關於',
    toc: '目錄',
  },
}
