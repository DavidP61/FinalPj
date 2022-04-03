const main = document.querySelector('#main');
const question = document.querySelector('#question');

function begin() {
  main.style.WebkitAnimation = 'fadeOut 1s';
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    question.style.WebkitAnimation = 'fadeIn 1s';
    question.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      question.style.display = 'block';
    }, 450);
  }, 450);
}
