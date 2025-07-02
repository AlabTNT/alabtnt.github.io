# 普通物理学实验 I

## 一锅粥

正态分布特性：单峰、对称、有界、抵偿

正态分布： $$ f(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

$ \Delta = \text{ 量程 } \times \text{ 级别 }\% $. 用法：测量1.5V，选择：0.5级5V、1.0级2V、2.5级1.5V，要求误差低于1.5%，选 $ \Delta $ 最小的那个，误差为 $ \frac{\Delta}{\text{ Target }} = \frac{1.0\times 2V}{1.5V} = \text{ Actual } = 1.33\% $

A类不确定度：用数理统计方法处理。B类不确定度：用非数理统计方法处理。  
$$ u_A = S(\bar{x}) = \sqrt{\frac{1}{n(n-1)}\displaystyle \sum^{n}_{i=1}(x_i - \bar{x})^2} $$
$$u_B = \frac{\Delta \text{仪}}{3} \text{if 高斯分布 else} \frac{\Delta \text{仪}}{\sqrt{3}} \text{if 均匀分布} $$

<center>
$ u_{ \text{总} } = \sqrt{u_A^2+u_B^2} $
</center>

置信概率（概率图概率面积）对于高斯分布的 $ \[\mu-\sigma,\mu+\sigma\] $ 来说为 $ 68.3\% $

高斯公式：对于函数 $ f=f(x_1,x_2,...,x_n) $，对于其中的每一个 $ x_i $ 均有不确定度，于是总不确定度为 $$ \Delta f = \sqrt{\displaystyle \sum^{n}_{i=1}(\frac{\partial f}{\partial x_i}\Delta x_i)^2} $$

例如：对于给定外径、内径和高度的厚壁圆筒的体积， $ \Delta V = \sqrt{\left( \frac{\partial V}{\partial D} \Delta D \right)^2 +\left( \frac{\partial V}{\partial d} \Delta d \right)^2 +\left( \frac{\partial V}{\partial h} \Delta h \right)^2} $

**注意有效数字四舍五入法则：四舍六入，五如果前一位是偶就舍，是奇就入**


