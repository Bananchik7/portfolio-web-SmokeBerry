"use strict";

let all_product;

// // Добавление всех товаров
// let all_product = document.querySelectorAll('[data-product-id^="product"]');

// // Выбираем кнопку из карточки товара
// all_product.forEach(function (one_product) {
//   let button_product = one_product.querySelector(".catalog__product-button");

//   button_product.addEventListener("click", function () {
//     basket__conteiner_none.style.display = "none";

//     // создание основного див с элементами товара
//     let basket__conteiner_conteiner = document.querySelector(
//       ".basket__conteiner-conteiner"
//     );
//     let basket__conteiner_shop = document.createElement("div");
//     basket__conteiner_shop.className = "basket__conteiner-shop";
//     basket__conteiner_conteiner.appendChild(basket__conteiner_shop);

//     //создание внутренних дивов с элементами товара
//     let basket__shop_image = document.createElement("img");
//     let basket__shop_name = document.createElement("div");
//     let basket__shop_quantity = document.createElement("div");
//     let basket__shop_price = document.createElement("div");
//     let basket__shop_cross = document.createElement("img");

//     basket__shop_image.className = "basket__shop-image";
//     basket__shop_name.className = "basket__shop-name";
//     basket__shop_quantity.className = "basket__shop-quantity";
//     basket__shop_price.className = "basket__shop-price";
//     basket__shop_cross.className = "basket__shop-cross";

//     basket__conteiner_shop.appendChild(basket__shop_image);
//     basket__conteiner_shop.appendChild(basket__shop_name);
//     basket__conteiner_shop.appendChild(basket__shop_quantity);
//     basket__conteiner_shop.appendChild(basket__shop_price);
//     basket__conteiner_shop.appendChild(basket__shop_cross);

//     basket__shop_image.src = one_product.querySelector("img").src;
//     basket__shop_name.textContent = one_product.querySelector(
//       ".catalog__product-title"
//     ).textContent;
//     basket__shop_quantity.textContent = "1";
//     basket__shop_price.textContent = one_product.querySelector(
//       ".catalog__product-price"
//     ).textContent;
//     basket__shop_cross.src = basket__title_exit.src;

//     // удаление позиции в корзине
//     basket__shop_cross.addEventListener("click", function () {
//       if (basket__conteiner_conteiner.children.length > 0) {
//         basket__conteiner_shop.remove();
//       }
//       if (basket__conteiner_conteiner.children.length == 0) {
//         basket__conteiner_shop.remove();
//         basket__conteiner_none.style.display = "block";
//         basket__summ_number.textContent = "0 руб";
//       }
//     });
//     basket__button_clear.addEventListener("click", function () {
//       basket__conteiner_shop.remove();
//       basket__conteiner_none.style.display = "block";
//       basket__summ_number.textContent = "0 руб";
//     });

//     let basket__summ_number = document.querySelector(".basket__summ-number");

//     basket__summ_number.textContent =
//       Number(basket__summ_number.textContent) +
//       Number(basket__shop_price.textContent);
//   });
// });
