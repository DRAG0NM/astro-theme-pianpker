---
title: Démonstration mathématique de KaTeX
published: 2025-04-01
lang: fr
abbrlink: katex-mathematical-demo
---

KaTeX est une bibliothèque JavaScript multiplateforme qui permet d’afficher des notations mathématiques dans les navigateurs web. Elle se distingue par sa rapidité et sa facilité d’utilisation. Développée à l’origine par Khan Academy, elle est devenue l’un des cinq projets les plus populaires de GitHub.

## Théorie des groupes

Le lemme de Burnside, également appelé théorème de dénombrement de Burnside, lemme de Cauchy-Frobenius ou théorème du nombre d’orbites.

Soit $\wedge$ une action de groupe d’un groupe fini $G$ sur un ensemble fini $X$. Le nombre $t$ d’orbites de cette action est alors donné par la formule suivante.

$$
t=\frac{1}{|G|}\sum_{g\in G}|\text{Fix}(g)|
$$

Pour tout entier $n\ge2$, le groupe quotient $\mathbb{Z}/n\mathbb{Z}$ est un groupe cyclique engendré par $1+n\mathbb{Z}$, et donc $\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n$.

Le groupe quotient $\mathbb{R}/\mathbb{Z}$ est isomorphe à $([0,1),+_1)$, le groupe des nombres réels de l’intervalle $[0,1)$ muni de l’addition modulo 1.

Théorème d’isomorphisme. Soit $\phi\colon(G,\circ)\to(H,*)$ un homomorphisme. Alors la fonction

$$
\begin{aligned}
f\colon G/\text{Ker}(\phi)&\to\text{Im}(\phi)\\
x\text{Ker}(\phi)&\mapsto\phi(x)
\end{aligned}
$$

est un isomorphisme, d’où

$$
G/\text{Ker}(\phi)\cong \text{Im}(\phi)
$$

## Théorème de Taylor

Soit la fonction $f$ différentiable $(n+1)$ fois sur un intervalle ouvert contenant les points $a$ et $x$. Alors

$$
 f(x)=f(a)+f'(a)(x-a)+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)
$$

où

$$
 R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},
$$

pour un certain $c$ situé entre $a$ et $x$.

$\KaTeX$ ne dispose pas d’une option d’alignement à droite. Une colonne alignée supplémentaire est donc utilisée pour les numéros d’équation. Ceux-ci sont repoussés vers la droite grâce à l’espacement mkern, par défaut \mkern100mu. Les environnements align et align* peuvent être utilisés, tout comme \tag et \notag.

## Environnement Align

$$
\begin{align}
\frac{\pi}{4n^2} &= \frac{4^n(n!)^2}{2n^2(2n)!}n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{2n^2(2n)!}2n^2J_n \tag{1} \\
&= \frac{4^n}{4(2n)!}\left(\frac{n!}{n}\right)^22n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{$\ddagger$} \\
&= \frac{4^{n-1}((n-1)!)^2}{(2n-2)!}J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{2}
\end{align}
$$

## Environnement Align*

$$
\begin{align}
\frac{4^N(N!)^2}{(2N)!}J_N &\leq \frac{4^N(N!)^2}{(2N)!}\frac{\pi^2}{4}\frac{1}{2n+2}I_{2N} \tag{*} \\
&= \frac{\pi^2}{8(N+1)}\frac{4^N(N!)^2}{(2N)!}I_{2N} \\
&= \frac{\pi^2}{8(N+1)}\frac{\pi}{2} \tag{**} \\
&= \frac{\pi^3}{16(N+1)} \\
\frac{x}{\sin x} &\leq \frac{\pi}{2} \tag{3} \\
\text{donc} \qquad\qquad x &\leq \frac{\pi}{2}\sin x \tag{4}
\end{align}
$$

## Somme d’une série

$$
\begin{align*}
\sum_{i=1}^{k+1}i &= \left(\sum_{i=1}^{k}i\right) +(k+1) \tag{1} \\
&= \frac{k(k+1)}{2}+k+1 \tag{2} \\
&= \frac{k(k+1)+2(k+1)}{2} \tag{3} \\
&= \frac{(k+1)(k+2)}{2} \tag{4} \\
&= \frac{(k+1)((k+1)+1)}{2} \tag{5}
\end{align*}
$$

## Notation des produits

$$
1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots
= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
\text{ pour }\lvert q\rvert < 1.
$$

## Produit vectoriel

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[1ex]
\frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\[2.5ex]
\frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0
\end{vmatrix}
$$

## Équations de Maxwell

$$
\begin{align*}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{align*}
$$

## Lettres grecques

$$
\begin{align*}
&\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega\\
&\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi\ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi
\end{align*}
$$

## Flèches

$$
\begin{align*}
&\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow\\
&\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow\\
&\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow\\
&\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup\\
&\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
\end{align*}
$$

## Symboles

$$
\begin{align*}
&\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup\\
&\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
\end{align*}
$$

*Exemples tirés de la [démonstration en ligne de KaTeX](https://sixthform.info/katex/examples/demo.html)*
