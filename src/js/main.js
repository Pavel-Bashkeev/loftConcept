import '../index.html';
import '../scss/main.scss';


import documentReady from './modules/documentReady.js';
import { showMenu } from './components/menu.js';
import { showSearch } from './components/showSearch.js';
import lazyImages from './modules/lazyImages.js';
import { choiceViewCatalog } from './components/choiceViewCatalog.js';
import { showMenuCharacter } from './components/showMenuCharacter.js';
import { choicePproductPrivew } from './components/choice.ProductPreview.js';
// import { headerShowScrolling } from './components/headerShowScroll.js';
// import * as webpSupportFunctions from './modules/webpSupport.js';
// import linkSmooth from './helpers/linkSmooth.js';
import {Modal} from './plugins/plugModal.js';
import { showAddServicesWindow } from "./components/showAddServicesWindow.js";

documentReady(() => {
  console.log('ready');
  showMenu();
  showSearch();
  lazyImages();
  showMenuCharacter();
  document.querySelector(".subcategory-content") ? choiceViewCatalog() : '';
  document.querySelector('.product-preview__img') ? choicePproductPrivew() : '';
  showAddServicesWindow();

  // linkSmooth();

 
  // webpSupportFunctions.isWebp();
	const modal = new Modal({
		isOpen: ()=>{}
	});
})

// headerShowScrolling(); нужно доделать