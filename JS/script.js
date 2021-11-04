document.addEventListener('DOMContentLoaded', () => {

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');


burger.addEventListener('click', () => {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	document.body.classList.toggle("lock");
})

const button = document.querySelector('.partners__button');

button.addEventListener('click', function (){
	   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	   if(top > 0) {
	      window.scrollBy(0,-5000);
	   } else clearTimeout(timeOut);
	})

})