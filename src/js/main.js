import '../index.html';
import '../scss/main.scss';


import documentReady from './modules/documentReady.js';
import { showMenu } from './components/menu.js';
import { showSearch } from './components/showSearch.js';
import lazyImages from './modules/lazyImages.js';
import { choiceViewCatalog } from './components/choiceViewCatalog.js';
import { showMenuCharacter } from './components/showMenuCharacter.js';
import { choicePproductPrivew } from './components/choiceProductPreview.js';
// import { headerShowScrolling } from './components/headerShowScroll.js';
// import * as webpSupportFunctions from './modules/webpSupport.js';
// import linkSmooth from './helpers/linkSmooth.js';
import {Modal} from './plugins/plugModal.js';
import { showAddServicesWindow } from "./components/showAddServicesWindow.js";
import { sliderProdAnother } from "./components/sliderProductAnother.js";
import { responsiveMenuCharacter } from "./components/responsiveMenuCharacter.js";
import { responsiveMenuCategory } from "./components/responsiveMenuCategory.js";
import { titleUpdateLength } from "./components/titleUpdateLength.js";
import { showSubmenuCategory } from "./components/showSubmenuCategory.js";

documentReady(() => {
  const menuCategory = document.querySelector('.menu-category'),
    menuCategoryListVisible = document.querySelector('.menu-category__list-visible'),
    menuCategoryListHidden = document.querySelector('.menu-category__list-hidden'),
    menuCategoryBtn = document.querySelector('[data-menu-category-btn]'),
    menuCategoryBtnCoutn = menuCategoryBtn.querySelector('.main-menu__burger-count');
  let breakPoints = [];

  /* Main */
  showMenu();
  showSearch();
  lazyImages();
  showMenuCharacter();
  showSubmenuCategory();
  responsiveMenuCharacter();
  responsiveMenuCategory();
  showAddServicesWindow();
 /* Main */

  /* Card */
  document.querySelector('.card-product') ? titleUpdateLength(): '';
  /* Card */
  /* sliderProdAnother */
  sliderProdAnother();
  /* sliderProdAnother */
  /* Catalog */
  document.querySelector(".subcategory-content") ? choiceViewCatalog() : '';
  document.querySelector('.product-preview__img') ? choicePproductPrivew() : '';
  /* Catalog */



	const modal = new Modal({
		isOpen: ()=>{}
	});

  function updateMenuList() {
    let menuMainWidth = menuCategoryBtn.classList.contains('hide') ? menuCategory.offsetWidth : menuCategory.offsetWidth - menuCategoryBtn.offsetWidth  + 13;

    let menuVisibleWidth = menuCategoryListVisible.offsetWidth;

    if(menuMainWidth < menuVisibleWidth) {
      breakPoints.push(menuVisibleWidth);
      menuCategoryBtn.classList.remove('hide');
      menuCategoryListHidden.prepend(menuCategoryListVisible.lastChild);
      menuCategoryBtnCoutn.innerText = breakPoints.length;
      updateMenuList();
    } else {
      if(menuMainWidth > breakPoints[breakPoints.length -1]){
        breakPoints.pop();
        menuCategoryListVisible.append(menuCategoryListHidden.firstChild);
        menuCategoryBtnCoutn.innerText = breakPoints.length;
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
  })
  window.addEventListener('resize', updateMenuList);
  document.addEventListener("DOMContentLoaded", updateMenuList);
});
// linkSmooth();


// webpSupportFunctions.isWebp();
// headerShowScrolling(); нужно доделать