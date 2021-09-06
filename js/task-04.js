const btnDecrement = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementFn = () => value.textContent = counterValue -= 1;
const incrementFn = () => value.textContent = counterValue += 1;

btnDecrement.addEventListener('click', decrementFn)
btnIncrement.addEventListener('click', incrementFn)