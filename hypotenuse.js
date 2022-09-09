
const side_1 = document.querySelector("#side1");
const side_2 = document.querySelector("#side2");
const btnCalculate = document.querySelector("#calculate");
const showOutput = document.querySelector("#output")

function calculateHypotenuse() {
    
    var hypo = Math.sqrt((Number(side_1.value) ** 2) + (Number(side_2.value) ** 2))
    
    showOutput.innerText = "The value of hypotenuse is " + hypo

}

btnCalculate.addEventListener("click", calculateHypotenuse)