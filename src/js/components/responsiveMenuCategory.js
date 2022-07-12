const menuCategory = document.querySelector('.menu-category'),
  menuCategoryListVisible = document.querySelector('.menu-category__list-visible'),
  menuCategoryListHidden = document.querySelector('.menu-category__list-hidden'),
  menuCategoryBtn = document.querySelector('[data-menu-category-btn]'),
  menuCategoryBtnCoutn = menuCategoryBtn.querySelector('.main-menu__burger-count');
let breakPoints = [];
export const responsiveMenuCategory = () => {


  function updateMenuList() {
    let menuMainWidth = menuCategoryBtn.classList.contains('hide') ? menuCategory.offsetWidth : menuCategory.offsetWidth - menuCategoryBtn.offsetWidth  + 13;

    let menuVisibleWidth = menuCategoryListVisible.offsetWidth;

    if(menuMainWidth < menuVisibleWidth) {
      breakPoints.push(menuVisibleWidth);
      menuCategoryBtn.classList.remove('hide');
      menuCategoryListHidden.prepend(menuCategoryListVisible.lastChild);
      menuCategoryBtnCoutn.innerText = menuCategoryListHidden.childElementCount;
      updateMenuList();
    } else {
      if(menuMainWidth > breakPoints[breakPoints.length -1]){
        breakPoints.pop();
        menuCategoryListVisible.append(menuCategoryListHidden.firstChild);
        menuCategoryBtnCoutn.innerText = menuCategoryListHidden.childElementCount;
      }
      if(breakPoints.length < 1) {
        menuCategoryBtn.classList.add('hide');
        menuCategoryListHidden.classList.remove('active');
      }
    }
  }
  menuCategoryBtn.addEventListener('click', () => {
    menuCategoryBtn.classList.toggle('active');
    menuCategoryListHidden.classList.toggle('hide');
    setTimeout(()=>{
      menuCategoryListHidden.classList.toggle('open')
    }, 200)
  });
  window.addEventListener('resize', updateMenuList);
  document.body.clientWidth < 1600 ? document.addEventListener("DOMContentLoaded", updateMenuList): '';
}