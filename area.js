const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output")

function calculateArea() {

    if (base.value == "" || height.value == "") {
        output.innerText = "Error:Enter value of both Base and Height"
    } else if (base.value < 0 || height.value < 0) {
        output.innerText = "Error:Values should be greater than zero."

    } else {

        var area = 1 / 2 * Number(base.value) * Number(height.value)

        output.innerText = " Area of the Triangle is " + area+ "sq. Units"

    }
}
btn.addEventListener("click", calculateArea)