window.onload = init;

function init()
{
    const Calculate = document.getElementById("calBtn");

    calBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick()
{
    const number1Field = document.getElementById("paymentAmount");
    const number2Field = document.getElementById("numberYear");
    const number3Field = document.getElementById("interestRate");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);
    let num3 = Number(number3Field.value);

    let monthly = num2*12
    let interestMonthly = num3/1200

    let annuityValue = num1*((1-Math.pow((1+interestMonthly),-monthly))/interestMonthly);

    const presentAmount = document.getElementById("presentAmount");

    presentAmount.value = Math.round(annuityValue*100)/100;
}