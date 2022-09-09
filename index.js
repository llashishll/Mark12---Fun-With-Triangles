const angl1 = document.querySelector('#angle1');
const angl2 = document.querySelector('#angle2');
const angl3 = document.querySelector('#angle3');
const submit_btn = document.querySelector("#submit");
const output1=document.querySelector("#output")


function verifyForm() {

    var sumOfAngles = (Number(angl1.value) + Number(angl2.value) + Number(angl3.value))
    console.log(sumOfAngles);
    if(sumOfAngles === 180 ){
        output1.innerText="Yay! Your angles form a triangle. "
        }else{
        output1.innerText= "Oh! It can be anything but a triangle"
            }

}

submit_btn.addEventListener("click", verifyForm)