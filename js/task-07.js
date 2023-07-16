// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let value = event.currentTarget.value;
  span.style.fontSize = `${value}px`;
}
