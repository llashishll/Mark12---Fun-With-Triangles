const angl1 = document.querySelector('#angle1');
const angl2 = document.querySelector('#angle2');
const angl3 = document.querySelector('#angle3');
const submit_btn = document.querySelector("#submit");
const output1 = document.querySelector("#output")



function verifyForm() {
    if (angl1.value < 0 || angl2.value < 0 || angl3.value < 0) {

        output1.innerText = "Error : All the Values should be greater than 0."

    } else if (angl1.value == "" || angl2.value == "" || angl3.value == "") {
        output1.innerText = "Error: Enter value of all 3 angles."


    } else {


        var sumOfAngles = (Number(angl1.value) + Number(angl2.value) + Number(angl3.value))
        console.log(sumOfAngles);
        if (sumOfAngles === 180) {
            output1.innerText = "Yay! Your angles form a triangle. "

        } else {
            output1.innerText = "Oh! It can be anything but a triangle"
        }
    }

}

submit_btn.addEventListener("click", verifyForm)