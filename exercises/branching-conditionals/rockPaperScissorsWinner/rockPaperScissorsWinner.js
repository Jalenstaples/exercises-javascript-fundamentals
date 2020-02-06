/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
let readlineSync = require('readline-sync');
console.log('Welcome to Rock, Paper, Scissors!');
console.log('For selection: Rock = 2 | Paper = 1 | Scissors = 0');
let user1 = readlineSync.question('What is your choice?');
let user2 = Math.floor(Math.random() * 3);
console.log(user2);
let arr = [user1, user2];
console.log(arr);
console.log(rockPaperScissorsWinner(arr));

function rockPaperScissorsWinner(array) {
  let reuslt1 = 'Congrats,You Win!';
  let result2 = 'Sorry,You Lose!';
  let result3 = 'Tie!';

  if (array[0] === '0' && array[1] === 0) {
    return result3;
  }
  if (array[0] === '0' && array[1] === 1) {
    return reuslt1;
  }
  if (array[0] === '0' && array[1] === 2) {
    return result2;
  }

  if (array[0] === '1' && array[1] === 0) {
    return result2;
  }
  if (array[0] === '1' && array[1] === 1) {
    return result3;
  }
  if (array[0] === '1' && array[1] === 2) {
    return reuslt1;
  }

  if (array[0] === '2' && array[1] === 0) {
    return reuslt1;
  }
  if (array[0] === '2' && array[1] === 1) {
    return result2;
  }
  if (array[0] === '2' && array[1] === 2) {
    return result3;
  }
}

if (require.main === module) {

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = rockPaperScissorsWinner;
