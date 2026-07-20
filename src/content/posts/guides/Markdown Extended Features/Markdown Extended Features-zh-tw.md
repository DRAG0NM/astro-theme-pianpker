---
title: Markdown 擴展功能
published: 2025-04-25
tags:
  - 指南
toc: false
lang: zh-tw
abbrlink: markdown-extended-features
---

本文介紹 Pianpker 主題支援的 Markdown 擴展功能，包括語法範例與效果呈現。

## 圖注

使用標準的 Markdown 圖像語法 `![alt](src)`，即可自動生成圖注。在 `alt` 前添加下劃線 `_` 或留空 `alt`，即可隱藏圖注。

### 語法

```
![圖片描述](https://image.radishzz.cc/image/gallery/06.webp)

![_圖片描述](https://image.radishzz.cc/image/gallery/06.webp)
```

### 效果

![圖片描述](https://image.radishzz.cc/image/gallery/06.webp)

![_圖片描述](https://image.radishzz.cc/image/gallery/06.webp)

## 提示塊

使用 GitHub 語法 `> [!TYPE]` 或三冒號語法 `:::type`，即可創建提示塊。支援 `note`、`tip`、`important`、`warning`、`caution` 五種類型。

### 語法

```
> [!NOTE]
> 即使快速瀏覽，也值得用戶留意的信息。

> [!TIP]
> 可選信息，可幫助用戶更輕鬆地完成操作。

> [!IMPORTANT]
> 用戶成功所需的關鍵信息。

:::warning
由於存在潛在風險，需要用戶立即關注的關鍵內容。
:::

:::caution
某些操作可能帶來的負面後果。
:::

:::note[自定義標題]
這是一個自定義標題的提示塊。
:::
```

### 效果

> [!NOTE]
> 即使快速瀏覽，也值得用戶留意的信息。

> [!TIP]
> 可選信息，可幫助用戶更輕鬆地完成操作。

> [!IMPORTANT]
> 用戶成功所需的關鍵信息。

:::warning
由於存在潛在風險，需要用戶立即關注的關鍵內容。
:::

:::caution
某些操作可能帶來的負面後果。
:::

:::note[自定義標題]
這是一個自定義標題的提示塊。
:::

## 折疊塊

使用三冒號語法 `:::fold[title]`，即可創建折疊塊。點擊標題可以展開或收起。

### 語法

```
:::fold[使用提示]
如果需要添加並非所有讀者都會感興趣的內容，可以將其放在折疊塊中。
:::
```

### 效果

:::fold[使用提示]
如果需要添加並非所有讀者都會感興趣的內容，可以將其放在折疊部分。
:::

## Mermaid 圖表

使用代碼塊包裹 Mermaid 語法，並標註語言類型 `mermaid`，即可創建 Mermaid 圖表。

### 語法

``````
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
``````

### 效果

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## 畫廊

使用三冒號語法 `:::gallery`，即可建立圖片畫廊。水平捲動以瀏覽更多圖片。

### 語法

```
:::gallery
![羊駝](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![轉頭](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![對視](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![小羊駝](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![可愛捏](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::
```

### 效果

:::gallery
![羊駝](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![轉頭](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![對視](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![小羊駝](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![可愛捏](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::

## GitHub 倉庫

使用雙冒號語法 `::github{repo="owner/repo"}`，即可嵌入 GitHub 倉庫。

### 語法

```
::github{repo="DRAG0NM/astro-theme-pianpker"}
```

### 效果

::github{repo="DRAG0NM/astro-theme-pianpker"}

## 視頻

使用雙冒號語法 `::youtube{id="video-id"}`，即可嵌入視頻。

### 語法

```
::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}
```

### 效果

::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}

## Spotify

使用雙冒號語法 `::spotify{url="spotify-url"}`，即可嵌入 Spotify 內容。

### 語法

```
::spotify{url="https://open.spotify.com/track/0HYAsQwJIO6FLqpyTeD3l6"}

::spotify{url="https://open.spotify.com/album/03QiFOKDh6xMiSTkOnsmMG"}
```

### 效果

::spotify{url="https://open.spotify.com/track/0HYAsQwJIO6FLqpyTeD3l6"}

::spotify{url="https://open.spotify.com/album/03QiFOKDh6xMiSTkOnsmMG"}

## X 推文

使用雙冒號語法 `::tweet{url="tweet-url"}`，即可嵌入 X 推文。

### 語法

```
::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
```

### 效果

::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}

## CodePen

使用雙冒號語法 `::codepen{url="codepen-url"}`，即可嵌入 CodePen 範例。

### 語法

```
::codepen{url="https://codepen.io/jh3y/pen/NWdNMBJ"}
```

### 效果

::codepen{url="https://codepen.io/jh3y/pen/NWdNMBJ"}
