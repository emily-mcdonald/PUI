
var dict = {"No Glaze": "No Glaze.jpg", "Sugar Milk": "Sugar Milk.jpg", "Vanilla Milk": "Vanilla Milk.jpg", "Double Chocolate": "Double Chocolate.jpg"}
console.log(dict);

var glaze = $("#glaze");
var quant = $("#quant");
var name = $("#productTitle");
var price = $("#price");
var pic = $("#product-pic");
console.log(glaze);
console.log(quant);
console.log(name);
console.log(price);


$(document).ready(function(){
$("#glaze").click(function(){
    // console.log($("#glaze").val());
    var glaze = $("#glaze").val();
    // $("#product-pic").attr("src", "C:\Users\Emily\Documents\MHCI\Fall\PUI\GitHub\PUI\Assignment 6\vanilla-milk.jpg");
    // console.log(glaze);
    
    
});
$("#quant").click(function(){
    console.log($("#quant").val());
});


// var Bun = [$("#productTitle"), $("#glaze"), $("#quant"), $("#productTitle")]
// console.log(Bun);

$("#addToCart").click(function(){
    

var cart= {
    item: $('#productTitle').text(),
    price: $('#price').val(),
    quant: $('#quant').val(),
    glaze: $('#glaze').text()

};
var jsonStr=JSON.stringify(cart);
localStorage.jsonStr=jsonStr;
var cartValue=localStorage.jsonStr;
var cartObj=JSON.parse(cartValue);
console.log(jsonStr);
console.log(cartValue);
console.log(cartObj);
    // console.log($("#glaze").val());
    // console.log($("#quant").val());
    // console.log($("#productTitle").text());
    // console.log($("#price").text());
    // var Bun = [$("#productTitle"), $("#glaze"), $("#quant"), $("#productTitle")]
    // console.log(Bun);


});




});




