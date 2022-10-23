window.onload = init;

function init()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const number3Field = document.getElementById("number3Field");
    const Calculate = document.getElementById("calBtn");

    calBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const number3Field = document.getElementById("number3Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);
    let num3 = Number(number3Field.value);

    let intRate = num2/100;


    let answer = 

    const answerField = document.getElementById("answerField");

    answerField.value = answer;
}