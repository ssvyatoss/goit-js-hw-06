const counter = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let counterValue = 0;

function decrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    counter.textContent = counterValue;
}

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);


