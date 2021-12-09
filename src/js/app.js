const button = document.querySelector('.toggle-button');
const collapse = document.querySelector('.collapse-element');

button.addEventListener('click', () => {
  collapse.classList.toggle('active');
});
