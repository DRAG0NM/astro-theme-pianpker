---
title: Guide de style Markdown
published: 2025-03-08
updated: 2025-03-23
tags:
  - Guide
pin: 98
toc: false
lang: fr
abbrlink: markdown-style-guide
---

Voici quelques exemples de syntaxe Markdown de base et leur rendu visuel dans le thème Pianpker.

## Titres

Pour créer des titres, ajoutez des signes dièse `#` devant un mot ou une phrase. Le nombre de signes dièse doit correspondre au niveau du titre.

### Syntaxe

```
# Titre 1
## Titre 2
### Titre 3
#### Titre 4
##### Titre 5
###### Titre 6
```

### Résultat

# Titre 1
## Titre 2
### Titre 3
#### Titre 4
##### Titre 5
###### Titre 6

## Paragraphes

Pour créer des paragraphes, utilisez une ligne vide afin de séparer une ou plusieurs lignes de texte.

### Syntaxe

```
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
```

### Résultat

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

Pour ajouter une image, placez un point d’exclamation `!`, suivi d’un texte alternatif entre crochets `[]`, puis du chemin ou de l’URL de l’image entre parenthèses `()`.

### Syntaxe

```
![Description de l’image](../_images/image-01.jpeg)

![Description de l’image](https://image.example.com/image-01.webp)
```

### Résultat

![Description de l’image](https://image.radishzz.cc/picsmaller/03.webp)

## Citations en bloc

Pour créer une citation en bloc, ajoutez le symbole `>` et un espace devant le texte. Une citation peut contenir plusieurs paragraphes. Pour citer une source, utilisez les balises `<cite>` ou `<footer>`, et insérez des notes de bas de page avec la syntaxe `[^1]` ou `[^note]`.

### Citation en bloc avec plusieurs paragraphes

#### Syntaxe

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Remarque** : vous pouvez utiliser la _syntaxe Markdown_ dans une citation en bloc.
```

#### Résultat

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Remarque** : vous pouvez utiliser la _syntaxe Markdown_ dans une citation en bloc.

### Citation avec source

#### Syntaxe

```markdown
> Ne communiquez pas en partageant de la mémoire ; partagez la mémoire en communiquant.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: La citation ci-dessus est tirée de la [conférence](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike au Gopherfest, le 18 novembre 2015.
```

#### Résultat

> Ne communiquez pas en partageant de la mémoire ; partagez la mémoire en communiquant.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: La citation ci-dessus est tirée de la [conférence](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike au Gopherfest, le 18 novembre 2015.

## Tableaux

Pour ajouter un tableau, utilisez au moins trois tirets `---` pour créer l’en-tête de chaque colonne et des barres verticales `|` pour séparer les colonnes.

### Syntaxe

```markdown
| Italique   | Gras        | Code   |
| ---------- | ----------- | ------ |
| _italique_ | **gras**    | `code` |
| _italique_ | **gras**    | `code` |
```

### Résultat

| Italique   | Gras        | Code   |
| ---------- | ----------- | ------ |
| _italique_ | **gras**    | `code` |
| _italique_ | **gras**    | `code` |

## Blocs de code

Pour créer un bloc de code, entourez le code de trois accents graves. Vous pouvez indiquer le langage après les accents graves ouvrants afin de choisir la coloration et le style du code, par exemple : html, javascript, css, markdown, etc.

### Syntaxe

``````
```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Exemple de document HTML5</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
``````

### Résultat

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Exemple de document HTML5</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Types de listes

### Liste ordonnée

#### Syntaxe

```markdown
1. Premier élément
2. Deuxième élément
3. Troisième élément
```

#### Résultat

1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liste non ordonnée

#### Syntaxe

```markdown
- Élément de liste
- Élément graphique
- Et un autre élément
```

#### Résultat

- Élément de liste
- Élément graphique
- Et un autre élément

### Liste imbriquée

#### Syntaxe

```markdown
- Fruits
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage
```

#### Résultat

- Fruits
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage

## Autres éléments

Il existe également le texte en exposant `<sup>`, le texte en indice `<sub>`, l’abréviation `<abbr>`, le texte barré `<del>`, le soulignement ondulé `<u>`, la saisie clavier `<kbd>`, le surlignage `<mark>` et la ligne horizontale `<hr>`.

### Syntaxe

```html
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d’image matricielle.

Les bons rédacteurs relisent toujours leur <u title="orthographe">orthographe</u>.

Appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suppr</kbd> pour terminer la session.

Il n’existe pas de code <del>bon</del> ou mauvais, mais son exécution le rend ainsi.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent des insectes, des vers et d’autres petites créatures.

Utilisez trois tirets `---` ou la balise `<hr>` pour créer une ligne horizontale, comme ci-dessous.

---
```

### Résultat

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d’image matricielle.

Les bons rédacteurs relisent toujours leur <u title="orthographe">orthographe</u>.

Appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suppr</kbd> pour terminer la session.

Il n’existe pas de code <del>bon</del> ou mauvais, mais son exécution le rend ainsi.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent des insectes, des vers et d’autres petites créatures.

Utilisez trois tirets `---` ou la balise `<hr>` pour créer une ligne horizontale, comme ci-dessous.

---
