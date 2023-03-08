const linkHome = 'https://hiagonobre.github.io/';

const linkToHome = document.querySelector('.link-to-home');

linkToHome.addEventListner('click', () => {
  window.locale.href = 'https://hiagonobre.github.io/';
});
