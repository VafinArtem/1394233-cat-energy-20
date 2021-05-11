// Menu

let menuButton = document.querySelector(".js-button");
let menu = document.querySelector(".js-menu");

menuButton.classList.remove("main-nav__toggle--no-js");
menu.classList.remove("main-nav__list--no-js");
menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menuButton.classList.contains("main-nav__toggle--active")) {
    menu.classList.remove("main-nav__list--active");
    menuButton.classList.remove("main-nav__toggle--active");
  } else {
    menu.classList.add("main-nav__list--active");
    menuButton.classList.add("main-nav__toggle--active");
  }
});

// Map

function initMap() {
  let centerPoint = {lat: 59.938765, lng: 30.320583};
  let academy = {lat: 59.938635, lng: 30.323118};
  if (window.matchMedia("(min-width: 1440px)").matches) {
    let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 17,
        center: centerPoint,
        disableDefaultUI: true
      }
    );
    let marker = new google.maps.Marker({
      position: academy,
      map: map,
      icon: "./img/map-pin.png"
    });
  } else {
    let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 17,
        center: academy,
        disableDefaultUI: true
      }
    );
    let marker = new google.maps.Marker({
      position: academy,
      map: map,
      icon: "./img/map-pin.png"
    });
  }
}

// Form

if(window.location.toString().indexOf("form.html")>0) {
  let form = document.querySelector(".form");
  let formInputs = form.querySelectorAll(".form__input--required");


  for (let formInput of formInputs) {
    if (formInput.hasAttribute("required")) {
      formInput.removeAttribute("required");
    }
  }

  formInputs.forEach((element) => {
    element.addEventListener("input", () => {
      element.classList.remove("form__input--invalid");
    });
  });

  form.addEventListener("submit", function(evt) {
    formInputs.forEach((element) => {
      element.addEventListener("input", (evt) => {
        if (!element.value) {
          evt.preventDefault();
          element.classList.remove("form__input--invalid");
          element.offsetWidth = element.offsetWidth;
          element.classList.add("form__input--invalid");
        }
      });
    });
  });
}

// Slider

const sliderItems = document.querySelectorAll(".slider__item");
const sliderControl = document.querySelector(".slider__check");
const sliderControlRange = document.querySelector(".slider__range");
const beforeElement = document.querySelector(`.js-slider-after`);

sliderControl.addEventListener("click", function() {
  for (const sliderItem of sliderItems) {
    sliderItem.classList.toggle("slider__item--active");
  }
});

sliderControlRange.addEventListener(`input`, () => {
  beforeElement.style.maxWidth = `${Math.abs(sliderControlRange.value)}%`;
});
