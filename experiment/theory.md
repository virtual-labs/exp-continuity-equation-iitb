<h3>Types of fluid flow</h3>
<hr>

<ol type='i'>
    <li>Steady and unsteady flows</li>
    <li>Uniform and non uniform flows</li>
    <li>Laminar and Turbulent flows</li>
    <li>Compressible and Incompressible flows</li>
    <li>Rotational and Irrotational Flows</li>
    <li>One, two and three-dimensional flows</li>
</ol>


<h3>Steady and Unsteady flows</h3>
<hr>

<p>Steady flow is defined as that type of flow in which the fluid characteristics like velocity, pressure, density etc at a point do not change with time. THus for steady flow, mathematically, we have</p>

$$ \left(\frac{\partial V}{\partial t} \right)_{x_0, y_0, z_0} = 0, \left(\frac{\partial p}{\partial t} \right)_{x_0, y_0, z_0} = 0, \left(\frac{\partial \rho}{\partial t} \right)_{x_0, y_0, z_0} = 0  $$

<p>Where (x<sub>0</sub>, y<sub>0</sub>, z<sub>0</sub>) is a fixed point in fluid field.</p>

<p>Usteady flow is that type of flow, in which the velocity, pressure or density at a point changes with respect to time. Thus, mathematically, for unsteady flow</p>

$$ \left(\frac{\partial V}{\partial t} \right)_{x_0, y_0, z_0} \ne 0, \left(\frac{\partial p}{\partial t} \right)_{x_0, y_0, z_0} \ne 0, $$
<br />

<h3>Uniform and Non-Uniform Flows</h3>
<hr>

<p>Uniform flow is defined as that type of flow in which the velocity at any give time does not change with respect to space (i. e lenght of direction of flow). Mathematically, for uniform flow</p>

$$ \left(\frac{\partial V}{\partial s} \right)_{r\ = \ constant} = 0 $$

<p>where</p>

$$ \partial V = Change\ in\ velocity $$
$$ \partial s = Length\ of\ flow\ in\ direction\ s $$

<p>Non uniform flow is tahta type of flow in which the velocity at a given time changes with respect to space. Thus, mathematically, for uniform flow.</p>

$$ \left(\frac{\partial V}{\partial s} \right)_{r\ = \ constant} \ne 0 $$

<br />

<h3>Laminar and Turbulent Flows</h3>
<hr>

<p><strong>Laminar flow</strong> is defined as that type of flow in which the fluid particles move along a well defined path or stream line and all stream lines are straight and parallel. Thus the particle moves in a laminar or the layers gliding smoothly over the adjecent layer. This type of flow is also called stream-line or viscous flow.</p>

<p><Strong>Turbulent Flow</Strong> is that type of flow in which the fluid particles move in a <em>zig-zag</em> way. The eddies formation takes place which are responsible for higher energy loss. For a pipe flow, the type of flow is determined by a non-dimensional number VD/&nu; called the Raynolds number</p>

<p>When D = Diameter of pipe <br/>
V = Mean velocity of flow in pipe <br />
and &nu; = Kinematics viscosity of fluid
</p>

<p>If the Reynolds number is less than 2000, the flow is called laminar. If the Reynolds number is more than 4000, it is called tubulent flow, if the reynolds number lies between 2000 to 4000, the flow may be laminar or turbulent.</p>
<br>

<h3>Compressible and Incompressible FLows</h3>
<hr>
<p>Compressible flow is a type of flow in which the density of the fluid changes from point ot point or in other words the density (&rho;) is not constant for the fluid. Thus, mathematically, for compressible flow.</p>


$$ \rho \ne constant $$


<p>Incompressible Flow is a type of flow in which the density is constant fro mthe fluid flow. Liquids are generally incompressible while gases are compressible. Thus, mathematically, for incompressible flow</p>

$$ \rho = constant $$
<br />


<h3>Rotational and Irrotational Flows</h3>
<hr>

<p>Rotational flow is that type of flow in which the fluid particles while flowing along the stream-lines, also rotate about their own axis. and if the fluid particles while flowinbg along stream-lines, do not rotate about their own axis then that type of flow is called irrotational flow.</p>
<br />

<h3>One, Two and Three-Dimensional Flows</h3>
<hr>

<p><strong>One-Directional flow</strong> is that type of flow in which the flow parameter such as velocity is a function of time and one space co-ordinate only, variation of velocities in other two mutually perpendicular directions is assumed negligible. Hence mathematically, for one-dimensional flow</p>

$$ u = f(x),\ v = 0 \ and\ w = 0  $$

<p>where u, v and w are velocity components in x, y and z directions respectively.</p>

<p><strong>Two-Directional flow</strong> is that type of flow in which the velocity is a function of time and two rectangular space co-ordinates only. The variation of velocity in the third direction is negligible. Hence mathematically for one dimensional flow</p>

