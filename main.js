import { todayDeals } from "./todaydeals.js";

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

/*Today Deals*/
let todayDealsProductListEl = document.querySelector(
  ".today_deals_product_list"
);
// console.log(todayDealProductListEl);

let todayDealsProductHTML = "";
let todayDealsLength = todayDeals.length;

for (let i = 0; i < todayDealsLength; i++) {
  // console.log(todayDeals[i]);

  todayDealsProductHTML += `
    <div class="today_deals_product_item">
      <img
        src=${todayDeals[i].img}
      />
      <div class="discount_container">
        <a href="#">Up to ${todayDeals[i].discount}% off</a>
        <a href="#">${todayDeals[i].DealOfDay}</a>
      </div>
      <p>${todayDeals[i].desc}</p>
    </div>
  `;
}

todayDealsProductListEl.innerHTML = todayDealsProductHTML;
// console.log(todayDealProductHTML);

let today_deals_btn_prevEl = document.getElementById("today_deals_btn_prev");
let today_deals_btn_nextEl = document.getElementById("today_deals_btn_next");
let today_deals_product_itemEl = document.querySelectorAll(
  ".today_deals_product_item"
);

let startProduct = 0;

today_deals_btn_prevEl.addEventListener("click", () => {
  if (startProduct < 0) {
    startProduct += 500;
  }
  if (startProduct > -2000) {
    today_deals_product_itemEl.forEach((el) => {
      el.style.transform = `translateX(${startProduct}%)`;
    });
  }
});

today_deals_btn_nextEl.addEventListener("click", () => {
  if (startProduct > -1500) {
    startProduct -= 500;
  }
  today_deals_product_itemEl.forEach((el) => {
    el.style.transform = `translateX(${startProduct}%)`;
  });
});
