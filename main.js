let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length - 1);

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

function handleLeftBtn() {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

function handleRightBtn() {
  {
    if (startSlider > -endSlider) {
      startSlider = startSlider - 100;
    }
    imgItem.forEach((element) => {
      element.style.transform = `translateX(${startSlider}%)`;
    });
  }
}

slideBtnLeft.addEventListener("click", handleLeftBtn);
slideBtnRight.addEventListener("click", handleRightBtn);

//render automatic
function renderSlideAuto() {
  if (startSlider > -endSlider) handleRightBtn();
  else {
    startSlider = 0;
  }
}
setInterval(renderSlideAuto, 7000);

/* Sidebar Navigation  */

const sidebarNavigationEl = document.getElementById(
  "sidebar-container-navigation"
);
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById(
  "sidebar-navigation-close"
);
sidebarOpenNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("sidebar-show");
});

sidebarCloseNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("sidebar-show");
});
