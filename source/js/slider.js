let sliderItems = document.querySelectorAll(".slider__item");
let sliderControl = document.querySelector(".slider__check");

sliderControl.addEventListener("click", function() {
  for (sliderItem of sliderItems) {
    sliderItem.classList.toggle("slider__item--active");
  };
})
