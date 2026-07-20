---
title: Markdown Extended Features
published: 2025-04-25
tags:
  - Guide
toc: false
lang: en
abbrlink: markdown-extended-features
---

Here are some extended Markdown features supported by Pianpker, including syntax examples and their stylistic effects.

## Figure Captions

To create automatic figure captions, use the standard Markdown image syntax `![alt](src)`. To hide the caption, add an underscore `_` before the `alt` text or leave the `alt` text empty.

### Syntax

```
![Image description](https://image.radishzz.cc/image/gallery/06.webp)

![_Image description](https://image.radishzz.cc/image/gallery/06.webp)
```

### Output

![Image description](https://image.radishzz.cc/image/gallery/06.webp)

![_Image description](https://image.radishzz.cc/image/gallery/06.webp)

## Admonition Blocks

To create admonition blocks, use the GitHub syntax `> [!TYPE]` or the container directive `:::type`. The following types are supported: `note`, `tip`, `important`, `warning`, and `caution`.

### Syntax

```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

:::warning
Urgent info that needs immediate user attention to avoid problems.
:::

:::caution
Advises about risks or negative outcomes of certain actions.
:::

:::note[YOUR CUSTOM TITLE]
This is a note with a custom title.
:::
```

### Output

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

:::warning
Urgent info that needs immediate user attention to avoid problems.
:::

:::caution
Advises about risks or negative outcomes of certain actions.
:::

:::note[YOUR CUSTOM TITLE]
This is a note with a custom title.
:::

## Collapsible Sections

To create collapsible sections, use the container directive syntax `:::fold[title]`. Click the title to expand or collapse.

### Syntax

```
:::fold[Usage Tips]
Content that may not interest all readers can be placed in a collapsible section.
:::
```

### Output

:::fold[Usage Tips]
Content that may not interest all readers can be placed in a collapsible section.
:::

## Mermaid Diagrams

To create Mermaid diagrams, wrap Mermaid syntax in code blocks and specify the language type as `mermaid`.

### Syntax

``````
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
``````

### Output

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Galleries

To create image galleries, use the container directive `:::gallery`. Scroll horizontally to view more images.

### Syntax

```
:::gallery
![Alpaca](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![Turning head](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![Eye contact](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![Baby alpaca](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![Aww, so cute!](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::
```

### Output

:::gallery
![Alpaca](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![Turning head](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![Eye contact](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![Baby alpaca](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![Aww, so cute!](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::

## GitHub Repositories

To embed GitHub repositories, use the leaf directive `::github{repo="owner/repo"}`.

### Syntax

```
::github{repo="DRAG0NM/astro-theme-pianpker"}
```

### Output

::github{repo="DRAG0NM/astro-theme-pianpker"}

## Videos

To embed videos, use the leaf directive `::youtube{id="video-id"}`.

### Syntax

```
::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}
```

### Output

::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}

## Spotify

To embed Spotify content, use the leaf directive `::spotify{url="spotify-url"}`.

### Syntax

```
::spotify{url="https://open.spotify.com/track/0HYAsQwJIO6FLqpyTeD3l6"}

::spotify{url="https://open.spotify.com/album/03QiFOKDh6xMiSTkOnsmMG"}
```

### Output

::spotify{url="https://open.spotify.com/track/0HYAsQwJIO6FLqpyTeD3l6"}

::spotify{url="https://open.spotify.com/album/03QiFOKDh6xMiSTkOnsmMG"}

## Tweets

To embed tweets, use the leaf directive `::tweet{url="tweet-url"}`.

### Syntax

```
::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
```

### Output

::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}

## CodePen

To embed CodePen demos, use the leaf directive `::codepen{url="codepen-url"}`.

### Syntax

```
::codepen{url="https://codepen.io/jh3y/pen/NWdNMBJ"}
```

### Output

::codepen{url="https://codepen.io/jh3y/pen/NWdNMBJ"}
