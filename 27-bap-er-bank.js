document.getElementById('submitbutton').addEventListener('click',function(){
    const emailInput=document.getElementById('inputemail');
    const emailValue=emailInput.value;
    const passInput=document.getElementById('inputpass');
    const passValue=passInput.value;
    console.log(emailValue,passValue)
    if(emailValue ==='adi.com' && passValue==='adi'){
    window.location.href='bank.html';
    }
    else{
        alert('vaag');
    }
    
})
