const form = document.querySelector(".quizForm")
const submit_button = document.querySelector("#submit_answer")
const showOutput = document.querySelector("#output")

const correctAns = ["90", "Right Angle", "Hypotenuse", "Equilateral Triangle", "Obtuse Triangle"]

function calculateScore() {
    let score = 0;
    let index = 0;

    var formResults = new FormData(form);

    for (let formAns of formResults.values()) {

        if (formAns === correctAns[index]) {
            score = score + 1;

        }
        index = index + 1;
    }
    showOutput.innerText = "You got " + score + " answers correct out of 5!"
}

submit_button.addEventListener("click", calculateScore)