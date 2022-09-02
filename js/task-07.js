const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener("input", ev => {
   text.style.cssText = `font-size: ${fontSizeControl.value}px`;
//    text.style.fontSize = `${fontSizeControl.value}px`;
   console.log(text.textContent);
   console.log(fontSizeControl.value);
});