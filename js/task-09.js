function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const swapBtnEl = document.querySelector('button');
const backgroundColorSpan = document.querySelector(".color");
const backgroundColor = document.querySelector("body")

const onSwapBtnElClick = () => {
  const color = getRandomHexColor();
  backgroundColor.style.backgroundColor = color;
  backgroundColorSpan.textContent = color;
}

swapBtnEl.addEventListener('click', onSwapBtnElClick);
