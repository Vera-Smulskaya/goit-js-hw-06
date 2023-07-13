const input = document.getElementById("validation-input");
input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (Number(input.value.length) === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
