function getPin(){
    const newpin=generatePin();
    const newpinString=newpin+'';
    if(newpinString.length===4){
        return newpinString;
    }
    else{
        return generatePin();
    }
}
function generatePin(){
    const newPin=Math.round(Math.random()*10000);
    return newPin;
}

document.getElementById('pingenerator').addEventListener('click',function(){
const getpin=getPin();
const displayPInField=document.getElementById('displayPin');
displayPInField.value=getpin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number=event.target.innerText;
    const typednumber=document.getElementById('typedNumber');
    const previoustypednumber=typednumber.value;
    if(isNaN(number)){
        if(number==='C'){
            typednumber.value='';
        }
        else if(number==='<'){
            const splitNumber=previoustypednumber.split('');
            splitNumber.pop();
            const joinedNumber=splitNumber.join('');
            typednumber.value=joinedNumber;

        }
    }
    else{
        const newtypednumber=previoustypednumber+number;
        typednumber.value=newtypednumber;
        
    }
    

    

})
document.getElementById('submitbutton').addEventListener('click',function(){
    const displayed=document.getElementById('displayPin');
    const displayedValue=displayed.value;
    const typed=document.getElementById('typedNumber');
    const typedValue=typed.value;
    const successpop=document.getElementById('successalert');
    const failurepop=document.getElementById('failurealert');
    if(displayedValue===typedValue){
       successpop.style.display='block';
       failurepop.style.display='none';
    }
    else{
        successpop.style.display='none';
       failurepop.style.display='block';
    }
})