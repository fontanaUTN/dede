"use strict"

const containerImages = document.querySelector('.main__container');
const sectionImages = document.querySelectorAll('.main__images');
let scrollPos = containerImages.getBoundingClientRect().top;

const moveImg = (arr) => {
    let topUnder = arr.getBoundingClientRect().top;
    const images = arr.querySelectorAll('.main__img');

	if(topUnder <= containerImages.getBoundingClientRect().top){
		images[0].style.opacity = '1';
        setTimeout(() => {
            images[1].style.opacity = '1';
        }, 200)
        
	}
	else{
        if(containerImages.getBoundingClientRect().top <= scrollPos) {
            images.forEach((img) => {
                img.style.opacity = '0';
            });
        } 
	}
}

const moveScrolling = () => {
    scrollPos = (containerImages.getBoundingClientRect()).top;
 }
 
containerImages.addEventListener('scroll', moveScrolling);