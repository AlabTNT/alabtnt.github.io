# Zhejiang University: General Physics I 
## 2024.6.22

### Analysis & Calculation

1. A spacecraft is launched vertically upwards from the ground of some planet. The mass of the spacecraft is $ m $, and the initial speed is $ v_0 $. The mass of the planet is $ M_E ( >> m ) $, and the radius is $ R_E $. The gravitational constant is $ G $. Find out:

1) The gravitational potential energy of the spacecraft when at the height $ h $;  
2) The speed of the spacecraft when at the height $ h $;  
3) The maximum height $ H $ the spacecraft can reach without any additional energy.  

Now the spacecraft reaches $ H $, and begins to jet along the planet in a tangential direction. The mass of the main body of the spacecraft is $ m_s $ and the mass of the fuel is $ m_f $. The spacecraft happens to be orbiting the planet along a high $ H $, exactly, circular orbit. 

4) Find out $ v_s $;  
5) If the speed of the fuel is zero when at infinity, find out $ m_s, m_f $ in the form of $ m $. 

2. A train is moving towards right in the speed of $ v $. Mary is on the train while Frank is on the ground. Known that Lorentz' transformation formula is $ x' = \gamma(x - vt) $  <br>  $ t' = \gamma\left(t - \frac{vx}{c^2}\right) $  <br> In which $ \gamma = \frac{1}{\sqrt{1 - v^2/c^2}} $

1) Derive $ u_x, u_y $, the speed of an object in Frank's frame moving with speed of $ u'_x, u'_y $ in Mary's frame.  
2) Mary cast a beam of light upwards. Find out the value of $ u_x, u_y $ in (1), then specify why the speed of the light is constant.  
3) There're two adjacent wavefronts in Mary's frame that $ (x',t') = (0,0),(\lambda,T) $. Find out the space-time coordinates of the wave in Frank's frame. If the frequency of the wave is $ \frac{1}{T} = f_0 $, derive the frequency $ f $ of the wave in Frank's view due to the Doppler effect.  
4) Mary cast a beam of light forwards. Find out the time when the light reaches the front end in Frank's frame.

3. The static mass of Particle 1 is $ m $, and the kinetic energy of it is $ 2mc^2 $. The static mass of Particle 2 is $ 2m $, and it is stationary currently. Two particles collided, and merged into a new particle $ M $ after collision.

1) Find out $ M $ and $ V $ ;  
2) Derive the change in kinetic energy;  
3) Specify why the energy still conserved when $ M > 3m $;  
4) Find the velocity of particle 1 before the collision occurs in the center of mass frame (i.e., in the frame where $ M $ is stationary after the collision occurs).

4. The following figure shows the cyclic process of a heat engine. In the figure, $ 3 \rightarrow 1 $ is an isothermal process that absorbs heat $ Q_i \geq 0 $; $ 2 \rightarrow 3 $ is an adiabatic process; $ 1 \rightarrow 2 $ is an isochoric process that releases heat $ Q_c \geq 0 $.

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

1) Find out the entropy change $ \Delta S_c = S_2 - S_1 $ of the progress $ 1 \rightarrow 2 $;  
2) Assuming constant heat capacity $ C_v $ under $ V_2 $, which is independent of $ T $. Find out $ Q_c, \Delta S_c $ by using $ T_H, T_L $;  
3) Calculate $ W $ and find out the thermal efficiency $ \eta = \frac{W}{Q_h} $. Then specify in which condition can $ \eta $ approach the Carnot heat engine $ \eta_c = 1-\frac{T_C}{T_H} $.

### Choice

1. Without considering relativity, which of the followings is not conserved in inelastic collisions?

a. Kinetic energy; b. Total energy; c. Momentum; d. Relative fixed point angular momentum

2. In the figure(Minkowski diagram):

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

which of the followings is true? 

a. $ t_3 > t_2 = t_1 $; b. $ t_3 = t_1 > t_2 $; c. $ t_1 > t_2 > t_3 $; d. $ t_2 > t_3 = t_1 $.  

3. During the adiabatic process of an ideal gas, it is measured that $ T^2 V^3 = C $. Find out $ \frac{C_v}{C_p} $.  

a. $ \frac{3}{5} $; b. $ \frac{5}{3} $; c. $ \frac{7}{5} $; d. $ \frac{5}{7} $.

4. Find the degrees of freedom of five linear atomic vibrations

a. $ 9 $; b. $ 10 $; c. $ 11 $; d. $ 12 $.

5. Due to the figure, which of the followings is true?

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

a. After switching frames, different events at C can occur simultaneously;  
b. After switching frames, different events at B can occur simultaneously;  
c. A and B can come into contact;  
d. The event in B has causality.  

<br><br>