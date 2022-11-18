"use strict"

const menuBtn = document.querySelector('.header__btn');
const navResp = document.querySelector('.header__span-res')

const menuActived = () => {
	menuBtn.classList.toggle('header__active');
	if(menuBtn.classList.contains('header__active')){
		navResp.style.display = 'flex';
	}
	else {
		navResp.style.display = 'none';
	}
};

menuBtn.addEventListener('click', menuActived);
