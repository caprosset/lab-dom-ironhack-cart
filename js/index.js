function deleteItem(event){

}



function getPriceByProduct(itemNode){
  var productPrice = itemNode.querySelectorAll('.product-price');
  var productQuantity = itemNode.getElementsByTagName('input');
  
  var arrPrices = [];
  var arrQties = [];

  for(var i =0 ; i < productPrice.length; i++){
    var priceHolder = productPrice[i].innerHTML;
    priceHolder = Number(priceHolder.slice(1));
    arrPrices.push(priceHolder);
  }

  for(var j = 0; j < productQuantity.length; j++) {
    var qtyHolder = Number(productQuantity[j].value);
    arrQties.push(qtyHolder);
  }

  // console.log(arrPrices, arrQties);

  var length = arrPrices.length;
  var sum = 0;

  console.log(displayTotalPrice);

  for(var i=0; i<length; i++) {
    var totalPriceByProduct = arrPrices[i] * arrQties[i];

    var displayTotalPrice =  document.getElementsByClassName('total-price')[i];
    displayTotalPrice.innerHTML = "$" + parseFloat(totalPriceByProduct).toFixed(2);
    //sum += totalPriceByProduct;
  }
  return totalPriceByProduct;
  //sum = parseFloat(sum).toFixed(2)
  //return sum;
}
console.log(getPriceByProduct());



function updatePriceByProduct(productPrice, index){
  //code
}



function getTotalPrice() {
  //code
  return totalPrice
}



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


calculatePriceButton.onclick = getPriceByProduct;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
};
