document.getElementById('btn-withdraw').addEventListener('click',function(){
  const withdrawFieldTotalElement = document.getElementById('withdraw-field');
  const withdrawTotalString = withdrawFieldTotalElement.value;
  const WithdrawField = parseFloat(withdrawTotalString);

  withdrawFieldTotalElement.value='';

  const withdrawAmountTotalElement = document.getElementById('withdraw-total');
  const withdrawAmountString = withdrawAmountTotalElement.innerText;
  const withdrawAmount = parseFloat(withdrawAmountString);

  const currentWithdrawAmount = withdrawAmount + WithdrawField;
  withdrawAmountTotalElement.innerText=currentWithdrawAmount;

  const balanceTotalElement = document.getElementById('balance-total');
  const balanceAmountString = balanceTotalElement.innerText;
  const balanceAmount = parseFloat(balanceAmountString);

  const currentBalance= balanceAmount - WithdrawField;
  balanceTotalElement.innerText=currentBalance;
})
