---
title: KaTeX 數學演示
published: 2025-04-01
lang: zh-tw
abbrlink: katex-mathematical-demo
---

KaTeX 是一套跨瀏覽器的 JavaScript 函式庫，專為網頁瀏覽器設計以顯示數學符號。開發時特別強調執行效率與操作簡便性，最初由可汗學院開發，現已躋身 GitHub 最受關注的前五大專案之列。

## 群論

Burnside 引理，有時也稱為 Burnside 計數定理、Cauchy-Frobenius 引理或軌道計數定理。

設 $\wedge$ 是有限群 $G$ 在有限集合 $X$ 上的群作用。那麼作用的軌道數 $t$ 由下面的公式給出。

$$
t=\frac{1}{|G|}\sum_{g\in G}|\text{Fix}(g)|
$$

對於每個整數 $n\ge2$，商群 $\mathbb{Z}/n\mathbb{Z}$ 是由 $1+n\mathbb{Z}$ 生成的循環群，因此 $\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n$。

商群 $\mathbb{R}/\mathbb{Z}$ 同構於 $([0,1),+_1)$，即區間 $[0,1)$ 上以 1 為模的實數加法群。

同構定理。設 $\phi\colon(G,\circ)\to(H,*)$ 是一個同態。那麼函數

$$
\begin{aligned}
f\colon G/\text{Ker}(\phi)&\to\text{Im}(\phi)\\
x\text{Ker}(\phi)&\mapsto\phi(x)
\end{aligned}
$$

是一個同構，因此

$$
G/\text{Ker}(\phi)\cong \text{Im}(\phi)
$$

## 泰勒定理

設函數 $f$ 在包含點 $a$ 和 $x$ 的開區間上 $(n+1)$ 次可微。那麼

$$
 f(x)=f(a)+f'(a)(x-a)+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)
$$

其中

$$
 R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},
$$

對於 $a$ 和 $x$ 之間的某個 $c$。

$\KaTeX$ 沒有右對齊選項，因此使用額外的對齊列來顯示方程編號。它們通過 mkern 間距（預設為 \mkern100mu）被推到右側。align 和 align* 環境都可以使用，\tag 和 \notag 也可以使用。

## Align 環境

$$
\begin{align}
\frac{\pi}{4n^2} &= \frac{4^n(n!)^2}{2n^2(2n)!}n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{2n^2(2n)!}2n^2J_n \tag{1} \\
&= \frac{4^n}{4(2n)!}\left(\frac{n!}{n}\right)^22n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{$\ddagger$} \\
&= \frac{4^{n-1}((n-1)!)^2}{(2n-2)!}J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{2}
\end{align}
$$

## Align* 環境

$$
\begin{align}
\frac{4^N(N!)^2}{(2N)!}J_N &\leq \frac{4^N(N!)^2}{(2N)!}\frac{\pi^2}{4}\frac{1}{2n+2}I_{2N} \tag{*} \\
&= \frac{\pi^2}{8(N+1)}\frac{4^N(N!)^2}{(2N)!}I_{2N} \\
&= \frac{\pi^2}{8(N+1)}\frac{\pi}{2} \tag{**} \\
&= \frac{\pi^3}{16(N+1)} \\
\frac{x}{\sin x} &\leq \frac{\pi}{2} \tag{3} \\
\text{所以} \qquad\qquad x &\leq \frac{\pi}{2}\sin x \tag{4}
\end{align}
$$

## 級數求和

$$
\begin{align*}
\sum_{i=1}^{k+1}i &= \left(\sum_{i=1}^{k}i\right) +(k+1) \tag{1} \\
&= \frac{k(k+1)}{2}+k+1 \tag{2} \\
&= \frac{k(k+1)+2(k+1)}{2} \tag{3} \\
&= \frac{(k+1)(k+2)}{2} \tag{4} \\
&= \frac{(k+1)((k+1)+1)}{2} \tag{5}
\end{align*}
$$

## 乘積符號

$$
1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots
= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
\text{ 對於 }\lvert q\rvert < 1.
$$

## 叉積

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[1ex]
\frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\[2.5ex]
\frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0
\end{vmatrix}
$$

## 麥克斯韋方程組

$$
\begin{align*}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{align*}
$$

## 希臘字母

$$
\begin{align*}
&\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega\\
&\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi\ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi
\end{align*}
$$

## 箭頭符號

$$
\begin{align*}
&\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow\\
&\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow\\
&\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow\\
&\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup\\
&\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
\end{align*}
$$

## 符號

$$
\begin{align*}
&\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup\\
&\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
\end{align*}
$$

*範例取自 [KaTeX Live Demo](https://sixthform.info/katex/examples/demo.html)*
