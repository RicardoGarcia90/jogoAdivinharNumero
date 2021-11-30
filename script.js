'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

//PARA NÃO PRECISAR FICAR DIGITANDO 'document.querySelector....' FAÇO UMA FUNÇÃO 'displayMessage' QUE PEGUE TODAS AS MENSAGENS E ALTERE SOMENTE O CONTEÚDO.
const displayMessage = (message) =>{
  document.querySelector('.message').textContent =
      message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

   if ((guess <= 0) | (guess > 20 )) {
    // ERRO se número não está entre 1 e 20
    /*document.querySelector('.message').textContent = '🛑 Escolha números entre 1 e 20.';*/
    //NÃO PRECISO USAR MAIS O querySelector POIS COLOQUEI TODAS AS MENSAGENS DENTRO DA FUNÇÃO 'displayMessage' COM ISSO MUDO SOMENTE O CONTEÚDO ('🛑 Escolha números entre 1 e 20.')
    displayMessage ('🛑 Escolha números entre 1 e 20.');

    //Vence
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //CÓDIGO REFATORADO, JÁ QUE OS DOIS BLOCOS SÃO PARECIDOS E SÓ MUDA A MENSAGEM 'TO HIGH' 'TO LOW' NESSE CASO A CONDIÇÃO QUE COLOCAMOS SERÁ ('Quando o chute for diferente '!==' do número secreto)
    //Quando o chute é errado
  } else if (guess !== secretNumber){
      if (score > 1) {
        //equanto score for maior que zero continua os chutes
        /* document.querySelector('.message').textContent = guess > secretNumber ? '📈 To high!' : '📉 To low!'; */
        displayMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
        score--; // score = score - 1
        document.querySelector('.score').textContent = score;
      } else {
        //quando score for zero perde o jogo
        /* document.querySelector('.message').textContent = '💥💥YOU LOST THE GAME'; */
        displayMessage('💥💥YOU LOST THE GAME');
        document.querySelector('.score').textContent = 0;
      }
    }


    //CÓDIGO ANTES DA REFATORAÇÃO, REPARE COMO AS DUAS SITUAÇÕES DE CHTE MAIOR OU MENOR SAO IGUAIS, COM ISSO PODEMOS UNIFICAR (REFATORAR) EM UM ÚNICO BLOCO DE CÓDIGO.
 /*    //Quando o chute for MAIOR
  } else if (guess > secretNumber) {
    if (score > 1) {
      //equanto score for maior que zero continua os chutes
      document.querySelector('.message').textContent = '📈 To high!';
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      //quando score for zero perde o jogo
      document.querySelector('.message').textContent = '💥💥YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }

    //Quando o chute for MENOR
  } else if (guess < secretNumber) {
    if (score > 1) {
      //equanto score for maior que zero continua os chutes
      document.querySelector('.message').textContent = '📉 To low!';
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      //quando score for zero perde o jogo
      document.querySelector('.message').textContent = '💥💥YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

// Botão Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  /* document.querySelector('.message').textContent = 'Start guessing...'; */
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
