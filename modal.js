let btnOpen = document.getElementById('myBtn');
let modal = document.getElementById('myModal');
let btnClose = document.querySelector('.close');

btnOpen.onclick = function(){
	modal.style.display = 'block';
}
btnClose.onclick = function(){
	modal.style.display = 'none';
}


let burgerOpen = document.getElementById('my-burger');
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.bg-close');

burgerOpen.onclick = function(){
	burger.style.display = 'block';
}
burgerClose.onclick = function(){
	burger.style.display = 'none';
}



