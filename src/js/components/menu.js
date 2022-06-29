export const showMenu = () => {
  const menuWrap = document.querySelector('[data-main-nav]');
  menuWrap.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return;
    closeAllsubMenu(event.target.nextElementSibling);
    console.dir(event.target.nextElementSibling);
    event.target.nextElementSibling ? event.target.nextElementSibling.classList.toggle('open-submenu') : '';
    event.target.classList.toggle('active')
  });
};

function closeAllsubMenu(current = null) {
  let parrentsNode = [];
  if(current){
    let currentParent = current.parentNode;
    while(currentParent){
      if(currentParent.classList.contains('navigation__list')) break;
      if(currentParent.nodeName === 'UL') parrentsNode.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }
  const subMenuAll = document.querySelectorAll('.menu .menu');
  Array.from(subMenuAll).forEach(item => {
    (item != current && !parrentsNode.includes(item)) ? item.classList.remove('open-submenu'): '';
  })
}