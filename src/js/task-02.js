const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElements = ingredients.map((item) => {
  const listElement = document.createElement("li");
  listElement.textContent = item;
  listElement.classList.add("item");
  return listElement;
});

const listIngredients = document.querySelector("#ingredients");
listIngredients.append(...listElements);
