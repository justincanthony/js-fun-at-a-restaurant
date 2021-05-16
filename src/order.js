
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(order);
} else {

};
}

function refundOrder(number, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === number) {
    return deliveryOrders.splice(i, 1);
  }
}
}



function listItems(deliveryOrders) {
  var orderList = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderList.push(deliveryOrders[i].item);
}
var stringOrderList = orderList.join(", ");
  return stringOrderList;
}




function searchOrder(deliveryOrders, searchItem) {
  var orderNames = []
  for (var i = 0; i < deliveryOrders.length; i++) {
     orderNames.push(deliveryOrders[i].item)
  }
  return orderNames.includes(searchItem);
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
