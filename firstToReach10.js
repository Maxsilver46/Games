function fancyNumbers(input) {
  switch (input) {
    case 1:
      return '   ⬜️\n⬜️ ⬜️\n   ⬜️\n   ⬜️\n⬜️⬜️⬜️⬜️';

    case 2:
      return '🟧🟧️🟧️🟧️\n      🟧️\n🟧️🟧️🟧️🟧️\n🟧️\n🟧️🟧️🟧️🟧️';

    case 3:
      return '🟨🟨🟨🟨\n      🟨\n🟨🟨🟨🟨\n      🟨\n🟨🟨🟨🟨';

    case 4:
      return '🟥    🟥\n🟥    🟥\n🟥🟥🟥🟥\n      🟥\n      🟥';

    case 5:
      return '🟦🟦🟦🟦\n🟦\n🟦🟦🟦🟦\n      🟦\n🟦🟦🟦🟦';

    case 6:
      return '🟩🟩🟩🟩\n🟩\n🟩🟩🟩🟩\n🟩    🟩\n🟩🟩🟩🟩';

    case 7:
      return '       ⬜️\n    ⬜️ ⬜️\n▫️▫️▫️    ⬜️\n       ⬜️\n    ⬜️⬜️⬜️⬜️';

    case 8:
      return '     🟧🟧️🟧️🟧️\n           🟧️\n▫️▫️▫️  🟧️🟧️🟧️🟧️\n     🟧️\n     🟧️🟧️🟧️🟧️';
  }
}

function delay(limit) {
  for (let index = 0; index < limit * 1000000; index++);
}

function rollingDiceAnimation(rolledValue) {
  delay(400);
  console.clear();

  console.log("\n\nrolling dice 🎲: \n\n\n" + fancyNumbers(rolledValue));

  return rolledValue;
}

function rollDice() {
  let rolledValue = 0;

  for (let index = 0; index < 12; index++) {
    rolledValue = Math.ceil(Math.random() * 8);
    rollingDiceAnimation(rolledValue);
  }

  return rolledValue > 6 ? -(rolledValue % 6) : rolledValue;
}

function scoreBoard(playerOne, playerOneScore, playerTwo, playerTwoScore) {
  console.log("\n" + playerOne + "'s score : " + playerOneScore);
  console.log("\n" + playerTwo + "'s score : " + playerTwoScore + "\n");
}

function getScore(playerName, playerScore) {
  const score = rollDice();
  console.log("\n" + playerName + " you've got " + score);

  const isScoreZero = playerScore === 0 && score < 0;

  if (playerScore + score <= 10 && !isScoreZero) {
    return playerScore + score;
  }

  return playerScore;
}

function isQuit(playerName) {
  const isQuit = prompt(playerName + ' roll dice ');

  return isQuit === 'q';
}

function getPlayer(playerNumber) {
  let playerName = prompt("Enter Player " + playerNumber + " Name : ");

  if (playerName === '') {
    playerName = 'Player ' + playerNumber;
  }

  return playerName;
}

function greetMessage() {
  console.log('\nGreetings...\n\nThis is a two Player Game "First To Reach 10", 10 means Exact 10,');
  console.log(" you will not win unless you get an exact 10, Each");
  console.log("player will roll the dice and the first to reach 10 wins ");
  console.log("\nInstructions : \nPress Enter to roll the dice");
  console.log("type 'q' anytime you want to quit the game");
  console.log("\n warning!! negative numbers are also there, and don't worry if your score is 0");
  console.log(" and you got a negative number your score won't go down,\n Good Luck......\n");
}

//main function
function firstToReach10() {
  const playerOne = getPlayer('One');
  const playerTwo = getPlayer('Two');

  console.log();

  let playerOneScore = 0;
  let playerTwoScore = 0;

  while (playerTwoScore < 10) {
    if (isQuit(playerOne)) {
      return playerTwo;
    }

    playerOneScore = getScore(playerOne, playerOneScore);
    scoreBoard(playerOne, playerOneScore, playerTwo, playerTwoScore);

    if (playerOneScore === 10 || isQuit(playerTwo)) {
      return playerOne;
    }

    playerTwoScore = getScore(playerTwo, playerTwoScore);
    scoreBoard(playerOne, playerOneScore, playerTwo, playerTwoScore);
  }

  return playerTwo;
}

greetMessage();

const winner = firstToReach10();

console.log('\n Hey ' + winner + ' you dropped this 👑 ');
console.log('\n 🥳🥳WHOOO..."' + winner + '" is the WINNER 🥳🎉🎊\n');
