"use strict"

    const mainTitles = document.querySelector('.main__subtitles');
    const mainSubtitleOne = document.getElementById('subtitle1');
    const mainSubtitleTwo = document.getElementById('subtitle2');

    let subtitleActive = false;
    mainTitles.style.width = `${mainSubtitleOne.clientWidth}px`;


    const moveSubtitle = () => {
        
        if (subtitleActive) {
            mainTitles.style.width = '0';
            
            setTimeout(function(){
                mainSubtitleOne.style.display = 'block';
                mainSubtitleTwo.style.display = 'none';
                mainTitles.style.width = `${mainSubtitleOne.clientWidth}px`;
            }, 1800)
        }
        else {
            mainTitles.style.width = '0';

            setTimeout(function(){
                mainSubtitleOne.style.display = 'none';
                mainSubtitleTwo.style.display = 'block';
                mainTitles.style.width = `${mainSubtitleTwo.clientWidth}px`;
            }, 1800)
        }

        subtitleActive = !subtitleActive;
    }

    setInterval(moveSubtitle, 4000);

    // Show Form
    const cartContainer = document.querySelector('.cart');

    const showForm = () => {
        cartContainer.style.transform = 'translateY(0)';
    }

    // Hide Form
    const cartClosed = () => {
        cartContainer.style.transform = 'translateY(200%)';
     }
     
    // Form submit
    const form = document.querySelector('.cart__form');

    const submitForm = () => {
        form.submit();
    }