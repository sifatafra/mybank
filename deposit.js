document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-total');
    const myDepositString = depositAmount.value;
    const myDeposit = parseFloat(myDepositString);

    const depositTotal = document.getElementById('deposit-btn');
    myDepositTotalString = depositTotal.innerText;
    const myDepositTotal = parseFloat(myDepositTotalString);
    depositTotal.innerText = myDeposit;
    const myMoney = myDeposit + myDepositTotal;
    depositTotal.innerText = myMoney;
    depositAmount.value = '';

    const balanceButton = document.getElementById('balance-btn');
    const myBalanceString = balanceButton.innerText;
    myBalance = parseFloat(myBalanceString);
    const addedBalance = myBalance + myMoney;
    balanceButton.innerText = addedBalance;
})