(function() {

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.toggle-button');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('toggle-button--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
  }
});

})();
