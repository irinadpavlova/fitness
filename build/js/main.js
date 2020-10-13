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
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 40,
    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween : 0,
        slidesPerGroup: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      }
    }
  });
})();

(function () {
  var newSwiper = new Swiper('.reviews__swiper-container', {
    loop: false,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 'auto'
  });
})();

(function () {
  var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
  var animationTime = 400;
  var framesCount = 20;
  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
      var scroller = setInterval(function() {
        var scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });
})();
