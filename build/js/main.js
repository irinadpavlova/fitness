'use strict';

(function () {
  document.querySelector('.tabs').addEventListener('click', fTabs);
  function fTabs(event) {
    if (String(event.target.className) === 'tabs__link') {
      // dataTab - номер вкладки, которую нужно отобразить
      var dataTab = event.target.getAttribute('data-tab');
      // отключаю класс active
      var tabH = document.getElementsByClassName('tabs__link');
      for (var i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('tabs__link--current');
      }
      event.target.classList.add('tabs__link--current');
      // все вкладки с содержимым
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
