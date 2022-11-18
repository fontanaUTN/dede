"use strict"

const main = document.querySelector('.main');
const formArr = document.querySelectorAll('.form');
const formEdition = document.getElementById('formEdition');
const formPhoto = document.getElementById('formPhoto');
const formVideo = document.getElementById('formVideo');

const formActiveEdition = () => { formEdition.style.display = 'flex'; main.style.filter = 'blur(10px)'; }
const formActivePhoto = () => { formPhoto.style.display = 'flex'; main.style.filter = 'blur(10px)'; }
const formActiveVideo = () => { formVideo.style.display = 'flex'; main.style.filter = 'blur(10px)'; }

const closedForm = () => { 
    formArr.forEach((form) => {
        form.style.display = 'none';
    })
    main.style.filter = 'none';
}