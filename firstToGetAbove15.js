function fancyNumbers(input) {
  switch (input) {
    case 1:
      return '   ╭──╮\n   │  │\n   │  │\n   │  │\n   │  │\n   ╰──╯\n';

    case 2:
      return '╭────────╮\n╰──────╮ │\n╭──────╯ │\n│ ╭──────╯\n│ ╰──────╮\n╰────────╯\n';

    case 3:
      return '╭────────╮\n╰──────╮ │\n╭──────╯ │\n╰──────╮ │\n╭──────╯ │\n╰────────╯\n';

    case 4:
      return '╭──╮  ╭──╮\n│  │  │  │\n│  ╰──╯  │\n╰─────╮  │\n      │  │\n      ╰──╯\n';

    case 5:
      return '╭────────╮\n│ ╭──────╯\n│ ╰──────╮\n╰──────╮ │\n╭──────╯ │\n╰────────╯\n';

    case 6:
      return '╭────────╮\n│ ╭──────╯\n│ ╰──────╮\n│ ╭────╮ │\n│ ╰────╯ │\n╰────────╯\n';
  }
}

function delay(limit) {
  for (let index = 0; index < limit * 1000000; index++);
}

function rollingDiceAnimation(rolledValue) {
  delay(400);
  console.clear();

  console.log("\n\nrolling dice 🎲: \n\n\n" + fancyNumbers(rolledValue));
}

function rollDice() {
  let rolledValue = 0;

  for (let index = 0; index < 15; index++) {
    rolledValue = Math.ceil(Math.random() * 6);

    rollingDiceAnimation(rolledValue);
  }

  return rolledValue;
}

function scoreMessage(input, playerName) {
  switch (input) {
    case 1:
      return "\n💔 bad luck " + playerName + " you got 1 🥲😭";

    case 2:
      return "\nNot that bad " + playerName + " you've got 2 😅";

    case 3:
      return "\nA nice throw " + playerName + " you've got " + input + "👏🏻";

    case 4:
      return "\nHhooo ✨ " + playerName + " you've got 4";

    case 5:
      return "\n🥳 Cool " + playerName + " you've got 5 🫡";

    case 6:
      return "\nWoah 😲🤩🤩" + playerName + " you're lucky..you got a 6!💥";
  }
}

function scoreBoard(playerOne, playerOneScore, playerTwo, playerTwoScore) {
  console.log("\n" + playerOne + "'s score : " + playerOneScore);
  console.log("\n" + playerTwo + "'s score : " + playerTwoScore + "\n");
}

function getScore(playerName, playerScore) {
  const score = rollDice();
  console.log('\n' + scoreMessage(score, playerName));

  return playerScore + score;
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
  console.log('\nGreetings...\n\nThis is a two Player Game "First To Reach 15", Each ');
  console.log("player will roll the dice and the first to reach 15 wins ");
  console.log("\nInstructions : \nPress Enter to roll the dice");
  console.log("\ntype 'q' anytime you want to quit the game\n");
}

//Game start

function firstToGetAbove15() {
  const playerOne = getPlayer('One');
  const playerTwo = getPlayer('Two');

  console.log();

  let playerOneScore = 0;
  let playerTwoScore = 0;

  while (playerTwoScore < 16) {
    if (isQuit(playerOne)) {
      return playerTwo;
    }

    playerOneScore = getScore(playerOne, playerOneScore);
    scoreBoard(playerOne, playerOneScore, playerTwo, playerTwoScore);

    if (playerOneScore > 15 || isQuit(playerTwo)) {
      return playerOne;
    }

    playerTwoScore = getScore(playerTwo, playerTwoScore);
    scoreBoard(playerOne, playerOneScore, playerTwo, playerTwoScore);
  }

  return playerTwo;
}

greetMessage();

const winner = firstToGetAbove15();

console.log('\n Hey ' + winner + ' you dropped this 👑 ');
console.log('\n 🥳🥳WHOOO..."' + winner + '" is the WINNER 🥳🎉🎊\n');
