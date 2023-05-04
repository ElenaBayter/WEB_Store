/*MODAL*/

let btnOpen = document.getElementById('myBtn');
let modal = document.getElementById('myModal');
let btnClose = document.querySelector('.close');

btnOpen.onclick = function(){
	modal.style.display = 'block';
}
btnClose.onclick = function(){
	modal.style.display = 'none';
}


/*BURGER*/


let burgerOpen = document.getElementById('my-burger');
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.bg-close');

burgerOpen.onclick = function(){
	burger.style.display = 'block';
}
burgerClose.onclick = function(){
	burger.style.display = 'none';
}


/*PORTFOLIO-BUTTONS*/


let tabcontent = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablinks");

function openTab(evt, tabName) {

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

  


