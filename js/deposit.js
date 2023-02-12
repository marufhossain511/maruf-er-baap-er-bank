document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFieldElement = document.getElementById('deposit-field');
    const depositTotalString = depositFieldElement.value;
    const depositAmount =parseFloat(depositTotalString);

    depositFieldElement.value='';

    const depositTotalPreviousElement =document.getElementById('deposit-total');
    const depositPreviousTotalString = depositTotalPreviousElement.innerText;
    const previousAmount =parseFloat(depositPreviousTotalString);

    const currentDeposit = previousAmount + depositAmount;
    depositTotalPreviousElement.innerText=currentDeposit;

    const balanceTotalElement=document.getElementById('balance-total');
    const balanceTotalString=balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const currentBalance = balanceTotal + depositAmount;
    balanceTotalElement.innerText=currentBalance;
})