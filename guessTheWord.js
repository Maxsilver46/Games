function guessStatus(didWin, word) {
  let message = '\nOops.. Your guess was wrong, the word is : ';

  if (didWin) {
    message = '\n🥳🤩Congrats you guessed the correct Word 🎊 : ';
  }

  return message + word;
}

function isNumberUnique(randomIndex, number) {
  for (let index = 0; index < randomIndex.length; index++) {
    if (number === +randomIndex[index]) {
      return false;
    }
  }

  return true;
}

function randomNumber(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

function getUniqueNumber(word) {
  let randomIndex = '';

  while (randomIndex.length < word.length) {
    const number = randomNumber(0, word.length);

    if (isNumberUnique(randomIndex, number)) {
      randomIndex += number;
    }
  }

  return randomIndex;
}

function scrambleWord(word) {
  let scrambledWord = '';
  const shufffedIndex = getUniqueNumber(word);

  for (let index = 0; index < shufffedIndex.length; index++) {
    const randomIndex = shufffedIndex[index]
    scrambledWord += word[randomIndex];
  }

  return scrambledWord;
}

function easyMode(wordIndex) {
  switch (wordIndex) {
    case 1:
      return 'Dragon';
    case 2:
      return 'Orbit';
    case 3:
      return 'System';
    case 4:
      return 'Season';
  }
}

function mediumMode(wordIndex) {
  switch (wordIndex) {
    case 1:
      return 'Cipher';
    case 2:
      return 'Glitch';
    case 3:
      return 'Frosty';
    case 4:
      return 'Kindness';
  }
}

function hardMode(wordIndex) {
  switch (wordIndex) {
    case 1:
      return 'embark';
    case 2:
      return 'nebula';
    case 3:
      return 'planetary';
    case 4:
      return 'mirage';
  }
}

function getWord(level, wordIndex) {
  switch (level) {
    case 1:
      return easyMode(wordIndex);
    case 2:
      return mediumMode(wordIndex);
    case 3:
      return hardMode(wordIndex)
  }
}

function gameStart(level, wordIndex) {
  const word = getWord(level, wordIndex);
  const scrambledWord = scrambleWord(word);
  const guessMessage = '\nHere is the word : ' + scrambledWord;
  const guess = prompt(guessMessage + '\nGuess the correct word : ');
  const result = guess === word;

  if (result) {
    score += 1;
  }

  const scoreBoard = '\n\n\tScore : ' + score + ' / 4';

  return guessStatus(result, word) + scoreBoard;
}

function isValidMode(level) {
  return level > 0 && level < 4;
}

function readLevel() {
  const level = +prompt('\n\nSelect a level to play (1, 2, 3) :');

  if (isValidMode(level)) {
    return level;
  }

  console.log('Please provide a valid input ');

  return readLevel();
}

function greetMessage() {
  const greetSegment1 = '\n Greetings....\n this is word guess game,';
  const greetSegment2 = '\n Guess the word based on the scrambled version';
  const greetSegment3 = '\n of the Word, and if you are clever there is a hint';
  const modeMessage = '\n\n\t1.Easy\n\t2.Medium\n\t3.Hard';

  return greetSegment1 + greetSegment2 + greetSegment3 + modeMessage;
}

function Play() {
  console.log(greetMessage());
  const level = readLevel();
  console.log(level);

  for (let index = 1; index < 5; index++) {
    console.log(gameStart(level, index));
  }

  const isStop = confirm('Do you want to play again :');

  if (isStop) {
    score = 0;
    Play();
  }
}

let score = 0;

Play();