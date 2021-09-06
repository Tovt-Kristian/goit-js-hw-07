

const inputRange = document.getElementById("font-size-control");
const inputText = document.getElementById("text");


const handleInput = (event) => {
    inputText.style.fontSize = event.currentTarget.value + `px`;
};

inputRange.addEventListener('input', handleInput);