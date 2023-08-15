"use strict";
let header__image_authorization = document.querySelector(
  ".header__image-authorization"
);

header__image_authorization.addEventListener("click", function () {
  auhtorization.style.display = "flex";
});

// окно авторизации
let auhtorization__conteiner = document.querySelector(
  ".auhtorization__conteiner"
);
let auhtorization__button_entrance = document.querySelector(
  ".auhtorization__button-entrance"
);
let auhtorization__entrance = document.querySelector(
  ".auhtorization__entrance"
);
let auhtorization__entrance_button_regist = document.querySelector(
  ".auhtorization__entrance-button-regist"
);
let auhtorization__exit_button = document.querySelectorAll(
  ".auhtorization__exit-button"
);
let auhtorization = document.querySelector(".auhtorization");

auhtorization__button_entrance.addEventListener("click", function () {
  auhtorization__entrance.style.display = "flex";
  auhtorization__conteiner.style.display = "none";
});
auhtorization__entrance_button_regist.addEventListener("click", function () {
  auhtorization__entrance.style.display = "none";
  auhtorization__conteiner.style.display = "flex";
});

// перебор кнопок закрытия для закрытия окна авторизации
for (let elem of auhtorization__exit_button) {
  elem.addEventListener("click", function () {
    auhtorization.style.display = "none";
  });
}
