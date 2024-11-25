function activity3() {
    let btn = (document.getElementById('act3-btn4'));
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    maindiv.innerHTML += `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act3-div'>
      <h3>Activity 3</h3>
      <br>
      <p style="text-align:left;">
         A composite pipe AB, BC, CD, CE having diameter ${d1_a3}m, ${d2_a3}m, ${d3_a3}m and ${d4_a3}m respectively.
      </p>
      <p style="text-align:left;">
         If the velocity in pipe AB & CD is ${v_ab}m/s and ${v_cd}m/s respectively. <br> Find the discharge and velocity in each branch.
      </p>
      <br>
      <img width="30%" src="./images/Fig_3.png" alt="">
      <br>
      <br>
      <p style="text-align:left;">
         Calculate area
      </p>
      <div id="act3-area-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_{AB} = \\frac{\π}{4}D_1^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act3-a-ab-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_{BC} = \\frac{\π}{4}D_2^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act3-a-bc-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_{CD} = \\frac{\π}{4}D_3^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act3-a-cd-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$
                  A_{CE} = \\frac{\π}{4}D_3^2 = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act3-a-ce-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup> </span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_area_a3();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
}
function internal_calculation3() {
    d1_a3 = parseFloat(random(1, 1.4).toFixed(1));
    d2_a3 = parseFloat(random(1.5, 1.8).toFixed(1));
    d3_a3 = parseFloat(random(0.7, 0.9).toFixed(1));
    d4_a3 = parseFloat(random(0.4, 0.6).toFixed(1));
    A_ab = parseFloat(((Math.PI / 4) * Math.pow(d1_a3, 2)).toFixed(3));
    A_bc = parseFloat(((Math.PI / 4) * Math.pow(d2_a3, 2)).toFixed(3));
    A_cd = parseFloat(((Math.PI / 4) * Math.pow(d3_a3, 2)).toFixed(3));
    A_ce = parseFloat(((Math.PI / 4) * Math.pow(d4_a3, 2)).toFixed(3));
    Q_ab = parseFloat((A_ab * v_ab).toFixed(3));
    v_bc = parseFloat((Q_ab / A_bc).toFixed(3));
    Q_cd = parseFloat((A_cd * v_cd).toFixed(3));
    Q_ce = parseFloat((Q_ab - Q_cd).toFixed(3));
    v_ce = parseFloat((Q_ce / A_ce).toFixed(3));
    console.log('d1_a3', d1_a3);
    console.log('d2_a3', d2_a3);
    console.log('d3_a3', d3_a3);
    console.log('d4_a3', d4_a3);
    console.log('A_ab', A_ab);
    console.log('A_bc', A_bc);
    console.log('A_cd', A_cd);
    console.log('A_ce', A_ce);
    console.log('Q_ab', Q_ab);
    console.log('Q_cd', Q_cd);
    console.log('Q_ce', Q_ce);
    console.log('v_bc', v_bc);
    console.log('v_ce', v_ce);
}
function verify_area_a3() {
    let a1_inp = (document.getElementById('act3-a-ab-inp'));
    let a2_inp = (document.getElementById('act3-a-bc-inp'));
    let a3_inp = (document.getElementById('act3-a-cd-inp'));
    let a4_inp = (document.getElementById('act3-a-ce-inp'));
    console.log(A_ab, A_bc, A_cd, A_ce);
    if (!verify_values(parseFloat(a1_inp.value), A_ab)) {
        a1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a1_inp.style.border = '1px solid #ced4da';
        a1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a2_inp.value), A_bc)) {
        a2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a2_inp.style.border = '1px solid #ced4da';
        a2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a3_inp.value), A_cd)) {
        a3_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a3_inp.style.border = '1px solid #ced4da';
        a3_inp.disabled = true;
    }
    if (!verify_values(parseFloat(a4_inp.value), A_ce)) {
        a4_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        a4_inp.style.border = '1px solid #ced4da';
        a4_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-area-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            A_{AB} = \\frac{\\pi}{4}D_1^2 = ${A_ab} \\ m^2
         $$
         $$
            A_{BC} = \\frac{\\pi}{4}D_2^2 = ${A_bc} \\ m^2
         $$
         $$
            A_{CD} = \\frac{\\pi}{4}D_3^2 = ${A_cd} \\ m^2
         $$
         $$
            A_{CE} = \\frac{\\pi}{4}D_4^2 = ${A_ce} \\ m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act3-btn1" onclick='load_discharge_ab_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_discharge_ab_a3() {
    let btn = (document.getElementById('act3-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Discharge in pipe AB
   </p>
   <div id="act3-discharge-ab-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               Q_{AB} = A_{AB}V_{AB} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act3-q-ab-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_q_ab_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_q_ab_a3() {
    let inp = (document.getElementById('act3-q-ab-inp'));
    console.log(Q_ab);
    if (!verify_values(parseFloat(inp.value), Q_ab)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-discharge-ab-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Q_{AB} = A_{AB}V_{AB} = ${Q_ab} \\ m^3/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn2" onclick='load_v_bc_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_v_bc_div_a3() {
    let btn = (document.getElementById('act3-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Velocity in pipe BC
   </p>
   <p>
      $$
         Q_{AB} = Q_{BC} = A_{BC}V_{BC}
      $$
   </p>
   <div id="act3-v-bc-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               V_{BC} = \\frac{Q_{AB}}{A_{BC}} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act3-v-bc-inp' class='form-control fs-16px' /> <span style="display:contents;">m/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v_bc_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_v_bc_a3() {
    let inp = (document.getElementById('act3-v-bc-inp'));
    console.log(v_bc);
    if (!verify_values(parseFloat(inp.value), v_bc)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-v-bc-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         V_{BC} = \\frac{Q_{AB}}{A_{BC}} = ${v_bc} \\ m/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn3" onclick='load_q_cd_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_q_cd_div_a3() {
    let btn = (document.getElementById('act3-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Discharge in pipe CD
   </p>
   <div id="act3-discharge-cd-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               Q_{CD} = A_{CD}V_{CD} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act3-q-cd-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_q_cd_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_q_cd_a3() {
    let inp = (document.getElementById('act3-q-cd-inp'));
    console.log(Q_cd);
    if (!verify_values(parseFloat(inp.value), Q_cd)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-discharge-cd-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Q_{CD} = A_{CD}V_{CD} = ${Q_cd} \\ m^3/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn4" onclick='load_q_ce_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_q_ce_div_a3() {
    let btn = (document.getElementById('act3-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Discharge in pipe CE
   </p>
   <p>
      $$
         Q_{AB} = Q_{CD} + Q_{CE}
      $$
   </p>
   <div id="act3-discharge-ce-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               Q_{CE} = Q_{AB} - Q_{CD} =  
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act3-q-ce-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup>/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_q_ce_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_q_ce_a3() {
    let inp = (document.getElementById('act3-q-ce-inp'));
    console.log(Q_ce);
    if (!verify_values(parseFloat(inp.value), Q_ce)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-discharge-ce-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Q_{CE} = Q_{AB} - Q_{CD} = ${Q_ce} \\ m^3/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn5" onclick='load_v_ce_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_v_ce_div_a3() {
    let btn = (document.getElementById('act3-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left">
      Velocity in pipe CE
   </p>
   <p>
      $$
         Q_{CE} = A_{CE}V_{CE}
      $$
   </p>
   <div id="act3-v-ce-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               V_{CE} = \\frac{Q_{CE}}{A_{CE}} = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act3-v-ce-inp' class='form-control fs-16px' /> <span style="display:contents;">m/s </span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v_ce_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_v_ce_a3() {
    let inp = (document.getElementById('act3-v-ce-inp'));
    console.log(v_ce);
    if (!verify_values(parseFloat(inp.value), v_ce)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-v-ce-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         V_{CE} = \\frac{Q_{CE}}{A_{CE}} = ${v_ce} \\ m/s
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn6" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function exp_complete() {
    let btn = (document.getElementById('act3-btn6'));
    btn && btn.remove();
    alert('Experiment Completed');
}
// activity3();
//# sourceMappingURL=activity3.js.map