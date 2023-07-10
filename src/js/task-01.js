const listCategories = document.querySelectorAll("#categories .item");
const numberListCategories = listCategories.length;
console.log("Number of categories: ", numberListCategories);

listCategories.forEach((item) => {
  const titleCategory = item.querySelector("h2").textContent;
  const listInCategory = item.querySelectorAll("li").length;

  console.log(`Category: ${titleCategory}`);
  console.log(`Elements: ${listInCategory}`);
});
