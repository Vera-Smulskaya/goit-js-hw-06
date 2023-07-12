const counterValue = 0;
const counter = document.querySelector("#value");

function onTargetBtnClick(event) {
  if (event === "increment") {
    counterValue += 1;
  } else if (event === "decrement") {
    counterValue -= 1;
  }
  counter.textContent = counterValue;
}

const btnDecr = document.querySelector('button[data-action="decrement"]');
btnDecr.addEventListener("click", onTargetBtnClick("decrement"));

const btnInc = document.querySelector('button[data-action="increment"]');
btnInc.addEventListener("click", onTargetBtnClick("increment"));
