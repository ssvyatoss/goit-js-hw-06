function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

createBtn.addEventListener('click');
destroyBtn.addEventListener('click');


function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < input.value; i++) {
    
  }
}

//Завтра дороблю, щось я задовбався...