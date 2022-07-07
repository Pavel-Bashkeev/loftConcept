export const showAddServicesWindow = () => {
  const addServicesBtn = document.querySelector('.product-addservice__btn');
  const addServicesBox = document.querySelector('.product-addservice__box');

  addServicesBtn.addEventListener('click', () => {
    addServicesBox.classList.toggle('open');
  })
}