// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const container = document.getElementById("boxes");
let size = 30;

btnCreate.addEventListener("click", onClickbtnCreate);
btnDestroy.addEventListener("click", onClickbtnDestroy);

function onClickbtnCreate() {
  createBoxes(input.value);
}

function onClickbtnDestroy() {
  container.innerHTML = "";
  input.value = "";
  size = 30;
}

function createBoxes(amount) {
  let randomColor = getRandomHexColor();
  let listDivs = [];

  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = randomColor;

    listDivs.push(div);
    size += 10;
  }

  container.append(...listDivs);
}
