let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h2 class="center-text fs-22px fw-700">Introduction of Continuity Equation</h2>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function internal_calculation1() {
    d1_a1 = random1(10, 15);
    d2_a1 = random1(15, 19);
    A1_a1 = parseFloat(((Math.PI / 4) * Math.pow((d1_a1 / 100), 2)).toFixed(3));
    A2_a1 = parseFloat(((Math.PI / 4) * Math.pow((d2_a1 / 100), 2)).toFixed(3));
    Q_a1 = parseFloat((A1_a1 * v1_a1).toFixed(3));
    v2_a1 = parseFloat((Q_a1 / A2_a1).toFixed(3));
    console.log(d1_a1);
    console.log(d2_a1);
}
function start_act1() {
    let btn = (document.getElementById('temp-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <p style="text-align:left;">
         The diameter of pipe at section 1 and section 2 are ${d1_a1}cm and ${d2_a1}cm respectively.
      </p>
      <p style="text-align:left;">
         If the velocity at section 1 is ${v1_a1}m/s, find the discharge and velocity at section 2.  
      </p>
      <br>
      <img width="30%" src="./images/Fig_1.png" alt="">
      <br>
      <br>
      <p style="text-align:left;">
         Calculate area
      </p>
      <div id="act1-area-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_1 = \\frac{\π}{4}D_1^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-a1-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_2 = \\frac{\π}{4}D_2^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-a2-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_area_a1();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function verify_area_a1() {
    let a1_inp = (document.getElementById('act1-a1-inp'));
    let a2_inp = (document.getElementById('act1-a2-inp'));
    console.log(A1_a1, A2_a1);
    if (!verify_values(parseFloat(a1_inp.value), A1_a1)) {
        a1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a1_inp.style.border = '1px solid #ced4da';
        a1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a2_inp.value), A2_a1)) {
        a2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a2_inp.style.border = '1px solid #ced4da';
        a2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-area-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            A_1 = \\frac{\\pi}{4}D_1^2 = ${A1_a1} \\ m^2
         $$
         $$
            A_2 = \\frac{\\pi}{4}D_2^2 = ${A2_a1} \\ m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_discharge_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_discharge_div_a1() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Discharge through pipe
   </p>
   <div id="act1-discharge-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            Q = A<sub>1</sub>V<sub>1</sub> = 
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-q-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_discharge_a1();'>Verify</button>
   </div>
   `;
}
function verify_discharge_a1() {
    let inp = (document.getElementById('act1-q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-discharge-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      Q = A<sub>1</sub>V<sub>1</sub> = ${Q_a1} m<sup>3</sup>/s
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='load_v_div_a1();'>Next</button>
   `;
}
function load_v_div_a1() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      using continuity equation
   </p>
   <p>
      A<sub>1</sub>V<sub>1</sub> = A<sub>2</sub>V<sub>2</sub>
   </p>
   <div id="act1-v-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               V_2 = \\frac{A_1V_1}{A_2} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-v-inp' class='form-control fs-16px' /> <span style="display:contents;">m/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v_a1();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_v_a1() {
    let inp = (document.getElementById('act1-v-inp'));
    console.log(v2_a1);
    if (!verify_values(parseFloat(inp.value), v2_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-v-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            V_2 = \\frac{A_1V_1}{A_2} = ${v2_a1} \\ m/s
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn3" onclick='activity2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
activity1();
//# sourceMappingURL=activity1.js.map