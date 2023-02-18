document.getElementById('depositbtn').addEventListener('click',function(){
    
    const dipositAmount=document.getElementById('amountdeposit');
    const dipositAmountValueString=dipositAmount.value;
    const depositAmountValueFloat=parseFloat(dipositAmountValueString);
    dipositAmount.value='';
    if(isNaN(depositAmountValueFloat)){
        alert('input number');
        return;
    }
    

        const previousdepositAmount=document.getElementById('previousdepositamount');
        const previousdepositAmountString=previousdepositAmount.innerText
        const previousdepositAmountFloat=parseFloat(previousdepositAmountString);
        const currentDepositField=depositAmountValueFloat+previousdepositAmountFloat;
        console.log( currentDepositField);
        previousdepositAmount.innerText=currentDepositField;
        const previousBalance=document.getElementById('balanceAfterDepositOrWithdraw');
        const previousBalanceString=previousBalance.innerText;
        const previousBalanceFloat=parseFloat(previousBalanceString);
        const currrentBalanceAfterDeposit=depositAmountValueFloat+previousBalanceFloat;
        previousBalance.innerText=currrentBalanceAfterDeposit;
    
})

document.getElementById('withdrawbtn').addEventListener('click',function(){
    const balanceWithdraw=document.getElementById('amountwithdraw');
    const balanceWithdrawString=balanceWithdraw.value;
    const balanceWithdrawFloat=parseFloat(balanceWithdrawString);
    balanceWithdraw.value='';
    if(isNaN(balanceWithdrawFloat)){
        alert('input number');
        return;
    }
    const previousWithdrawAmount=document.getElementById('previouswithdrawamount');
    const previousWithdrawAmountString=previousWithdrawAmount.innerText;
    const previousWithdrawAmountFloat=parseFloat(previousWithdrawAmountString);
    const currentWithraaAmount=balanceWithdrawFloat+previousWithdrawAmountFloat;
    const balanceBeforeWithdraw=document.getElementById('balanceAfterDepositOrWithdraw');
    const balanceBeforeWithdrawString=balanceBeforeWithdraw.innerText;
    const balanceBeforeWithdrawFloat=parseFloat(balanceBeforeWithdrawString);
    if(currentWithraaAmount>balanceBeforeWithdrawFloat){
        alert('tk nai');
        return;
    }
    previousWithdrawAmount.innerText=currentWithraaAmount;
    const currentBalanceTotalAfterWithdraw=balanceBeforeWithdrawFloat-balanceWithdrawFloat;
    balanceBeforeWithdraw.innerText=currentBalanceTotalAfterWithdraw;
})