window.onload = init;

function init()
{
    const Calculate = document.getElementById("calBtn");

    calBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick()
{

    const number1Field = document.getElementById("intialAmount");
    const number2Field = document.getElementById("cdYear");
    const number3Field = document.getElementById("apyRate");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);
    let num3 = Number(number3Field.value);

    let apyPercent=num3/100
    let answer = num1 * (Math.pow(1+(apyPercent/365),(365*num2)));
    let answer2 = answer-num1;

    const totalAmount= document.getElementById("totalAmount");
    const interestGained = document.getElementById("interestGained")

    totalAmount.value=answer
    interestGained.value=answer2
}