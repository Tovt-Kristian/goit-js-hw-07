const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
console.log(ingredients)

const ingredientsEl = document.getElementById('ingredients');

const addIngredient = array => array.map(el=> {
    const itemOfListEl = document.createElement('li');
    itemOfListEl.textContent = el;
    return itemOfListEl;
    
});

ingredientsEl.append(...addIngredient(ingredients));
