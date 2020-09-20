/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/

//var burgerMenu = document.querySelector(".burger-menu");

var buttonBurger = document.querySelector(".page-header__mobile-menu-burger");
var mobileMenu = document.querySelector(".site-nav");
var closeButton = document.querySelector(".page-header__mobile-menu-close");
var whiteLogo = document.querySelector(".logo--white");
var blueLogo = document.querySelector(".logo--blue");
var headerMenu = document.querySelector(".page-header__menu");
//console.log(mobileLogo);

mobileMenu.classList.add("site-nav--hide"); // спрятанная навигация при работающем js
headerMenu.classList.remove("page-header__menu--nojs"); // меню на синем фоне при работающем js
buttonBurger.classList.remove("page-header__mobile-menu-burger--nojs");
closeButton.classList.remove("page-header__mobile-menu-close--nojs");
whiteLogo.classList.remove("logo--white--nojs");
blueLogo.classList.remove("logo--blue--nojs");
//console.log("text");

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

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  //mobileMenu.classList.toggle("site-nav--hide");
  mobileMenu.classList.remove("site-nav--show");
  mobileMenu.classList.add("site-nav--hide");
  headerMenu.classList.remove("page-header__menu--show");
  buttonBurger.classList.remove("page-header__mobile-menu-burger--hide");
  whiteLogo.classList.remove("logo--white--hide");
  blueLogo.classList.remove("logo--blue--show");
  closeButton.classList.remove("page-header__mobile-menu-close--show");
});

/*
var burgerFlag = true;

burgerMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (burgerFlag) {
    mobileMenu.classList.toggle("site-nav--hide");
    mobileMenu.classList.add("site-nav--show");
    buttonBurger.classList.add("burger-menu__button--hide");
    //console.log("text");
    console.log(burgerFlag);
    mobileLogo.classList.remove("page-header__logo");
    mobileLogo.classList.add("page-header__logo--hide");
    //buttonBurger.classList.add("burger-menu__button--hide");
    closeButton.classList.add("burger-menu__close--show");
    burgerFlag = false;
  } else {
    console.log(burgerFlag);
    mobileMenu.classList.remove("site-nav--show");
    mobileMenu.classList.add("site-nav--hide");
    buttonBurger.classList.remove("burger-menu__button--hide");
    mobileLogo.classList.remove("page-header__logo--hide");
    closeButton.classList.remove("burger-menu__close--show");
    burgerFlag = true;
  }
});
*/


/*
closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove("site-nav--show");
  mobileMenu.classList.add("site-nav--hide");
  buttonBurger.classList.remove("burger-menu__button--hide");
  mobileLogo.classList.remove("page-header__logo--hide");
  closeButton.classList.add("burger-menu__close--show");
});
*/
