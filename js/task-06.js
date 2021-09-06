const validationInput = document.getElementById('validation-input');

function checkInput(event){
    const lengthValue = this.dataset.length;
    if(event.currentTarget.value.length === Number(lengthValue)){
		validationInput.classList = 'valid';
	} else {
		validationInput.classList = 'invalid';
    };
};

validationInput.addEventListener('blur', checkInput);