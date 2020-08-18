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
  };
});

// Map

function initMap() {
  let academy = {lat: 59.938635, lng: 30.323118};
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
    icon: "../img/map-pin.png"
  });
};

// Slider

let sliderItems = document.querySelectorAll(".slider__item");
let sliderControl = document.querySelector(".slider__check");
let sliderControlRange = document.querySelector(".slider__range")

sliderControl.addEventListener("click", function() {
  for (sliderItem of sliderItems) {
    sliderItem.classList.toggle("slider__item--active");
  };
})

sliderControlRange.addEventListener("input", function() {
  if (sliderControlRange.value < 50) {
    sliderItems[0].classList.add("slider__item--active");
    sliderItems[1].classList.remove("slider__item--active");
  } else if (sliderControlRange.value > 50) {
    sliderItems[1].classList.add("slider__item--active");
    sliderItems[0].classList.remove("slider__item--active");
  }
})
