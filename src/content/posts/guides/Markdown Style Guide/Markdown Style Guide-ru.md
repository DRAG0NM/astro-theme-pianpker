---
title: Руководство по стилю Markdown
published: 2025-03-08
updated: 2025-03-23
tags:
  - Руководство
pin: 98
toc: false
lang: ru
abbrlink: markdown-style-guide
---

Вот несколько примеров базового синтаксиса Markdown и их стилистических эффектов в теме Pianpker.

## Заголовки

Чтобы создать заголовки, добавьте знаки решётки `#` перед словом или фразой. Количество знаков решётки должно соответствовать уровню заголовка.

### Синтаксис

```
# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6
```

### Результат

# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6

## Абзацы

Для создания абзацев используйте пустую строку для разделения одной или нескольких строк текста.

### Синтаксис

```
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
```

### Результат

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Изображения

Чтобы добавить изображения, добавьте восклицательный знак `!`, за которым следует альтернативный текст в квадратных скобках `[]` и путь или URL к изображению в круглых скобках `()`.

### Синтаксис

```
![Описание изображения](../../_images/image-01.jpeg)

![Описание изображения](https://image.example.com/image-01.webp)
```

### Результат

![Описание изображения](https://image.radishzz.cc/picsmaller/03.webp)

## Цитаты

Чтобы создать цитаты, добавьте символ `>` и пробел перед текстом. Цитаты могут содержать несколько абзацев. Для указания источников используйте теги `<cite>` или `<footer>`, а сноски можно вставить с помощью синтаксиса `[^1]` или `[^note]`.

### Цитата с несколькими абзацами

#### Синтаксис

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Обратите внимание**, что внутри цитаты можно использовать _синтаксис Markdown_.
```

#### Результат

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Обратите внимание**, что внутри цитаты можно использовать _синтаксис Markdown_.

### Цитата с указанием источников

#### Синтаксис

```markdown
> Не общайтесь путём разделения памяти, разделяйте память путём общения.
>
> — <cite>Роб Пайк[^1]</cite>

[^1]: Приведённая выше цитата взята из [выступления](https://www.youtube.com/watch?v=PAAkCSZUG1c) Роба Пайка на Gopherfest, 18 ноября 2015 года.
```

#### Результат

> Не общайтесь путём разделения памяти, разделяйте память путём общения.
>
> — <cite>Роб Пайк[^1]</cite>

[^1]: Приведённая выше цитата взята из [выступления](https://www.youtube.com/watch?v=PAAkCSZUG1c) Роба Пайка на Gopherfest, 18 ноября 2015 года.

## Таблицы

Чтобы добавить таблицы, используйте три или более дефиса `---` для создания заголовка каждого столбца и вертикальные линии `|` для разделения столбцов.

### Синтаксис

```markdown
| Курсив     | Жирный      | Код    |
| ---------- | ----------- | ------ |
| _курсив_   | **жирный**  | `код`  |
| _курсив_   | **жирный**  | `код`  |
```

### Результат

| Курсив     | Жирный      | Код    |
| ---------- | ----------- | ------ |
| _курсив_   | **жирный**  | `код`  |
| _курсив_   | **жирный**  | `код`  |

## Блоки кода

Чтобы создать блоки кода, оберните ваш код тремя обратными апострофами ```` ``` ````. Вы можете указать язык программирования после открывающих обратных апострофов, чтобы указать, как раскрашивать и стилизовать ваш код, например: html, javascript, css, markdown и т.д.

### Синтаксис

````
```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Пример документа HTML5</title>
  </head>
  <body>
    <p>Тест</p>
  </body>
</html>
```
````

### Результат

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Пример документа HTML5</title>
  </head>
  <body>
    <p>Тест</p>
  </body>
</html>
```

## Типы списков

### Упорядоченный список

#### Синтаксис

```markdown
1. Первый пункт
2. Второй пункт
3. Третий пункт
```

#### Результат

1. Первый пункт
2. Второй пункт
3. Третий пункт

### Неупорядоченный список

#### Синтаксис

```markdown
- Пункт списка
- Графический элемент
- И ещё один пункт
```

#### Результат

- Пункт списка
- Графический элемент
- И ещё один пункт

### Вложенный список

#### Синтаксис

```markdown
- Фрукты
  - Яблоко
  - Апельсин
  - Банан
- Молочные продукты
  - Молоко
  - Сыр
```

#### Результат

- Фрукты
  - Яблоко
  - Апельсин
  - Банан
- Молочные продукты
  - Молоко
  - Сыр

## Другие элементы

Включая верхний индекс `<sup>`, нижний индекс `<sub>`, аббревиатуру `<abbr>`, зачёркнутый текст `<del>`, волнистое подчёркивание `<u>`, ввод с клавиатуры `<kbd>`, выделение `<mark>` и горизонтальную линию `<hr>`.

### Синтаксис

```html
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> — это формат растровых изображений.

Хорошие писатели всегда проверяют <u title="правописание">правописание</u>.

Нажмите <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>, чтобы завершить сеанс.

Нет <del>ничего</del> ни хорошего, ни плохого кода, но запуск делает его таковым.

Большинство <mark>саламандр</mark> ведут ночной образ жизни и охотятся на насекомых, червей и других мелких существ.

Используйте три дефиса `---` или тег `<hr>` для создания горизонтальной линии, как показано ниже.

---
```

### Результат

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> — это формат растровых изображений.

Хорошие писатели всегда проверяют <u title="правописание">правописание</u>.

Нажмите <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>, чтобы завершить сеанс.

Нет <del>ничего</del> ни хорошего, ни плохого кода, но запуск делает его таковым.

Большинство <mark>саламандр</mark> ведут ночной образ жизни и охотятся на насекомых, червей и других мелких существ.

Используйте три дефиса `---` или тег `<hr>` для создания горизонтальной линии, как показано ниже.

---
