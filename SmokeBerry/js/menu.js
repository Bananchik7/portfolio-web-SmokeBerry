"use strict";

let main__catalog_all = document.querySelector(".main__catalog-all");
// let main__pod_systemy = document.querySelector(".main__pod-systemy");
// let main__electronnye_sigarety = document.querySelector(
//   ".main__electronnye-sigarety"
// );
let main__odnorazovye_sigarety = document.querySelector(
  ".main__odnorazovye-sigarety"
);
let main__zhidkosty = document.querySelector(".main__zhidkosty");
let main__katridgy = document.querySelector(".main__katridgy");
let main__isparitely = document.querySelector(".main__isparitely");

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

main__odnorazovye_sigarety.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "flex";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_all.style.display = "none";
});
main__zhidkosty.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "flex";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_all.style.display = "none";
});
main__katridgy.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "flex";
  main__catalog_isparitely.style.display = "none";
  main__catalog_all.style.display = "none";
});
main__isparitely.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "flex";
  main__catalog_all.style.display = "none";
});
