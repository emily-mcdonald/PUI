$(document).ready(function(){


//Function: Update Image when Glaze Chosen*/
$("#glaze").click(function(){
	//html template
	$("#bun-pic").attr("src", $("#glaze").val() + ".jpg")
	console.log($("#glaze").val())

})



/*Function: Update Cost when QTY Chosen*/
$("#quant").click(function(){
	var newPrice = document.getElementById('price');
	newPrice.innerHTML="$" + parseInt($("#quant").val()) * 5
	
})



//create dictionary for glaze and pics

//create shopping cart array
var shoppingCart = []


/*Function: Add Item to Cart*/
	//Create
$("#addToCart").click(function(){
	console.log("clicked")
	// Pull item Attributes
	//Get QTY
		// Read Value of Drop Down and Assign It to Variable
	var quantity = $("#quant").val();
	//Get Glaze
			// Read Value of Drop Down and Assign It to Variable
    var glaze = $("#glaze").val();
    //Get Name
    	//Read text of productTitle and assign to variable
    var name = $("#productTitle").text();
    //Get Subtotal 
		// Read Value of Drop Down and Assign It to Variable OR Use Dictionary 
    var price = $("#price").text();
    //Get Image
		// Use Dictionary
    var pic = $("#bun-pic").attr("src");
    //Create Bun Item
	var Item = {
    	quantity: quantity,
        glaze: glaze,
        name: name, 
        price: price,
        pic: pic,
        uid: 'roll-' + Math.floor(Math.random() * 10e6)
      };
    console.log(Item);
    //Pull shoppingCart array
    var storage = localStorage.getItem('STORAGE');
    if (storage) {
    	storage = JSON.parse(storage);	
    } else { storage  = []; }
    var shoppingCart= storage;
    console.log(shoppingCart);
    //add bun to cart
    shoppingCart.push(Item);
    console.log(shoppingCart);
    //push shopping cart to local storage
    localStorage.setItem('STORAGE', JSON.stringify(shoppingCart));
    console.log('STORAGE');
	})
	
});

/*CART PAGE*/
var subtotal=0
var totalBuns=0
/*Display Cart Items on Page*/
function renderCart(){
	var Cart = $(".shopping-cart");
	//pull from storage
	var storage = JSON.parse(localStorage.getItem('STORAGE'));
	console.log(storage);
	//TEMPLATE
	var cartTemplate = '<div class="item"  data-bun-uid="BUN_UID"><div class="buttons"><span data-uid="DEL_UID" class="delete-btn"><img src="delete-sign.png" width="20" height="20"/></span></div><div class="image"><img src="IMAGE" height="90" width="120"/></div><div class="description"><span>BUN NAME</span><span>GLAZE</span></div><div class="quantity">QUANTITY</div><div class="total-price">PRICE</div></div>';
	//get each item attribute 
	for (let i = 0; i < storage.length; i++) {
		var cartItem = storage[i];
		var itemTemplate = cartTemplate;
		itemTemplate = itemTemplate.replace('BUN_UID', cartItem.uid);
		itemTemplate = itemTemplate.replace('DEL_UID', cartItem.uid);
		itemTemplate = itemTemplate.replace('BUN NAME', cartItem.name);
		itemTemplate=itemTemplate.replace('QUANTITY', cartItem.quantity);
		itemTemplate=itemTemplate.replace('PRICE', cartItem.price);
		itemTemplate=itemTemplate.replace('GLAZE', cartItem.glaze);
		itemTemplate=itemTemplate.replace('IMAGE', cartItem.pic);

		var node = document.createElement("Div");
    	node.classList.add('cartItem');
    	node.innerHTML = itemTemplate;
    	Cart.append(node);
    	subtotal += parseInt(cartItem.quantity);
    	totalBuns+=1
    	console.log(totalBuns);
	}
	var newSubtotal= document.getElementById('subtotal');
	newSubtotal.innerHTML="Subtotal: $" + subtotal*5
	console.log($("#cart_link").text());
	var cartUpdate=document.getElementById('cart_link');
	cartUpdate.innerHTML="cart("+totalBuns+")"

}

function GetStorage() {
	var storage = localStorage.getItem('STORAGE');
    if (storage) {
    	storage = JSON.parse(storage);	
    } else { storage  = []; }
    return storage;
}

function addDeleteListener() {
	$('.delete-btn').click(function() {
		var uid = $(this).attr('data-uid');
		if (uid) {
			var storage = GetStorage();
			// REMOVE FROM STORAGE
			storage = storage.filter( x => x.uid !== uid);
			localStorage.setItem('STORAGE', JSON.stringify(storage));
			// REMOVE ROW
			$(`[data-bun-uid="${uid}"]`).remove();
		}
		
	});
}

	//Get each item attribute
	//Assign those attributes to their div 
		//createElement > specify kind of element(div, span) > if div has other div, make those
			//appendChild to attach to the tree > nodes = actual image files and text
	//setAttribute on each div and node to assign classes and ids
		//how you use delete function > create onclick function


/*Delete button*/
//Delete Item from Shopping Cart Array
// $(".delete-btn").click(function(){
// 	//Pull Shopping Cart
// 	JSON.parse('STORAGE');
// 	//Access the correct item in cart 
// })
		
		//Accessing the right item
		//Delete the item
		//Push Cart
	//Remove It from HTML
		//pull index of div, remove parent 


/*Document Ready*/
// If Else - Create Shopping Cart 

// Product Page
	// adding bun to cart 
	//glaze and price matching
//Cart page
	//display html stuff
	//delete button
//Display order total on cart page
	//simple for loop>local storage
