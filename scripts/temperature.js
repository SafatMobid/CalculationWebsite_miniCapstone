window.onload = init;

function init()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const fahtocel = document.getElementById("fahtocelBtn");
    const celtofah = document.getElementById("celtofahBtn");

    fahtocelBtn.onclick = fahtocelBtnOnClick;
    celtofahBtn.onclick = celtofahBtnOnClick;
}

function fahtocelBtnOnClick()
{
    const number1Field = document.getElementById("number1Field");
    let num1 = Number(number1Field.value);

    let answer1 = (num1 - 32) * (5/9);

    const answerField1 = document.getElementById("answerField1");

    answerField1.value = answer1;

}

function celtofahBtnOnClick()
{
    const number2Field = document.getElementById("number2Field");
    let num2 = Number(number2Field.value);

    let answer2 = (num2 * (9/5)) + 32;

    const answerField2 = document.getElementById("answerField2");

    answerField2.value = answer2;
}