# 线性代数II

[2024SS](https://zju-turing.github.io/TuringCourses/math_phys/linear_algebra2/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%20%E2%85%A1%EF%BC%88H%EF%BC%892024%E6%98%A5%E5%A4%8F%E5%9B%9E%E5%BF%86%E5%8D%B7.pdf)

[2023SS](https://zju-turing.github.io/TuringCourses/math_phys/linear_algebra2/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%20%E2%85%A1%EF%BC%88H%EF%BC%892023%E6%98%A5%E5%A4%8F%E5%9B%9E%E5%BF%86%E5%8D%B7.pdf)


### 概念全部飞飞飞

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

**Gram-Schmidt过程**：设 $ v_1, ..., v_m $ 是 $ V $ 中的线性无关向量组. 设 $ e_1 = v_1/||v_1|| $. 对于 $ j = 2, ..., m $, 定义 $ e_j $ 如下： $$ e_j = \frac{v_j - \langle v_j, e_1 \rangle e_1 - \cdots - \langle v_j, e_{j-1} \rangle e_{j-1} }{||v_j - \langle v_j, e_1 \rangle e_1 - \cdots - \langle v_j, e_{j-1} \rangle e_{j-1} ||}.$$ 则 $ e_1, ..., e_m $ 是 $ V $ 中的规范正交组，使得对 $ j = 1, ..., m $ 有 $$ \mathrm{span}(v_1, ..., v_j) = \mathrm{span}(e_1, ..., e_j) $$

****
