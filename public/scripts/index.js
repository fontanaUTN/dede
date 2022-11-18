"use strict"

// Move logo
const eventsContainer = document.querySelector('.events');
const eventsImage = document.querySelector('.events__logo');

const moveLogo = () => {
   let topUnder = eventsContainer.getBoundingClientRect().top;

	if(topUnder <= window.innerHeight/1.2){
		eventsImage.style.opacity = '1';
      eventsImage.style.transform = 'translateY(0)';
	}
	else{
		eventsImage.style.opacity = '0';
      eventsImage.style.transform = 'translateY(200%)';
	}
}
// Move Events
const eventsItem = document.querySelectorAll('.events__items');

const moveItems = (arr) => {
   let topUnder = arr.getBoundingClientRect().top;
   let title = arr.querySelector('.events__title');
   let images = arr.querySelector('.slider');
   let date = arr.querySelector('.events__date');

	if(topUnder <= window.innerHeight/3){	
      images.style.opacity = '1';
      setTimeout( function() {
         title.style.opacity = '1';
         setTimeout( function() {
            date.style.transform = 'translateX(0)';
            date.style.opacity = '1';
         }, 600)
      }, 600)
	}
	else{
		title.style.opacity = '0';
      images.style.opacity = '0';
      date.style.opacity = '0';
      if(date.dataset.pos == 'left') {
         date.style.transform = 'translateX(100%)';
      }
      else {
         date.style.transform = 'translateX(-100%)';
      }
      
	}
}

// Move Aliados
const teamContainer = document.querySelector('.team');
const teamTitle = document.querySelector('.team__title');
const teamImages = document.querySelectorAll('.team__img');

const moveTeam = () => {
   let topUnder = teamContainer.getBoundingClientRect().top;

	if(topUnder <= window.innerHeight/2){
		teamTitle.style.opacity = '1';
      teamImages.forEach((image) => {
         setTimeout( function() {
            image.style.opacity = '.6';
         }, 500)
      })
	}
	else{
		teamTitle.style.opacity = '0';
      teamImages.forEach((image) => {
            image.style.opacity = '0';
      })
	}
}

// Move Nosotros
const usContainer = document.querySelector('.us');
const usTitle = document.querySelector('.us__title');
const usImage = document.querySelector('.us__image');

const moveUs = () => {
   let topUnder = usContainer.getBoundingClientRect().top;

	if(topUnder <= window.innerHeight/3){
		usTitle.style.opacity = '1';
      setTimeout(()=> {
         usImage.style.opacity = '1';
      }, 900)
	}
	else{
		usTitle.style.opacity = '0';
      usImage.style.opacity = '0';
	}
}

// Move Nosotros text
const usText = document.querySelector('.us__text');

const moveUsText = () => {
   let topUnder = usText.getBoundingClientRect().top;

	if(topUnder <= window.innerHeight/3){
      usText.style.opacity = '1';
	}
	else{
      usText.style.opacity = '0';
	}
}

const moveScrolling = () => {
   moveLogo();
   eventsItem.forEach((item)=> { moveItems(item) });
   moveTeam();
   moveUs();
   moveUsText();
}

window.addEventListener('scroll', moveScrolling);
// Slider images
const arrSliderItems = document.querySelectorAll('.slider__item');
let contadorSliderItems = 0;

const slider = () => {
   contadorSliderItems += 1;

   if(contadorSliderItems >= arrSliderItems.length) {
      contadorSliderItems = 0;
   }

   arrSliderItems.forEach((items) => {
      items.style.opacity = '0';
   })

   arrSliderItems[contadorSliderItems].style.opacity = '1';
}

// setInterval(function() {
//    slider();
// }, 3000)