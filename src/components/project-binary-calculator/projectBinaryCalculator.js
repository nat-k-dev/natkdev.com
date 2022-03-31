import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common-blocks/footer/footer";
import "./binaryCalculator.css";

const ProjectBinaryCalculator = () => {

    let isCalculated = false;
    let btnsIds = ['btn0', 'btn1', 'btnSum', 'btnSub', 'btnMul', 'btnDiv'];

    function onClickCalc(event) {
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
        // there is no security risk because the code is not implemented on the server
        // and the source string is always correct because it is assembled from the calc-buttons pressing
        res.innerHTML = Math.floor(eval(result)).toString(2); 
    }
    }

    return (
      <div className="binary-calc-page">
        <h1 className="binary-calc-heading">Binary calculator</h1>
        <main className="binary-calc-main">
            <section className="binary-calc-section">
                <div id="res"></div>
                <div className="btns" id="btns" onClick={(event) => onClickCalc(event)}>     
                <button className="btn" id="btn0">0</button>
                <button className="btn" id="btn1">1</button>
                <button className="btn" id="btnClr">C</button>
                <button className="btn" id="btnEql">=</button>
                <button className="btn" id="btnSum">+</button>
                <button className="btn" id="btnSub">-</button>
                <button className="btn" id="btnMul">*</button>
                <button className="btn" id="btnDiv">/</button>
                </div>
            </section>
            <Link className="binary-calc-home-link" to="/">Home</Link>
        </main>
        <Footer />
      </div>
    );
}

export default ProjectBinaryCalculator;