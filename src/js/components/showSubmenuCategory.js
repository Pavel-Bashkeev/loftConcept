const menuCategoryItems = document.querySelectorAll(".menu-category__item");
const menuCategoryListAll = document.querySelectorAll(".menu-category__list");
const menuCategoryListInListHidden = document.querySelectorAll(".menu-category__list-hidden .menu-category__item");

export const showSubmenuCategory = () => {
  menuCategoryItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const bodyClientWidth = () => document.body.clientWidth || document.body.scrollWidth || document.body.offsetWidth;
      let itemContext = showList.bind(item);
      bodyClientWidth() > 1200 ? itemContext() : item.removeEventListener("mouseenter", showList);
    });
  });
};

function showList() {
  const menuCategoryLink = this.querySelector(".menu-category__link");
  const menuCategoryList = menuCategoryLink.nextElementSibling;
  for (let i = 0; i < menuCategoryItems.length; i++) {
    menuCategoryItems[i].classList.remove("active");
    menuCategoryListAll[i] ? menuCategoryListAll[i].classList.remove("open") : "";
  }
  this.classList.add("active");
  menuCategoryList ? menuCategoryList.classList.add("open") : "";
  if (!menuCategoryList) {
    this.classList.remove("active");
    return;
  }
  if (menuCategoryList.classList.contains("open")) {
    menuCategoryList.addEventListener("mouseleave", () => {
      menuCategoryList.classList.remove("open");
      this.classList.remove("active");
    });
    this.addEventListener("mouseleave", () => {
      menuCategoryList.classList.remove("open");
      this.classList.remove("active");
    });
  }
}