import React from "react";
import { Link } from "react-router-dom";
//import "./binaryCalculator.css";

const ProjectBinaryCalculator = () => {

    let isCalculated = false;
    let btnsIds = ['btn0', 'btn1', 'btnSum', 'btnSub', 'btnMul', 'btnDiv'];

    document.getElementById('btns').addEventListener('click', (event) => {
    let target = event.target;
    let res = document.getElementById('res');

    if (btnsIds.includes(target.id)) {
        if (isCalculated) res.innerHTML  = '';
        isCalculated = false;
        res.innerHTML = res.innerHTML + target.innerHTML;
    }

    if (target.id === 'btnClr') {
        res.innerHTML = '';
    }

    if (target.id === 'btnEql') {
        isCalculated = true;
        let result = res.innerHTML.replace(/[01]+/g, (substring) => {
            return parseInt(substring, 2);
        });
        res.innerHTML = Math.floor(eval(result)).toString(2);
    }
    });


    return (
      <>
        <header class="header"><h1>Binary calculator</h1></header>
        <footer class="footer">&copy; nat-k-dev.com 2022
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </footer>
        <main>
            <section class="main">
                <div id="res"></div>
                <div class="btns" id="btns">     
                <button class="btn" id="btn0">0</button>
                <button class="btn" id="btn1">1</button>
                <button class="btn" id="btnClr">C</button>
                <button class="btn" id="btnEql">=</button>
                <button class="btn" id="btnSum">+</button>
                <button class="btn" id="btnSub">-</button>
                <button class="btn" id="btnMul">*</button>
                <button class="btn" id="btnDiv">/</button>
                </div>
            </section>
        </main>        
      </>
    );
}

export default ProjectBinaryCalculator;