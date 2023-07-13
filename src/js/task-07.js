const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let value = event.currentTarget.value;
  span.style.fontSize = `${value}px`;
}
