const cartLinks = document.querySelectorAll(".popular__buy");
const cartPopup = document.querySelector(".popup-cart");
const cartClose = cartPopup.querySelector(".popup__close");

for (let cartLink of cartLinks) {
  cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("popup-show");
  });
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (cartPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("popup-show");
    }
  }
});

const writeusLink = document.querySelector(".button-writeus");
const writeusPopup = document.querySelector(".popup-writeus");
const writeusClose = writeusPopup.querySelector(".popup__close");
const writeusForm = writeusPopup.querySelector(".popup-writeus__form");
const writeusName = writeusPopup.querySelector(".popup-writeus__input-name");
const writeusEmail = writeusPopup.querySelector(".popup-writeus__input-email");
const writeusText = writeusPopup.querySelector(".popup-writeus__input-text");

writeusLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.add("popup-show");
  writeusName.focus();
});

writeusClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.remove("popup-show");
  writeusPopup.classList.remove("popup-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (writeusPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      writeusPopup.classList.remove("popup-show");
      writeusPopup.classList.remove("popup-error");
    }
  }
});

writeusForm.addEventListener("submit", function(evt) {
  if (!writeusName.value || !writeusEmail.value ||!writeusText.value) {
    evt.preventDefault();
    writeusPopup.classList.remove("popup-error");
    writeusPopup.offsetWidth = writeusPopup.offsetWidth;
    writeusPopup.classList.add("popup-error");
  }
});

const mapLink = document.querySelector(".contacts__map");
const mapPopup = document.querySelector(".popup-map");
const mapClose = mapPopup.querySelector(".popup__close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    }
  }
});
