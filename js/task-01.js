const categories = document.getElementById("categories");
console.log("Количество категорий: ", categories.children.length);

const item = document.querySelectorAll(".item h2")
item.forEach( el => console.log(`Категория: ${el.textContent}
Количество элементов: ${el.nextElementSibling.children.length}`));
