let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length - 1);

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;
slideBtnLeft.addEventListener("click", () => {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
});

slideBtnRight.addEventListener("click", () => {
  if (startSlider > -endSlider) {
    startSlider = startSlider - 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
});
