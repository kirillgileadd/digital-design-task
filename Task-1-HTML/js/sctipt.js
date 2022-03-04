const swiper = new Swiper('.swiper', {
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // spaceBetween: 30,
   breakpoints: {
      320: {
         spaceBetween: 10
      },
      640: {
         spaceBetween: 30,
      }
   }
});

function menuClose() {
   bodyUnlock();
   document.documentElement.classList.remove("menu-open");
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
   menuLinks.forEach((menulink) => {
      menulink.addEventListener('click', onMenuLinkClick)
   })

   function onMenuLinkClick(e) {
      const menuLink = e.target
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto)
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
         })

         e.preventDefault()
      }
   }
}