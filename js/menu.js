"use strict";

let main__pod_systemy = document.querySelector(".main__pod-systemy");
let main__electronnye_sigarety = document.querySelector(
  ".main__electronnye-sigarety"
);
let main__odnorazovye_sigarety = document.querySelector(
  ".main__odnorazovye-sigarety"
);
let main__zhidkosty = document.querySelector(".main__zhidkosty");
let main__katridgy = document.querySelector(".main__katridgy");
let main__isparitely = document.querySelector(".main__isparitely");

let main__catalog_pod_systemy = document.querySelector(
  ".main__catalog-pod-systemy"
);
let main__catalog_electronnye_sigarety = document.querySelector(
  ".main__catalog-electronnye-sigarety"
);
let main__catalog_odnorazovye_sigarety = document.querySelector(
  ".main__catalog-odnorazovye-sigarety"
);
let main__catalog_zhidkosty = document.querySelector(
  ".main__catalog-zhidkosty"
);
let main__catalog_katridgy = document.querySelector(".main__catalog-katridgy");
let main__catalog_isparitely = document.querySelector(
  ".main__catalog-isparitely"
);

main__electronnye_sigarety.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";

  main__catalog_electronnye_sigarety.style.display = "flex";
  main__catalog_pod_systemy.style.display = "none";
});
main__odnorazovye_sigarety.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "flex";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__zhidkosty.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "flex";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__katridgy.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "flex";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__isparitely.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "flex";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__pod_systemy.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "flex";
});

// открытие корзины
let basket = document.querySelector(".basket");
let btn = document.querySelector(".header__image-basket");
let span = document.querySelector(".close");
btn.onclick = function () {
  basket.style.display = "flex";
};
span.onclick = function () {
  basket.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == basket) {
    basket.style.display = "none";
  }
};
