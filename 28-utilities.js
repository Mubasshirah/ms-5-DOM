function getInputValueById(inputId){
    const inputValue=document.getElementById(inputId);
    const inputValueString=inputValue.value;
    const inputValueFloat=parseFloat(inputValueString);
    inputValue.value='';
    return inputValueFloat;
}

function getPreviousValueById(textId){
    const previousValue=document.getElementById(textId);
    const previousValueString=previousValue.innerText;
    const previousValueFloat=parseFloat(previousValueString);
    return previousValueFloat;
}
function setnewAmount(fieldId,newValue){
    const getFieldById=document.getElementById(fieldId);
    getFieldById.innerText=newValue;
}