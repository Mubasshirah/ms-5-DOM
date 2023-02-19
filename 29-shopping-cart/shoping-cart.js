function updateCaseNumber(isIncrease){
    const valueupdate=document.getElementById('valueUpdate');
    const valueupdatestriong=valueupdate.value;
    const valueupdatefloat=parseInt(valueupdatestriong);
    let newValue;
    if(isIncrease=== true){
        newValue=valueupdatefloat+1;
    }
    else{
        newValue=valueupdatefloat-1;
    }
     valueupdate.value=newValue;
     return newValue;
}

function updatePrice(newValue){
    const newPrice=newValue*1290;
    const priceupdatefield=document.getElementById('priceUpdate');
    priceupdatefield.innerText=newPrice;
}

document.getElementById('plusBtn').addEventListener('click',function(){
    
     const newValue=updateCaseNumber(true);
     updatePrice(newValue);
     
})

document.getElementById('minusBtn').addEventListener('click',function(){
    const newValue=updateCaseNumber(false);
updatePrice(newValue);
    
})