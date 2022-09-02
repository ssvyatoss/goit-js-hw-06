const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function makeIngridientsList(el) {

  const createItemEl = document.createElement("li");
  createItemEl.classList.add('ingridients-item');
  createItemEl.textContent = el;
  return createItemEl;

}

const ingredientsArr = ingredients.map(el => makeIngridientsList(el));
ingredientsList.append(...ingredientsArr);