$$ u = f_1(x, y),\ v = f_2(x, y) \ and\ w = 0  $$


<p><strong>Three-Directional flow</strong> is that type of flow in which the velocity is a function of time and three mutually perpendicular directions. But for a steady three-dimensional flow the fluid parameter are function of three space co-ordiantes (x, y and z) only. Hence mathematically for one dimensional flow</p>

$$ u = f_1(x, y, z),\ v = f_2(x, y, z) \ and\ w = f_3(x, y, z)  $$

<br><br>

<h3>Continuity Equation</h3>
<hr>

<img src='./images/diagram.webp' style='width: 60%; margin-left: 20%;'>

$$ Figure\ 1 $$

<p>The equation based on the principle of conversion of mass is called continuity equation. Thus a fluid flowing through the pipe at all cross-section, the quantity of fluid per second is constant. Consider two sections of a pipe shown in figure 1</p>

<p>Let V<sub>1</sub> =  Average Velocity at cross-section in figure 1</p>

<p>&rho;<sub>1</sub> =  Density at section 1</p>

<p>A<sub>1</sub> =  Area of pipe at section  1-1</p>


<p>and V<sub>2</sub>, &rho;<sub>2</sub>, A<sub>2</sub> are corresponsing values at section 2-2. 

$$ Then\ rate\ of\ flow\ at\ section\ 1-1  = \rho_1A_1V_1 $$
$$ Rate\ of\ flow\ at\ section\ 2-2  = \rho_2A_2V_2 $$

<p>According to law of consevation of mass</p>

$$ Rate\ of\ flow\ at\ section\ 1-1  = Rate\ of\ flow\ at\ section\ 2-2 $$

$$ \rho_1A_1V_1  = \rho_2A_2V_2 \ \ \ \ \ \ \ \ \ \ \ -> Equation\ 2 $$

<p>Equation 2 is applicable to the compressible as well as incompressible fluids and is callled Continuity Equation. If the fluid is incompressible then &rho;<sub>1</sub> = &rho;<sub>2</sub> and continuity equation reduces to </p>

$$ A_1V_1  = A_2V_2 \ \ \ \ \ \ \ \ \ \ \ -> Equation\ 3 $$

<br>


<h3>Continuity Equation In Three-Dimensions</h3>
<hr>

<p>Consider a fluid element of lengths dx, dy, dz in direction of x, y and z. Let u, v and w are the inlet components in x, y and z directions respectively. Mass of the fluid entering the face ABCD per second </p>


$$ = \rho \times Velocity\ in\ x\ direction \times Area\ of\ ABCD $$
$$ = \rho \times u \times (dy \times dz) $$


$$ Then\ mass\ of\ fluid\ leaving\ the\ face\ EFGH\ per\ second = \rho u dy dz + \frac{\partial}{\partial x} (\rho u dy dz) dx $$

<p> &therefore; Gain of mass in x-direction</p>

$$ = Mass\ through\ ABCD\ -  Mass\ through\ EFGHG\ per\ second $$

$$ = \rho u dy dz - \rho dy dz - \frac{\partial}{\partial x} (\rho u dy dz) dx $$

$$ =  - \frac{\partial}{\partial x} (\rho u dy dz) dx $$

$$ =  - \frac{\partial}{\partial x} \ (\rho u) \ dy dz dx  \ \ \ \ \ \ \ \ \ \ \ \ \  {\because dydz \ is \ constant}$$

<p> Similarly, the net gain of mass in y-direction</p>

$$ =  - \frac{\partial}{\partial y} \ (\rho v) \ dy dz dx  $$


<p> and the net gain of mass in z-direction</p>


$$ =  - \frac{\partial}{\partial z} \ (\rho w) \ dy dz dx $$


<p> &therefore; net gain of masses </p>

$$ =  - \left[ \frac{\partial}{\partial x} (\rho u) + \frac{\partial}{\partial y} (\rho v) + \frac{\partial}{\partial z} (\rho w) \right] dxdydz $$

<p> Since the mass is neither created nor destroyed in the fluid element, the net element, the net increase of mass per unit time in the fluid element must be equal to the rate of increase of mass of fluid in the element. But mass of fluid element is &rho;, dx, dy, dz andits rate of increase with time is <span style='display: inline-block;'>

$$ =  - \frac{\partial}{\partial t} \ (\rho  \ dx dy dz )$$

or

$$ =  - \frac{\partial \rho}{\partial z} \ (\rho w) \ dy dz dx $$
 
</span></p>


<p> Equating the two expressions, </p>

$$ - \left[ \frac{\partial}{\partial x} (\rho u) + \frac{\partial}{\partial y} (\rho v) + \frac{\partial}{\partial z} (\rho w) \right] dxdydz = \frac{\partial \rho}{\partial t} dxdydz $$

