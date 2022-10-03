const side_1 = document.querySelector("#side1");
const side_2 = document.querySelector("#side2");
const btnCalculate = document.querySelector("#calculate");
const showOutput = document.querySelector("#output")

function calculateHypotenuse() {

    if (side_1.value == "" || side_2.value == "") {
        output.innerText = "Error : Enter value of both sides"
    } else if (side_1.value <= 0 || side_2.value <= 0) {
        output.innerText = "Error : Values should be greater than zero."

    } else {

        var hypo = Math.sqrt((Number(side_1.value) ** 2) + (Number(side_2.value) ** 2))

        showOutput.innerText = "The value of the Hypotenuse is " + hypo.toFixed(2)

    }
}

btnCalculate.addEventListener("click", calculateHypotenuse)