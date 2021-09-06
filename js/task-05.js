const message = {
    nameInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output')
}



const inputFn = (event) => {
    if (event.currentTarget.value !== '') {
        message.nameOutput.textContent = event.currentTarget.value;
    } else {
        message.nameOutput.textContent = 'незнакомец'; 
    };  
};

message.nameInput.addEventListener('input', inputFn);