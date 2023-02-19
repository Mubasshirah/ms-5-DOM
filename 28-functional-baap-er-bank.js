

document.getElementById('depositbtn').addEventListener('click',function(){
    const newDepositAmount=getInputValueById('amountdeposit');
    const previousDepositAmount=getPreviousValueById('previousdepositamount');
    const totalDepositAmount=newDepositAmount+previousDepositAmount;
    setnewAmount('previousdepositamount',totalDepositAmount);
    const previousBalanceTotal=getPreviousValueById('balanceAfterDepositOrWithdraw');
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    setnewAmount('balanceAfterDepositOrWithdraw',newBalanceTotal);
})

document.getElementById('withdrawbtn').addEventListener('click',function(){
    const newWithdroeAmount=getInputValueById('amountwithdraw');
    const previousWithdrowAmount=getPreviousValueById('previouswithdrawamount');
    const newWithdrowTotal=newWithdroeAmount+previousWithdrowAmount;
    setnewAmount('previouswithdrawamount',newWithdrowTotal);
    const previousBalanceTotalBeforeWithdrow=getPreviousValueById('balanceAfterDepositOrWithdraw');
    const newBalanceTotalAfterWithdraw=previousBalanceTotalBeforeWithdrow-newWithdroeAmount;
    setnewAmount('balanceAfterDepositOrWithdraw',newBalanceTotalAfterWithdraw);
})