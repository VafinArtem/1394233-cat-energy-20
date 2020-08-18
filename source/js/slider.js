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
