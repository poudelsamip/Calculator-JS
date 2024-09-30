const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btns");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let displayValue = "";

buttons.forEach( (btn) => {
    btn.addEventListener("click", () => {
        let res = btn.getAttribute("value");
        displayValue += res;
        display.innerText = displayValue;
    });
});

operators.forEach( (op) => {
    op.addEventListener("click", () => {
        const signs = ["+","-","*","/",".","%"];
        const hasSign = signs.some( (sign) => displayValue.endsWith(sign));
        if(!hasSign){
            let res = op.getAttribute("value");
            displayValue += res;
            display.innerText = displayValue;
        }
    });
});

equal.addEventListener("click", () => compute());
function compute(){
    if(displayValue == "") return;
    const signs = ["+","-","*","/",".","%"];
    const hasSign = signs.some( (sign) => displayValue.endsWith(sign));
    if(!hasSign){
        displayValue = eval(displayValue);
        display.innerText = displayValue;
    }
}

function ac(){
    displayValue = "";
    display.innerText = displayValue;
}

function del(){
    displayValue = displayValue.slice(0, -1);
    display.innerText = displayValue;
}