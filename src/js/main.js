import '../index.html';
import '../scss/main.scss';


import documentReady from './modules/documentReady.js';
import { showMenu } from './components/menu.js';
import { showSearch } from './components/showSearch.js';
// import lazyImages from './modules/lazyImages.js';
// import * as webpSupportFunctions from './modules/webpSupport.js';
// import linkSmooth from './helpers/linkSmooth.js';
// import {Modal} from './plugins/plugModal.js';

documentReady(() => {
  console.log('ready');
  showMenu();
  showSearch();
  // linkSmooth();
  // lazyImages();
  // webpSupportFunctions.isWebp();
	// const modal = new Modal({
	// 	isOpen: ()=>{}
	// });
})