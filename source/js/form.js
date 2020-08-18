let form = document.querySelector(".form")
let formButton = form.querySelector(".form__button");
let formInputs = form.querySelectorAll(".form__input--required");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function(evt) {
    formInputs[i].classList.remove("form__input--invalid");
  })
}

form.addEventListener("submit", function(evt) {
  for (var i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      evt.preventDefault();
      formInputs[i].classList.remove("form__input--invalid");
      formInputs[i].offsetWidth = formInputs[i].offsetWidth;
      formInputs[i].classList.add("form__input--invalid");
    }
  }
})