<p> Cancelling dx dy dz from both sides </p>

$$ \frac{\partial \rho}{\partial x} + \frac{\partial}{\partial x} (\rho u) + \frac{\partial}{\partial y} (\rho v) + \frac{\partial}{\partial z} (\rho w) = 0 \ \ \ \ \ \ \ \ \ \ \ -> equation\ 3a $$


<p> Equation 3a is the continuity equation in cartesian co-ordiante in its most general form. This quation is applicable to:  </p>

<ol type='i'>
    <li>Steady and unsteady flow, </li>
    <li>Uniform and non-uniform flow, and</li>
    <li>Compressible and incompressible fluids</li>
</ol>

<p> For steady flow &part;p/&part;t = 0 and hence equation 3a becomes as   </p>

$$ \frac{\partial}{\partial x} (\rho u) + \frac{\partial}{\partial y} (\rho v) + \frac{\partial}{\partial z} (\rho w) = 0 \ \ \ \ \ \ \ \ \ \ Equation\ 3b $$

<p> If the fluid in incompressible, then &rho; is constant andthe above equation becomes as  </p>

$$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 \ \ \ \ \ \ \ \ \ \ Equation\ 4 $$

<p>Equation 4 is the continity equation in three-dimension. For a two-dimensional flow, the component w = 0 and hence continuity equation becomes as </p>

$$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0 \ \ \ \ \ \ \ \ \ \ Equation\ 5 $$
<br />


<h3>Velocity And Acceleration</h3>
<hr>



<p>Let V is the resultant velocity at any point in a fluid flow. Let u, v and w are its components in x, y and z direction. The velocity  component are function of space-co-ordiantes and time. Mathematically, the velocity components are give as</p>


$$ u = f_1(x, y, z, t) $$
$$ v = f_2(x, y, z, t) $$
$$ w = f_3(x, y, z, t) $$


<p>and Resultant velocity</p>

$$ V = ui + vj + wk = \sqrt{u^2 + v^2 + w^2} $$

<p>and a_x, a_y, a_z are the total accelaration in x, y and z direction respectively. Then by the chain rule of diffrentiation, we have </p>


$$ a_x = \frac{du}{dt} + \frac{\partial u}{\partial x} \frac{dx}{dt} + \frac{\partial u}{\partial y} \frac{dy}{dt} + \frac{\partial u}{\partial z} \frac{dz}{dt} + \frac{\partial u}{\partial t} $$

<p>But</p>

$$ \frac{dx}{dt} = u, \frac{dy}{dt} = v \ and \ \frac{dz}{dt} = w $$


<p>&therefore; similarly</p>

$$ a_x = \frac{du}{dt} = u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z} + \frac{\partial u}{\partial t} \\[2 ex]  a_y =  \frac{dv}{dt} = u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z} + \frac{\partial v}{\partial t} \\[2 ex]  a_z =  \frac{dw}{dt} = u\frac{\partial w}{\partial x} + v\frac{\partial w}{\partial y} + w\frac{\partial w}{\partial z} + \frac{\partial v}{\partial t} $$

$$  equation\ 6 $$


<p>for steady flow, <span style='display: inline; '> 

$$ \frac{\partial V}{\partial t} = 0 $$ 

</span></p>

<p>where V is resultant velocity</p>

<p>or</p>

$$ \frac{du}{dt} = 0, \frac{dv}{dt} = 0 \ and \ \frac{dw}{dt} = 0 $$

<p>Hence, acceleration in x, y and z direction becomes</p>


$$ a_x = \frac{du}{dt} = u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z} \\[2 ex]  a_y =  \frac{dv}{dt} = u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z} \\[2 ex]  a_z =  \frac{dw}{dt} = u\frac{\partial w}{\partial x} + v\frac{\partial w}{\partial y} + w\frac{\partial w}{\partial z} $$

$$  equation\ 7 $$


<p>Acceleration vector</p>

$$  A = a_xi + a_yj + a_zk $$

$$  |A| = \sqrt{a_x^2 + a_y^2 + a_z^2} $$

$$  equation\ 8 $$

<br /> <br />


<h3>Local Acceleration and Convective Acceleration</h3>
<hr>


<p>Local acceleration is defined as the rate of increase of velocity with repect to time at a pount in a flow. In the equation 6, the set of expression </p>


$$  \frac{\partial u}{\partial t}, \frac{\partial v}{\partial t}\ or\ \frac{\partial u}{\partial t} $$

<p> is known as local acceleration.</p>


<p>Convective acceleration is defined as the rate of increase of velocity due to change of position fluid particles in a fluid flow. The expressions other than  </p>


$$  \frac{\partial u}{\partial t}, \frac{\partial v}{\partial t}\ or \ \frac{\partial u}{\partial t} $$

<p> in equation 6 are known as convective acceleration.</p>

































































