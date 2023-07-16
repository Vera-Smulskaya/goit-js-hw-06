// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const listCategories = document.querySelectorAll("#categories .item");
const numberListCategories = listCategories.length;
console.log("Number of categories: ", numberListCategories);

listCategories.forEach((item) => {
  const titleCategory = item.querySelector("h2").textContent;
  const listInCategory = item.querySelectorAll("li").length;

  console.log(`Category: ${titleCategory}`);
  console.log(`Elements: ${listInCategory}`);
});
