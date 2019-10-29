function deleteItem(event){

}

// get arrays first and return them => getPriceAndQtyArrays()
// then loop over the arrays and add it inside HTML => GetAndUpdatePriceByProduct()
// then total sum (work in progress) => getTotalPrice()


function getPriceAndQtyArrays(){
  var productPrice = document.querySelectorAll('.product-price');
  var productQuantity = document.getElementsByTagName('input');
  
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

  const arrayOfPricesAndQties = [];
  arrayOfPricesAndQties.push(arrPrices, arrQties);
  // console.log(arrPrices, arrQties);
  return arrayOfPricesAndQties;
}
// console.log(getPriceByProduct());


function GetAndUpdatePriceByProduct(){
  var arrayOfPricesAndQties = getPriceAndQtyArrays();
  var arrPrices = arrayOfPricesAndQties[0];
  var arrQties =  arrayOfPricesAndQties[1];

  // console.log(arrPrices, arrQties);
  var length = arrPrices.length;
  var sum = 0;

  for(var i=0; i<length; i++) {
    var totalPriceByProduct = arrPrices[i] * arrQties[i];

    var displayTotalPrice =  document.getElementsByClassName('total-price')[i];
    displayTotalPrice.innerHTML = "$" + parseFloat(totalPriceByProduct).toFixed(2);
    sum += totalPriceByProduct;
  }
  sum = parseFloat(sum).toFixed(2)
  console.log('Total cart price is: ' + sum);

  //return totalPriceByProduct; 
}
console.log(GetAndUpdatePriceByProduct());



function getTotalPrice() {
  // work in progress
  totalPrice = GetAndUpdatePriceByProduct();
  return totalPrice;
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

  calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
};
