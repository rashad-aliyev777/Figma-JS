
// Swiper JS 

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });



  // API hissesi

  window.addEventListener("load", melumatlariGetir)

  const kartlar = document.querySelector(".api-yeri")

  async function melumatlariGetir() {
    const unvan = "melumatlar.json"

    try {
        const istek = await fetch(unvan)
        const cavab = await istek.json()
      console.log(cavab)

    

    for(let i=0; i<cavab.length; i++) {
      kartlar.innerHTML += `<div class="kard">
      <img src="${cavab[i].kartin_sekili}" alt="">
      <h4>${cavab[i].kartin_basliqi}</h4>
      <p>${cavab[i].kartin_yazisi}</p>
      </div>`
      }
    }

    catch (xeta) {
        console.log(xeta)
  }
}

// AOS paket
AOS.init();

// overlay menyu
const iconunOzu = document.querySelector('.fa-bars')
const xIconu = document.querySelector('.fa-xmark')
const overlayDivi = document.querySelector('.overlay')

  iconunOzu.addEventListener('click',() => {
    overlayDivi.style.width = "100%"
})

  xIconu.addEventListener('click',() => {
    overlayDivi.style.width = "0"
})