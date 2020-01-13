

let beforeBtn = document.querySelector(".js-before-cat-btn");
let afterBtn = document.querySelector(".js-after-cat-btn");
let beforeImg = document.querySelector(".example__before");
let afterImg = document.querySelector(".example__after");



beforeBtn.addEventListener('click', function () {
  beforeImg.style.display = "block";
  afterImg.style.display = "none";
});

afterBtn.addEventListener('click', function () {
  beforeImg.style.display = "none";
  afterImg.style.display = "block";
});
