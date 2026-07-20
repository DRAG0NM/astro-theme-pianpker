---
title: Markdown Style Guide
published: 2025-03-08
updated: 2025-03-23
tags:
  - Guide
pin: 98
toc: false
lang: en
abbrlink: markdown-style-guide
---

Here are some basic Markdown syntax examples and their stylistic effects in Pianpker.

## Headings

To create headings, add number signs `#` in front of a word or phrase. The number of number signs you use should correspond to the heading level.

### Syntax

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Output

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

### Syntax

```
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
```

### Output

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

To add images, add an exclamation mark `!`, followed by alt text in brackets `[]`, and the path or URL to the image asset in parentheses `()`.

### Syntax

```
![Image Description](../../_images/image-01.jpeg)

![Image Description](https://image.example.com/image-01.webp)
```

### Output

![Image Description](https://image.radishzz.cc/picsmaller/03.webp)

## Blockquotes

To create blockquotes, add a `>` symbol and a space before text. Blockquotes can contain multiple paragraphs. To cite sources, use `<cite>` or `<footer>` tags, while footnotes may be inserted using the `[^1]` or `[^note]` syntax.

### Blockquote with multiple paragraphs

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with citing sources

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

To add tables, use three or more hyphens `---` to create each column's header, and use pipes `|` to separate each column.

### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |
```

### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |

## Code Blocks

To create code blocks, wrap your code with three backticks ```` ``` ````. You can indicate the programming language being used after the opening backticks to indicate how to color and style your code, e.g., html, javascript, css, markdown, etc.

### Syntax

````
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Chart item
- And another item
```

#### Output

- List item
- Chart item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements

Including `<sup>` superscript, `<sub>` subscript, `<abbr>` abbreviation, `<del>` strikethrough, `<u>` wavy underline, `<kbd>` keyboard input, `<mark>` highlight, and `<hr>` horizontal rule.

### Syntax

```markdown
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

Good writers always check for <u title="spelling">speling</u> mistakes.

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

There is <del>nothing</del> no code either good or bad, but running it makes it so.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

Use three hyphens `---` or the `<hr>` tag to create a horizontal rule as shown below.

---
```

### Output

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

Good writers always check for <u title="spelling">speling</u> mistakes.

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

There is <del>nothing</del> no code either good or bad, but running it makes it so.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

Use three hyphens `---` or the `<hr>` tag to create a horizontal rule as shown below.

---
