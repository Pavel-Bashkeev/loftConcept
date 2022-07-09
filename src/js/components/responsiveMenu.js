export const responsiveMenu = () => {
  let visibleMenu = document.querySelector('.menu-character__list'),
    navCharacter = document.querySelector('.menu-character'),
    hideMenu = document.querySelector('.menu-character__list-hidden'),
    burgerMenuBtn = document.querySelector('.menu-character__burger'),
    burgerMenuCount = document.querySelector('.menu-character__burger-count'),
    breaks = [];
  function updateMenu  () {
    if(navCharacter.offsetWidth === 0) return;
    let navCharacterWidth = burgerMenuBtn.classList.contains('hide') ? navCharacter.offsetWidth : navCharacter.offsetWidth - burgerMenuBtn.offsetWidth ;

    let visibleMenuWidth = visibleMenu.offsetWidth + 10;
    if(navCharacterWidth < visibleMenuWidth){
      breaks.push(visibleMenuWidth);
      hideMenu.prepend(visibleMenu.lastChild);
      burgerMenuBtn.classList.remove('hide');
      burgerMenuCount.innerHTML = breaks.length;
      updateMenu()
    } else{
    }
  }
  burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('active');
    hideMenu.classList.toggle('hide');
    setTimeout(()=>{
      hideMenu.classList.toggle('active');
    },300)
  });
  window.addEventListener('resize', updateMenu);
  document.addEventListener('DOMContentLoaded', updateMenu);
}