/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/

"use strict";

(function () {
  var buttonBurger = document.querySelector(".page-header__mobile-menu-burger");
  var mobileMenu = document.querySelector(".site-nav");
  var closeButton = document.querySelector(".page-header__mobile-menu-close");
  var whiteLogo = document.querySelector(".logo--white");
  var blueLogo = document.querySelector(".logo--blue");
  var headerMenu = document.querySelector(".page-header__menu");

  mobileMenu.classList.add("site-nav--hide"); // спрятанная навигация при работающем js
  headerMenu.classList.remove("page-header__menu--nojs"); // меню на синем фоне при работающем js
  if (buttonBurger !== null) {
    buttonBurger.classList.remove("page-header__mobile-menu-burger--nojs");
    buttonBurger.addEventListener("click", function (evt) {
      evt.preventDefault();
      mobileMenu.classList.toggle("site-nav--hide");
      mobileMenu.classList.add("site-nav--show");
      buttonBurger.classList.add("page-header__mobile-menu-burger--hide");
      closeButton.classList.add("page-header__mobile-menu-close--show");
      headerMenu.classList.add("page-header__menu--show");
      whiteLogo.classList.add("logo--white--hide");
      blueLogo.classList.add("logo--blue--show");
    });
  }
  closeButton.classList.remove("page-header__mobile-menu-close--nojs");
  whiteLogo.classList.remove("logo--white--nojs");
  blueLogo.classList.remove("logo--blue--nojs");

  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mobileMenu.classList.remove("site-nav--show");
    mobileMenu.classList.add("site-nav--hide");
    headerMenu.classList.remove("page-header__menu--show");
    buttonBurger.classList.remove("page-header__mobile-menu-burger--hide");
    whiteLogo.classList.remove("logo--white--hide");
    blueLogo.classList.remove("logo--blue--show");
    closeButton.classList.remove("page-header__mobile-menu-close--show");
  });

  var formButton = document.querySelector(".form__button");
  var formCheckbox = document.querySelector(".form__checkbox");

  formCheckbox.addEventListener("change", function () {

    if (formCheckbox.checked) {
      formButton.removeAttribute("disabled");
    } else {
      formButton.toggleAttribute("disabled");
    }
  });
})();
