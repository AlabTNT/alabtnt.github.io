# 浙江大学 普通物理学I 
## 2024.6.22

### 大题

1. 飞船从地面竖直向上发射，飞船的质量为 $ m $ ，初速度为 $ v_0 $ 。飞船发射时所在的星球质量 $ M_E>>m $ ，半径 $ R_E $ 。已知引力常量 $ G $ ，求：

1) 高度 $ h $ 处的引力势能;  
2) 高度 $ h $ 处的速度 $ v $ ;  
3) 飞船可以上升的最大高度 $ H $ ;  

在 $ H $ 处，飞船开始沿星球切向喷气（横向喷气），主体质量为 $ m_s $ ，燃料质量 $ m_f $ ，飞船恰沿高 $ H $ 圆轨转动。

4) 求 $ v_s $ ;  
5) 若燃料至无穷远处速度为零，求 $ m_s, m_f $ ，用 $ m $ 表示。


2. 列车以 $ v $ 向右运动，Mary 在车里，Frank 在地上。已知洛伦兹变换公式为：$ x' = \gamma(x - vt) $  <br>  $ t' = \gamma\left(t - \frac{vx}{c^2}\right) $  <br> 其中  $ \gamma = \frac{1}{\sqrt{1 - v^2/c^2}} $

1) 在 Mary 系下$ u'_x, u'_y $ 运动物体在 Frank 看来 $ u_x, u_y $ 是多少？  
2) Mary 向上投一光束，运用(1)中的结果，计算 $ u_x, u_y $ 是多少，并验证光速是不变的。  
3) Mary 系里由两相邻波前 $ (x',t') = (0,0),(\lambda,T) $ ，求 Frank 系下的时空坐标。该波频率为 $ \frac{1}{T} = f_0 $ ，求因多普勒效应在 Frank 看来的 $ f $ 是多少。  
4) Mary 在车内向前发送一束光，求 Frank 看来光抵达前端的时间。

3. 粒子1静质量为 $ m $ ，动能为 $ 2mc^2 $ 。粒子2静质量为 $ 2m $ ，目前保持静止。两粒子发生碰撞，碰撞后合并为一个粒子 $ M $ ，以速度 $ v $ 继续运动。

1) 求 $ M $ 和 $ V $ ;  
2) 计算动能的变化;  
3) 解释为什么 $ M>3m $ 时能量也是守恒的;  
4) 求在质心系下（即在碰撞发生后 $ M $ 静止的系下），碰撞发生前粒子1的速度。

4. 如图为一个热机的循环过程。其中，$ 3 \rightarrow 1 $ 是等温过程，吸热 $ Q_h \geq 0 $ ； $ 2 \rightarrow 3 $ 是绝热过程； $ 1 \rightarrow 2 $ 是等容过程，放热 $ Q_c \geq 0 $ .

<svg width="500" height="400" viewBox="0 0 500 400">
    <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
        </marker>
            <marker id="heat_arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#007bff" />
        </marker>
        <marker id="cycle_arrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5"
            orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#d9534f" />
        </marker>
    </defs>
    <line x1="50" y1="350" x2="50" y2="30" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
    <text x="30" y="40" font-size="20" font-weight="bold" text-anchor="middle">T</text>
    <line x1="50" y1="350" x2="470" y2="350" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
    <text x="460" y="370" font-size="20" font-weight="bold" text-anchor="middle">V</text>
    <circle id="p1" cx="400" cy="80" r="4" fill="black" />
    <circle id="p2" cx="400" cy="280" r="4" fill="black" />
    <circle id="p3" cx="150" cy="80" r="4" fill="black" />
    <line x1="150" y1="80" x2="400" y2="80" stroke="#d9534f" stroke-width="2.5" marker-end="url(#cycle_arrow)" />
    <line x1="400" y1="80" x2="400" y2="280" stroke="#d9534f" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#cycle_arrow)" />
    <path d="M 400 280 Q 250 280 150 80" stroke="#d9534f" stroke-width="2.5" fill="none" marker-end="url(#cycle_arrow)" />
    <line x1="50" y1="80" x2="150" y2="80" stroke="#555" stroke-width="1" stroke-dasharray="4 4" />
    <text x="30" y="85" font-size="18" text-anchor="middle">T<tspan baseline-shift="sub" font-size="14">H</tspan></text>
    <line x1="50" y1="280" x2="400" y2="280" stroke="#555" stroke-width="1" stroke-dasharray="4 4" />
    <text x="30" y="285" font-size="18" text-anchor="middle">T<tspan baseline-shift="sub" font-size="14">L</tspan></text>
    <line x1="150" y1="80" x2="150" y2="350" stroke="#555" stroke-width="1" stroke-dasharray="4 4" />
    <text x="150" y="370" font-size="18" text-anchor="middle">V<tspan baseline-shift="sub" font-size="14">1</tspan></text>
    <line x1="400" y1="80" x2="400" y2="350" stroke="#555" stroke-width="1" stroke-dasharray="4 4" />
    <text x="400" y="370" font-size="18" text-anchor="middle">V<tspan baseline-shift="sub" font-size="14">2</tspan></text>
    <text x="415" y="75" font-size="18" font-weight="bold">1</text>
    <text x="415" y="295" font-size="18" font-weight="bold">2</text>
    <text x="135" y="75" font-size="18" font-weight="bold">3</text>

