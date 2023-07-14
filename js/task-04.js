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
