
function onReady () {
	var button = document.getElementById('addToCart');
  if (button) {
  	button.addEventListener('click', onCartBtnClick);
  }
  var cartStorage = GetFromStorage();
  console.log(cartStorage);
}

function onCartBtnClick() {
      // GET QUANTITY FROM INPUT
      var input = document.getElementById('quantity-input');
      var inputValue= input.value;
      var item = {
	      quantity : inputValue,
        flavour: 'Vanilla' // READ ANOTHER INPUT VALUE
      };
      var cartItems = GetFromStorage();
      cartItems.push(item);
      localStorage.setItem('STORAGE', JSON.stringify(cartItems));
}


function onReady () {
  var wrapper = document.getElementById('wrapper');
  var cartStorage = GetFromStorage();
  var tmpl = '<label>ROLL_NAME: <span>ROLL_NUMBER</span></label>';
  for (let i = 0; i < cartStorage.length; i++) {
    var item = cartStorage[i];
    var itemTmpl = tmpl;
    // var itemTmpl = 
    // `
    // <label>${item.flavour}: <span>${item.quantity}</span></label>
    // `;
    itemTmpl = itemTmpl.replace('ROLL_NAME', item.flavour);
    itemTmpl = itemTmpl.replace('ROLL_NUMBER', item.quantity);
    var node = document.createElement("DIV");
    node.classList.add('item');
    node.innerHTML = itemTmpl;
    wrapper.appendChild(node);
    //var textnode = document.createTextNode("Water");
  //  node.appendChild(textnode);
//    document.getElementById("myList").appendChild(node);  
  }
}
function GetFromStorage() {
 var storage = localStorage.getItem('STORAGE');
 console.log(storage);
 if (storage) {
  return JSON.parse(storage);
 }
 return [];
}


onReady();

function GetFromStorage() {
 var storage = localStorage.getItem('STORAGE');
 console.log(storage);
 if (storage) {
 	return JSON.parse(storage);
 }
 return [];
}


onReady();