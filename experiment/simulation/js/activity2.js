function activity2() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    maindiv.innerHTML += `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <p style="text-align:left;">
         A pipe of diameter ${d1_a2}cm conveying water into two branches having diameter ${d2_a2}cm and ${d3_a2}cm respectively.
      </p>
      <p style="text-align:left;">
         If the velocity at the inlet is ${v1_a2}m/s, find discharge in both the branches and velocity in branch 2. Velocity in first branch is ${v2_a2}m/s
      </p>
      <br>
      <img width="30%" src="./images/Fig_2.png" alt="">
      <br>
      <br>
      <p style="text-align:left;">
         Calculate area
      </p>
      <div id="act2-area-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_1 = \\frac{\π}{4}D_1^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-a1-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_2 = \\frac{\π}{4}D_2^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-a2-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_3 = \\frac{\π}{4}D_3^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-a3-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_area_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function internal_calculation2() {
    d1_a2 = random1(30, 36);
    d2_a2 = random1(18, 23);
    d3_a2 = random1(14, 19);
    A1_a2 = parseFloat(((Math.PI / 4) * Math.pow((d1_a2 / 100), 2)).toFixed(3));
    A2_a2 = parseFloat(((Math.PI / 4) * Math.pow((d2_a2 / 100), 2)).toFixed(3));
    A3_a2 = parseFloat(((Math.PI / 4) * Math.pow((d3_a2 / 100), 2)).toFixed(3));
    v3_a2 = parseFloat(((A1_a2 * v1_a2 - A2_a2 * v2_a2) / A3_a2).toFixed(3));
    Q1_a2 = parseFloat((A1_a2 * v1_a2).toFixed(3));
    Q2_a2 = parseFloat((A2_a2 * v2_a2).toFixed(3));
    Q3_a2 = parseFloat((A3_a2 * v3_a2).toFixed(3));
    console.log('d1_a2', d1_a2);
    console.log('d2_a2', d2_a2);
    console.log('d3_a2', d3_a2);
    console.log('A1_a2', A1_a2);
    console.log('A2_a2', A2_a2);
    console.log('A3_a2', A3_a2);
    console.log('Q1_a2', Q1_a2);
    console.log('Q2_a2', Q2_a2);
    console.log('Q3_a2', Q3_a2);
    console.log('v3_a2', v3_a2);
}
function verify_area_a2() {
    let a1_inp = (document.getElementById('act2-a1-inp'));
    let a2_inp = (document.getElementById('act2-a2-inp'));
    let a3_inp = (document.getElementById('act2-a3-inp'));
    console.log(A1_a2, A2_a2, A3_a2);
    if (!verify_values(parseFloat(a1_inp.value), A1_a2)) {
        a1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a1_inp.style.border = '1px solid #ced4da';
        a1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a2_inp.value), A2_a2)) {
        a2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a2_inp.style.border = '1px solid #ced4da';
        a2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a3_inp.value), A3_a2)) {
        a3_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a3_inp.style.border = '1px solid #ced4da';
        a3_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-area-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            A_1 = \\frac{\\pi}{4}D_1^2 = ${A1_a2} \\ m^2
         $$
         $$
            A_2 = \\frac{\\pi}{4}D_2^2 = ${A2_a2} \\ m^2
         $$
         $$
            A_3 = \\frac{\\pi}{4}D_3^2 = ${A3_a2} \\ m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='load_inlet_discharge_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_inlet_discharge_a2() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Discharge at the inlet
   </p>
   <div id="act2-inlet-discharge-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               Q_1 = A_1V_1 = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-q1-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_q1_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_q1_a2() {
    let inp = (document.getElementById('act2-q1-inp'));
    console.log(Q1_a2);
    if (!verify_values(parseFloat(inp.value), Q1_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-inlet-discharge-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Q_1 = A_1V_1  = ${Q1_a2} \\ m^3/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act2-btn2" onclick='load_v3_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_v3_div_a2() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Velocity in branch 2
   </p>
   <p>
      $$
         Q_1 = Q_2 + Q_3
      $$
      $$
         A_1V_1 = A_2V_2 + A_3V_3
      $$
   </p>
   <div id="act2-v3-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               V_3 = \\frac{A_1V_1 - A_2V_2}{A_3} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-v3-inp' class='form-control fs-16px' /> <span style="display:contents;">m/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v3_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_v3_a2() {
    let inp = (document.getElementById('act2-v3-inp'));
    console.log(v3_a2);
    if (!verify_values(parseFloat(inp.value), v3_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-v3-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         V_3 = \\frac{A_1V_1 - A_2V_2}{A_3} = ${v3_a2} \\ m/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act2-btn3" onclick='load_q2_q3_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_q2_q3_div_a2() {
    let btn = (document.getElementById('act2-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Discharge through both the branches
   </p>
   <div id="act2-q2-q3-div">
   <div class="row justify-content-center" style="align-items:center;">
      <div class="col-md-3">
         $$
            Q_2 = A_2V_2 = 
         $$
      </div>
      <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
         <input type='number' style="margin:0 5px; width:70%" id='act2-q2-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
      </div>
   </div>
   <div class="row justify-content-center" style="align-items:center;">
      <div class="col-md-3">
         $$
            Q_3 = A_3V_3 = 
         $$
      </div>
      <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
         <input type='number' style="margin:0 5px; width:70%" id='act2-q3-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
      </div>
   </div>
   <br>
   <button class='btn btn-info btn-sm std-btn' onclick='verify_q2_q3_a2();'>Verify</button>
</div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_q2_q3_a2() {
    let q2_inp = (document.getElementById('act2-q2-inp'));
    let q3_inp = (document.getElementById('act2-q3-inp'));
    console.log(Q2_a2, Q3_a2);
    if (!verify_values(parseFloat(q2_inp.value), Q2_a2)) {
        q2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        q2_inp.style.border = '1px solid #ced4da';
        q2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(q3_inp.value), Q3_a2)) {
        q3_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        q3_inp.style.border = '1px solid #ced4da';
        q3_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-q2-q3-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Q_2 = A_2V_2 = ${Q2_a2} \\ m^3/s
      $$
      $$
         Q_3 = A_3V_3 = ${Q3_a2} \\ m^3/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act2-btn4" onclick='activity3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
// activity2();
//# sourceMappingURL=activity2.js.map