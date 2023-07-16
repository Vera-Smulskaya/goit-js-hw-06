// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counter = document.querySelector("#value");

const btnDecr = document.querySelector('[data-action="decrement"]');
btnDecr.addEventListener("click", onTargetBtnDecrClick);

function onTargetBtnDecrClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

const btnInc = document.querySelector('[data-action="increment"]');
btnInc.addEventListener("click", onTargetBtnIncClick);

function onTargetBtnIncClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}
