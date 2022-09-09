const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output")

function calculateArea(){

var area = 1/2 * Number(base.value) * Number(height.value)

output.innerText=" Area of the Triangle is "+ area

}
btn.addEventListener("click",calculateArea)