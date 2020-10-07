'use strict';

(function () {
  document.querySelector('.tabs').addEventListener('click', fTabs);
  function fTabs(event) {
    if (String(event.target.className) === 'tabs__link') {
      var dataTab = event.target.getAttribute('data-tab');
      var tabH = document.getElementsByClassName('tabs__link');
      for (var i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('tabs__link--current');
      }
      event.target.classList.add('tabs__link--current');
      var tabBody = document.getElementsByClassName('tab-body');
      for (var j = 0; j < tabBody.length; j++) {
        if (Number(dataTab) === j) {
          tabBody[j].classList.add('tab-body--current');
        } else {
          tabBody[j].classList.remove('tab-body--current');
        }
      }
    }
  }
})();

(function () {
  var swiper = new Swiper('.trainers__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 35,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints : {
      768: {
        slidesPerView: 2,
        spaceBetween : 30,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
      }
    }
  });
})();

(function () {
  var newSwiper = new Swiper('.reviews__swiper-container', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoHeight: true
  });
})();
