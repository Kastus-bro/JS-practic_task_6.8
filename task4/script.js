const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function() {
    const userText = prompt('Изменить текст ссылки');
    const testTextField = document.querySelector('#testTextField');
    testTextField.textContent = userText;
    console.log('Текст в #testTextField на', userText);
    });
    
testTextField.addEventListener('click', function(event) {
    this.textContent = 'Вы уверенны?'
    event.preventDefault();
    });    