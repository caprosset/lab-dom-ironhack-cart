function deleteItem(event){

}

function getTotalPrice() {
  var productPrice = document.querySelector('.product-price').innerHTML
  productPrice = Number(productPrice.slice(1))
  
  var productQuantity = document.getElementsByTagName('input')[0].value

  var totalPrice = productPrice * productQuantity
  totalPrice = `$ ${parseFloat(totalPrice).toFixed(2)}`

  var displayTotalPrice =  document.getElementsByClassName('total-price')[0]
   displayTotalPrice.innerHTML = totalPrice

  return totalPrice //+ totalPrice2
}



function getPriceByProduct(itemNode){
  // var productPrice = document.querySelectorAll('.product-price')
  // var productQuantity = document.getElementsByTagName('input')[0].value

}

function updatePriceByProduct(productPrice, index){

}




//calculate total price
var productPrice = document.querySelector('.product-price',).innerHTML
var productQuantity = document.getElementsByTagName('input')[0].value
var calculatePriceButton = document.getElementById('calc-prices-button');
console.log(productQuantity)
calculatePriceButton.addEventListener('click', getTotalPrice) 







function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
//   // var createItemButton = document.getElementById('new-item-create');
//   // var deleteButtons = document.getElementsByClassName('btn-delete');
  var calculatePriceButton = document.getElementById('calc-prices-button');


  calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
};
