function createRestaurant(restaurant) {
  return { name: restaurant,
           menus: {
                  breakfast: [],
                  lunch: [],
                  dinner: []
                  }
           }
  }


function addMenuItem(restaurant, foodItem) {
if (!restaurant.menus[foodItem.type].includes(foodItem)) {
 return restaurant.menus[foodItem.type].push(foodItem);
}
};

//
//

// function addMenuItem(restaurantName, newItemName) {
//   if (newItemName.type === "lunch" && !restaurantName.menus.lunch.includes(newItemName)) {
//      restaurantName.menus.lunch.push(newItemName);
//  }  else if (newItemName.type === "breakfast" && !restaurantName.menus.breakfast.includes(newItemName)) {
//      restaurantName.menus.breakfast.push(newItemName);
//  } else if (newItemName.type === "dinner" && !restaurantName.menus.dinner.includes(newItemName)) {
//      restaurantName.menus.dinner.push(newItemName);
//  }
//   return restaurantName;
// }


function removeMenuItem(restaurantName, name, type) {
 if (restaurantName.menus[type] !== undefined) {
   for (var i = 0; i < restaurantName.menus[type].length; i++) {
     restaurantName.menus[type].splice(i, 1);
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
 }
}
if (!restaurantName.menus[type].includes(name)) {
  return `Sorry, we don't sell ${name}, try adding a new recipe!`;
  }
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
