const characterBtns = document.querySelectorAll(".menu-character__btn");
const characterSubmenuAll = document.querySelectorAll('.menu-character__submenu');
const submenuCategoryAll = document.querySelectorAll('.submenu-category');
export const showMenuCharacter = () => {
  characterBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const characterMenu = item.nextElementSibling;
      if(!characterMenu) return;
      const characterSubmenu = characterMenu.querySelector(".submenu-category");
      const characterSubmenuLinks = characterMenu.querySelectorAll(
        ".submenu-character__link"
      );
      if(!item.classList.contains('menu-character__btn--active')){
        for(let i = 0; i < characterBtns.length;i++){
          characterBtns[i].classList.remove("menu-character__btn--active");
        }
        for(let i =0; i<characterSubmenuAll.length; i++){
          characterSubmenuAll[i].classList.remove('submenu-character--show')
        }
      }
      item.classList.toggle("menu-character__btn--active");


      characterMenu.style.display = 'flex';
      setTimeout(()=>{
        characterMenu.classList.toggle("submenu-character--show");
      }, 100);

      //---- Проверка на выход за пределы экрана
      if(window.innerWidth < (characterMenu.getBoundingClientRect().left + characterMenu.clientWidth)){
        characterMenu.style.right = '10%';
      }
      //---- Проверка на выход за пределы экрана

      characterSubmenuLinks.forEach((item) => {
        item.addEventListener("mouseover", (event) => {
          for (let i = 0; i < characterSubmenuLinks.length; i++) {
            characterSubmenuLinks[i].classList.remove("active");
          }
          for (let i =0;i< submenuCategoryAll.length;i++){
            submenuCategoryAll[i].classList.remove("submenu-category--show");
          }
            if (item.nextElementSibling) {
              item.classList.add("active");
              item.nextElementSibling.style.display = "block";
              console.log(item.nextElementSibling.getBoundingClientRect().right )
              console.log(item.nextElementSibling.clientWidth)
              console.log(window.innerWidth);
              if(window.innerWidth < (item.nextElementSibling.getBoundingClientRect().right + item.nextElementSibling.clientWidth)){
                item.nextElementSibling.style.right = '100%';
                item.nextElementSibling.style.left = 'auto';
                console.log('right position')
              }
              item.nextElementSibling.classList.add("submenu-category--show");

            }
        });
      });
      characterMenu.addEventListener('mouseleave', (event) => {
        if(event.target.classList.contains('submenu-character')) {
          characterMenu.classList.remove('submenu-character--show')
          characterSubmenu.classList.remove('submenu-category--show')
          for (let i = 0; i < characterBtns.length; i++) {
            characterBtns[i].classList.remove("menu-character__btn--active");
          }
          for (let i = 0; i < characterSubmenuLinks.length; i++) {
            characterSubmenuLinks[i].classList.remove("active");
          }
        }
      })
    });
  });
};
