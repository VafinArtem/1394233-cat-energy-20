let sliderItem = document.querySelectorAll(".slider__item");
let sliderControl = document.querySelector(".slider__check");

sliderControl.addEventListener("click", function() {
  let currentItem = document.querySelector(".slider__item--active");
  sliderItem[0].classList.toggle("slider__item--active");
  sliderItem[1].classList.toggle("slider__item--active");
})
