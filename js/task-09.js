function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const swapBtnEl = document.querySelector('button');
const backgroundColor = document.querySelector(".color");

const onSwapBtnElClick = () => {
  backgroundColor.style.backgroundColor = getRandomHexColor();
}

swapBtnEl.addEventListener('click', onSwapBtnElClick);
