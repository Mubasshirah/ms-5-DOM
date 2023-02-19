// document.getElementById('buttonApply').addEventListener('click',function(){
//     const inputedamount=document.getElementById('inputedAmount');
//     const inputedamountstring=inputedamount.value;
//     const inputedamountfloat=parseFloat(inputedamountstring);
//     inputedamount.value='';
//     const discount=inputedamountfloat* .3;
//     const afterDiscount=inputedamountfloat-discount;
//     const afterDiscountField=document.getElementById('amountAfteDiscount');
//     afterDiscountField.innerText=afterDiscount;
// })



// document.getElementById('couponButton').addEventListener('click',function(event){
//     const inputedamount=document.getElementById('inputedAmount');
//     const inputedamountstrirng=inputedamount.value;
//     const inputedamountfloat=parseFloat(inputedamountstrirng);
//     inputedamount.value='';
//    const couponInputFieldValue=document.getElementById('couponInput');
//    const couponInputFieldValueString=couponInputFieldValue.value;
//    couponInputFieldValue.value='';
//    if(couponInputFieldValueString==='DISC30'){
//     const discount=inputedamountfloat* .3;
//     const payAfterDiscount=inputedamountfloat-discount;
//     const afterdiscountfield=document.getElementById('payAfterDiscountField');
//     afterdiscountfield.innerText=payAfterDiscount;
//    }
//    else{
//     alert('you have put wrong coupon');
//     const afterDiscount=document.getElementById('payAfterDiscountField');
//     afterDiscount.innerText=inputedamountfloat;
//    }
// })


document.getElementById('btn-bold').addEventListener('click',function(){
    const areaText=document.getElementById('textAreaText');
    // const areaTextValue=areaText.value;
    areaText.style.backgroundColor='red';
})