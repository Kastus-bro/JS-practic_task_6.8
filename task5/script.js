const userText = document.querySelector('#imputText');
const textShow = document.querySelector('#duplicateField');
const Buttom = document.querySelector('#clearText');

userText.addEventListener('keyup', function() {
    textShow.textContent=userText.value;
});

Buttom.addEventListener('click', function() {
    console.log (userText.value);
    console.log (userText.value="");
    textShow.textContent="";    
});
 
