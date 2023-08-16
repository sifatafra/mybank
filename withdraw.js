const withdrawButton = document.getElementById('btn-balance').addEventListener('click', function () {
    const withdraw = document.getElementById('balance-total');
    const withdrawMoneyString = withdraw.value;
    moneyWithdraw = parseFloat(withdrawMoneyString);
    withdraw.value = '';

    //  decrease money from total balance

    const decrease = document.getElementById('withdraw-btn');
    const newAmountString = decrease.innerText;
    newAmount = parseFloat(newAmountString);
    const recentAdded = moneyWithdraw + newAmount;
    decrease.innerText = recentAdded;

    // now get the final balance 
    const finalBalance = document.getElementById('balance-btn');
    const finalBalanceString = finalBalance.innerText;
    fixed = parseFloat(finalBalanceString);

    const newFixed = fixed - recentAdded;
    finalBalance.innerText = newFixed;
    console.log(newFixed)












    // console.log(moneyWithdraw)

})