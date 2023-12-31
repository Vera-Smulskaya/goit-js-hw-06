// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanChangeColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  spanChangeColor.textContent = randomColor;
}
