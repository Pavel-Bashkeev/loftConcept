const characterBtns = document.querySelectorAll(".menu-character__btn");

export const showMenuCharacter = () => {
  console.dir(window.outerWidth, window.innerWidth)
  characterBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const characterMenu = item.nextElementSibling;
      const characterSubmenu = characterMenu.querySelector(".submenu-category");
      const characterSubmenuLinks = characterMenu.querySelectorAll(
        ".submenu-character__link"
      );
      item.classList.add("menu-character__btn--active");
      characterMenu.style.display = 'flex';
      setTimeout(()=>{
        characterMenu.classList.add("submenu-character--show");
      }, 300)
      if(window.innerWidth < (characterMenu.getBoundingClientRect().left + characterMenu.clientWidth)){
        characterMenu.style.right = '10%';
      }
      characterSubmenuLinks.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          for (let i = 0; i < characterSubmenuLinks.length; i++) {
            characterSubmenuLinks[i].classList.remove("active");
          }
          if (item.nextElementSibling) {
            item.classList.add("active");
            item.nextElementSibling.style.display = "block";
            if(window.innerWidth - 100 <= (item.nextElementSibling.getBoundingClientRect().left + item.nextElementSibling.scrollWidth)){
              item.nextElementSibling.style.right = '120%';
              item.nextElementSibling.style.left = 'auto';
            }
            setTimeout(() => {
              item.nextElementSibling.classList.add("submenu-category--show");
            }, 300);
          }
        });
      });
    });
  });
};
