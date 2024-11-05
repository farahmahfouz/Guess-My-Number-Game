/// Generate random number

let privateNumer = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = msg => {
  document.querySelector('.message').textContent = msg;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', () => {
  // const guess = (document.querySelector('.guess').value * 1);
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === privateNumer) {
    document.querySelector('.number').textContent = privateNumer;
    displayMessage('🥳 winner winner');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== privateNumer) {
    displayMessage(guess > privateNumer ? '📉To high' : '📈To Low');
    if (score > 0) {
      score--;
      displayScore(score);
    }
  } else {
    displayMessage('🤦‍♂️ You lose the game');
    document.querySelector('highscore').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  privateNumer = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent= '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = 0;
});