1) 求 $ 1 \rightarrow 2 $ 的熵变 $ \Delta S_c = S_2 - S_1 $ ;  
2) 设 $ V_2 $ 下定容热容 $ C_v $ （与 $ T $ 无关），求 $ Q_c, \Delta S_c $ ，请利用 $ T_H, T_L $ ;  
3) 计算 $ W $ 并求出热效率 $ \eta = \frac{W}{Q_h} $ 。同时说明，满足什么条件时， $ \eta $ 可接近卡诺热机 $ \eta_c = 1-\frac{T_c}{T_H} $.  

### 选择

1. 不考虑相对论，非弹性碰撞下，以下哪些内容不守恒？

a. 动能; b. 总能量; c. 动量; d. 相对固定点角动量

2. 在所示的闵可夫斯基图中：

<svg width="500" height="400" viewBox="0 0 500 400">
    <defs>
        <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
        </marker>
    </defs>
    <line x1="100" y1="350" x2="100" y2="30" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
    <text x="80" y="45" font-size="22" font-family="serif" font-style="italic">t</text>
    <line x1="100" y1="350" x2="470" y2="350" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
    <text x="460" y="370" font-size="22" font-family="serif" font-style="italic">x</text>
    <line x1="100" y1="350" x2="180" y2="30" stroke="#007bff" stroke-width="2" marker-end="url(#arrowhead)" />
    <text x="185" y="45" font-size="22" font-family="serif" font-style="italic" fill="#007bff">t'</text>
    <line x1="100" y1="350" x2="470" y2="250" stroke="#007bff" stroke-width="2" marker-end="url(#arrowhead)" />
    <text x="465" y="245" font-size="22" font-family="serif" font-style="italic" fill="#007bff">x'</text>
    <circle cx="140" cy="190" r="4" fill="#d9534f"/>
    <text x="150" y="185" font-size="18" font-family="serif" font-style="italic">t<tspan baseline-shift="sub" font-size="14">3</tspan></text>
    <line x1="140" y1="190" x2="100" y2="190" stroke="#555" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="75" y="185" font-size="18" font-family="serif" font-style="italic">t<tspan baseline-shift="sub" font-size="14">2</tspan></text>
    <line x1="140" y1="190" x2="100" y2="200.81" stroke="#555" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="75" y="216.4" font-size="18" font-family="serif" font-style="italic">t<tspan baseline-shift="sub" font-size="14">1</tspan></text>

a. $ t_3 > t_2 = t_1 $; b. $ t_3 = t_1 > t_2 $; c. $ t_1 > t_2 > t_3 $; d. $ t_2 > t_3 = t_1 $.  

3. 理想气体的绝热过程中，测得 $ T^2 V^3 = C $ ，那么 $ \frac{C_v}{C_p}=? $:

a. $ \frac{3}{5} $; b. $ \frac{5}{3} $; c. $ \frac{7}{5} $; d. $ \frac{5}{7} $.

4. 求五个线性原子振动的自由度

a. $ 9 $; b. $ 10 $; c. $ 11 $; d. $ 12 $.

5. 根据图中内容，以下说法正确的是：

<svg width="500" height="450" viewBox="0 0 500 450">
    <defs>
        <marker id="arrowhead-lc" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
        </marker>
    </defs>
    <line x1="250" y1="430" x2="250" y2="20" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-lc)" />
    <text x="270" y="35" font-size="22">t</text>
    <line x1="20" y1="225" x2="480" y2="225" stroke="#333" stroke-width="2" marker-end="url(#arrowhead-lc)" />
    <text x="470" y="215" font-size="22">x</text>
    <line x1="45" y1="20" x2="455" y2="430" stroke="#f0ad4e" stroke-width="2" />
    <line x1="45" y1="430" x2="455" y2="20" stroke="#f0ad4e" stroke-width="2" />
    <circle cx="250" cy="225" r="5" fill="#d9534f" />
    <text x="230" y="220" font-size="22" fill="#d9534f" font-weight="bold">A</text>
    <circle cx="380" cy="320" r="5" fill="#0275d8" />
    <text x="395" y="325" font-size="22" fill="#0275d8" font-weight="bold">B</text>
    <circle cx="290" cy="120" r="5" fill="#5cb85c" />
    <text x="305" y="125" font-size="22" fill="#5cb85c" font-weight="bold">C</text>
</svg>


a. C处不同事件可以同时发生（换系后）  
b. B处不同事件可以同时发生（换系后）  
c. A与B可以接触  
d. B中事件有因果

<br><br>