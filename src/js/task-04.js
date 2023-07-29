const value = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrementBtn = (event) => {
    counterValue -= 1;
    value.textContent = counterValue;

}

const incrementBtn = (event) => {
    counterValue += 1;
    value.textContent = counterValue;

}

buttonDecrement.addEventListener('click', decrementBtn);
buttonIncrement.addEventListener('click', incrementBtn);