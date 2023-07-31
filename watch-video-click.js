const buttonlarHissesi = document.querySelector('.klikbutonu');
const baglamaqIconu = document.querySelector('.fa-xmark')
const videoIframe = document.querySelector('.youtube-linki');


buttonlarHissesi.addEventListener('click', () => {
    videoIframe.style.display="block"; 
  });

  baglamaqIconu.addEventListener('click', () => {
    videoIframe.style.display="none";
  });

