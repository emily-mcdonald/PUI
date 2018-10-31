function onReady(){
	var button=document.getElementById('addToCart');
	console.log(button);
	if(button){
		button.addEventListener('click', onCartAddBtnClicked);
		});
	}
}

function onCartAddBtnClicked(){
	console.log('button is listening');
}
onReady();