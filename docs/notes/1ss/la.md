# 线性代数II

## 老登怎么跟狗一样（指吃历年卷的史）

[2024SS](https://zju-turing.github.io/TuringCourses/math_phys/linear_algebra2/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%20%E2%85%A1%EF%BC%88H%EF%BC%892024%E6%98%A5%E5%A4%8F%E5%9B%9E%E5%BF%86%E5%8D%B7.pdf)

[2023SS](https://zju-turing.github.io/TuringCourses/math_phys/linear_algebra2/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%20%E2%85%A1%EF%BC%88H%EF%BC%892023%E6%98%A5%E5%A4%8F%E5%9B%9E%E5%BF%86%E5%8D%B7.pdf)


## 敢不背概念我让你飞起来

**正规矩阵**：矩阵 $ A $ 是正规矩阵，当 $ A A^H = A^H A $ 时.$ A^H $ 是 $ A $ 的[共轭转置矩阵](#gg.gezzjz).

> 和正规矩阵[酉相似](#gg.yxs)的矩阵都是正规矩阵  
> 正规矩阵必有 $ n $ 个线性无关特征向量，即正规矩阵一定可以被相似对角化  
> 正规矩阵的属于不同特征值的特征子空间是互相正交的  

<span id="gg.gezzjz"></span>

**共轭转置矩阵**：矩阵 $ A $ 的共轭转置矩阵 $ A^H $ ，就是将 $ A $ 转置后取每个元素的复共轭.

<span id="gg.yxs"></span>

**酉相似**：对于矩阵 $ A $ ，若存在[酉矩阵](#gg.yjz) $ U $ 使得 $ U^{-1}AU = U^{H}AU = B $ ，就说 $ A $ 与 $ B $ 酉相似.

<span id="gg.yjz"></span>

**酉矩阵**：若矩阵 $ A $ 满足 $ A^H A = AA^H = E $，那么 $ A $ 是酉矩阵.

**正交补**：设 $ U $ 是 $ V $ 的自己，则 $ U $ 的正交补是由 $ V $ 中与 $ U $ 的每个向量都正交的那些向量组成的集合，记为 $ U^{\perp} $ .即 $U^{\perp} = \{v \in V \mid \forall u \in U,\, \langle v, u \rangle = 0\}$

**线性泛函**：$ V $ 上的线性泛函是从 $ V $ 到 $ \mathbb{F} $ 的线性映射. 也就是说，线性泛函是 $ \mathcal{L}(V,\mathbb{F}) $ 中的元素. 

**Gram-Schmidt过程**：设 $ v_1, ..., v_m $ 是 $ V $ 中的线性无关向量组. 设 $ e_1 = v_1/ \Vert v_1 \Vert  $. 对于 $ j = 2, ..., m $, 定义 $ e_j $ 如下： $$ e_j = \frac{v_j - \langle v_j, e_1 \rangle e_1 - \cdots - \langle v_j, e_{j-1} \rangle e_{j-1} }{ \Vert v_j - \langle v_j, e_1 \rangle e_1 - \cdots - \langle v_j, e_{j-1} \rangle e_{j-1}  \Vert }.$$ 则 $ e_1, ..., e_m $ 是 $ V $ 中的规范正交组，使得对 $ j = 1, ..., m $ 有 $$ \mathrm{span}(v_1, ..., v_j) = \mathrm{span}(e_1, ..., e_j) $$

**单的**：如果当 $ Tu = Tv $ 时必有 $ u = v $ ，则称映射 $ T \mid V \rightarrow W $ 是单的.

> $ T $ 单射等价于 $ \mathrm{null} T = {0} $ 
> 

**线性映射基本定理**：设 $ V $ 是有限维的， $ T \in \mathcal{L}(V, W) $. 则 $ \mathrm{range} T $ 是有限维的并且 $$ \mathrm{dim} V = \mathrm{dim null} T + \mathrm{dim range} T $$.

**同构**：同构就是可逆的线性映射. 若两个向量空间之间存在一个同构，则称这两个向量空间是同构的.

**向量空间的积**：设 $ V_1, ..., V_m $ 均为 $ \mathbb{F} $ 上的向量空间. 规定积 $ V_1 \times ... \times V_m = \{(v_1, ..., v_m) \mid v_1\in V_1, ..., v_m\in V_m \}$.

**积的维数等于维数的和**.

**定义 $ v+U $**：设 $v\in V$ ， $ U $ 是 $ V $ 的子空间，则 $ v + U $ 是 $ V $ 的子集，定义如下： $$ v + U = \{v+u \mid u\in U\}$$.

**仿射子集**：$ V $ 的仿射子集是 $ V $ 的形如 $ v+U $ 的子集，其中 $ v\in V $ ， $ U $ 是 $ V $ 的子空间. 对于 $ v \in V $ 和 $ V $ 的子空间 $ U $ ，称仿射子集 $ v+U $ 平行于 $ U $.

**商空间**：$ V/U $ 是指 $ V $ 的所有平行于 $ U $ 的仿射子集的集合. 

**对偶空间**：对偶空间 $ V' $ 是 $ V $ 上的所有线性泛函构成的向量空间. 

**对偶基**：设 $ v_1, ..., v_n $ 是 $ V $ 的基，则 $ v_1, ..., v_n $ 的对偶基是 $ V' $ 中的元素组 $ \varphi_1, ..., \varphi_n$ ，其中每个 $ \varphi_j $ 都是 $ V $ 上的线性泛函，使得
$$
\varphi_j(v_k) = \begin{cases}
  1, & \text{ 当 } k = j  \newline
  0, & \text{ 当 } k \neq j
\end{cases}
$$

**对偶映射**：若 $ T\in\mathcal{L}(V,W) $ ，则 $ T $ 的对偶映射是线性映射 $ T'\in\mathcal{L}(W',V') $ ：对于 $ \varphi \in W' $ ，有 $ T'(\varphi)=\varphi \circ T $.

**零化子**：对于 $ U \subset V $ ，$ U $ 的零化子定义如下： $$ U^0 = \{ \varphi \in V' \mid \forall u \in U, \varphi(u)=0 \}.$$

**Jordan标准型**：形如 $$ J_k(\lambda) = \begin{bmatrix} \lambda & 1 & 0 & \cdots & 0 \newline 0 & \lambda & 1 & \cdots & 0 \newline \vdots & \ddots & \ddots & \ddots & \vdots \newline 0 & \cdots & 0 & \lambda & 1 \newline 0 & \cdots & \cdots & 0 & \lambda \end{bmatrix} \in \mathbb{C}^{k \times k} $$ 的矩阵块组成的形如 $$ J = \begin{bmatrix} J_{k_1}(\lambda_1) & & \newline & \ddots & \newline & & J_{k_m}(\lambda_m) \end{bmatrix} $$ 的矩阵是矩阵 $ A $ 的 $ Jordan $ 标准型，当存在可逆矩阵 $ P $ 使得 $ A = PJP^{-1} $.

**验证内积**：

- 正性： $ \langle v,v \rangle \geq 0 $
- 定性： $ \langle v,v \rangle = 0 \text{ 当且仅当 } v=0 $
- 首位加性： $ \langle u+v, w \rangle = \langle u, w \rangle + \langle v, w \rangle $
- 首位齐性： $ \langle \lambda v, w \rangle = \lambda \langle v, w \rangle $
- 共轭对称性： $ \langle u,v \rangle = \bar{\langle v, u \rangle} $

**平方根**：自伴

## 你们一个个（公式）想咋的？

$ \mathrm{dim} (U_1 + U_2) = \mathrm{dim} U_1 + \mathrm{dim} U_2 - \mathrm{dim}( U_1 \bigcap U_2 ) $ （**有限维**）

$ \mathrm{null} T' = (\mathrm{range} T)^0 $

$ \mathrm{dim null} T' = \mathrm{dim null} T +\mathrm{dim} W - \mathrm{dim} V $ 

## 我是不是给你点线面给多了？艚柅杩蝶

对于两条线，首先求出其方向向量：

给定了参数方程：参数系数即为方向向量系数

给定一般式的方程组：每个一般式都确定一个平面，x、y、z前的系数即为该平面的法向量系数，再叉乘法向量获得方向向量

求两条线平行：方向向量线性相关；  
求两条线相交：联立判断解存在. 有必要可以借助共面；  
求两条线异面：两条线上任取两点 $ A $ 、 $ B $ ，然后求 $ \overrightarrow{AB} \cdot (\overrightarrow{l_1} \times \overrightarrow{l_2}) $ ，并令其 $ \neq 0 $. 同理知共面条件是 $ =0 $. 

求点到直线距离： $$ d=\frac{\Vert \overrightarrow{PQ} \times \overrightarrow{l} \Vert}{\Vert \overrightarrow{l} \Vert} $$  
求点到面距离： $$ d=\frac{\vert Ax + By + Cz + D \vert}{\sqrt{A^2+B^2+C^2}} $$

求线在平面内：代入平面方程满足且方向向量与平面法向量点积为0；  

求过线/点的平面方程：首先转化为过两条线的平面。三点方法为任求两点间直线参数方程；一点一线法为任选线上一点求两点间直线方程。然后求两条线的叉乘，记 $ (A,B,C) $ ，在给定的三点中任取一点，或取一线一点中的一点，记 $ (x_0, y_0, z_0) $ ，那么有平面方程 $ A(x-x_0)+B(y-y_0)+C(z-z_0)=0 $ 。可化简得最终结果。

## 非标准2024答案
