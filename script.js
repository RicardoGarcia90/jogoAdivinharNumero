'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if ((guess <= 0) | (guess > 20)) {
    displayMessage('🛑 Escolha números entre 1 e 20.');

    //Vence
  } else if (guess === secretNumber) {
    displayMessage('Parabéns! Número correto!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.mainContainer').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Quando o chute é errado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Muito Alto!' : '📉 Muito baixo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥💥GAME OVER!!! Seus pontos acabaram.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Botão Jogar novamente
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.mainContainer').style.backgroundColor = '#fe4f00';
  displayMessage('Seu chute foi...');
  // document.querySelector('.number').style.width = '15rem';
});
