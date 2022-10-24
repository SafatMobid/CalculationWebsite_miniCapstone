window.onload = init;

function init()
{
    const number1Field = document.getElementById("mortgageAmount");
    const number2Field = document.getElementById("interestRate");
    const number3Field = document.getElementById("loanYear");
    const Calculate = document.getElementById("calBtn");

    calBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick()
{
    const number1Field = document.getElementById("mortgageAmount");
    const number2Field = document.getElementById("interestRate");
    const number3Field = document.getElementById("loanYear");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);
    let num3 = Number(number3Field.value);


    let amountofmonthlyPayment = num3*12;
    let monthlyintRate = (num2)/1200;
    let answer = num1 * monthlyintRate * (Math.pow(1 + monthlyintRate, amountofmonthlyPayment)) / (Math.pow(1 + monthlyintRate, amountofmonthlyPayment) - 1);
    let intRate= ((answer*12)*num3) ;

    const monthlyLoan = document.getElementById("monthlyLoan");
    const interestpaid = document.getElementById("interestPaid");

    monthlyLoan.value = answer
    interestpaid.value = intRate
}
