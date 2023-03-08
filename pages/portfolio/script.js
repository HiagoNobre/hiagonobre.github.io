const linkHome = 'https://hiagonobre.github.io/';

const linkToHome = document.querySelectorAll('.link-to-home');

for (const home of linkToHome) {
  home.addEventListener('click', () => {
    window.location.href = 'https://hiagonobre.github.io/';
  });
}
