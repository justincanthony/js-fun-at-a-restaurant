function nameMenuItem(menuItemName) {
  return ("Delicious " + menuItemName);
}

function createMenuItem(menuItemName, price, type) {
  return { name: menuItemName,
           price: price,
           type: type
};
}

function addIngredients(addItem, ingredients) {
  if (ingredients.indexOf(addItem) === -1) {
  return ingredients.push(addItem);
}
}

function formatPrice(initialPrice) {
  return "$" + initialPrice;
}

function decreasePrice(initialPrice) {
  return initialPrice * .90;
}


function createRecipe(title, ingredients, menuItemType) {
  return { title: title,
           ingredients: ingredients,
           type: menuItemType
         };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
