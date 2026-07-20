# Pianpker · 落纸之间

> 字落有间，读来无距。
> Less, between the lines.

Pianpker 是 [Drag0nM](https://github.com/DRAG0NM) 的个人博客项目。它以文字阅读为中心，用克制的留白、和纸暖色、墨色层级与少量朱红建立安静而清晰的数字排版体验。

Pianpker is a personal blog by [Drag0nM](https://github.com/DRAG0NM), designed around quiet reading, deliberate whitespace, warm paper tones, layered ink colors, and restrained vermilion accents.

## Design

Pianpker 不追求表面的“日式”装饰，而把侘寂、幽玄、物哀、「间」、涩与简素作为排版方法：

- 内容可以复杂，表现形式应尽可能简单；
- 留白是积极的停顿，而不是等待填满的空位；
- 朱红只承担交互反馈与印章式强调；
- 不使用卡片堆叠、阴影、毛玻璃或饱和渐变制造设计感；
- 每一个视觉元素、动画与数值都应有存在的理由。

## Features

- Astro 6 + UnoCSS
- 简体中文、繁体中文、英语、法语、日语与俄语内容
- 明亮与暗夜主题，支持 Astro ClientRouter
- Markdown、MDX、KaTeX、Mermaid、目录与代码复制
- 图片图注、画廊、缩放与外部媒体嵌入
- RSS、Atom、Sitemap 与 Open Graph 分享图
- 响应式布局与主题原色打印
- 评论默认关闭

## Local development

Requires Node.js 22.12.0 or later and pnpm 10.33.0.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Production verification:

```bash
pnpm lint
pnpm astro check
pnpm build
pnpm preview
```

## Content

- `src/content/posts/` — posts, examples, and localized guides
- `src/content/about/` — localized About pages
- `src/config.ts` — site identity, languages, theme, SEO, and footer links
- `public/` — fonts, icons, and static assets

## Deployment

The project is intended for static deployment on Cloudflare Pages.

- Build command: `pnpm build`
- Output directory: `dist`
- Node.js: `22.12.0` or later
- Planned site: [pianpker.pages.dev](https://pianpker.pages.dev)

## Acknowledgements

Pianpker is an independently customized derivative of [Retypeset](https://github.com/radishzzz/astro-theme-retypeset) by [radishzz](https://github.com/radishzzz). Retypeset provided the original Astro architecture, content model, routing, typography foundation, and component system.

The original copyright and permission notice are retained in [`LICENSE`](LICENSE). Changes made for Pianpker include its visual system, typography refinements, language set, font loading, theme and transition compatibility, printing, image handling, interaction details, branding, and publishing configuration.

Additional inspiration and upstream components are credited in the source project and their respective files.

## License

This repository retains the original [MIT License](LICENSE):

```text
Copyright (c) 2025 radishzz
```

Pianpker-specific modifications are maintained by Drag0nM. The original MIT copyright and permission notice must remain with copies or substantial portions of the software.
