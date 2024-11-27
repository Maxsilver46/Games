function delay(limit) {
  for (let index = 0; index < limit ** 10; index++);
}

function repeat(string, times) {
  let repeatedString = '';

  for (let index = 0; index < times; index++) {
    repeatedString += string;
  }

  return repeatedString;
}

let spaceCount = 0;

function addSpaceBetween(head, body, leg) {
  const space = repeat(" ", spaceCount * 3);

  let newHead = space + head;
  spaceCount++;

  if (head === '') {
    newHead = '';
  }

  return newHead + space + body + space + leg;
}

function makePoses() {
  const POSE_TWO = addSpaceBetween(' \\o/ \n', '  |  \n', ' / \\ ');
  const POSE_THREE = addSpaceBetween('  _ o \n', '   /\\\n', '  | \\ ');
  const POSE_FOUR = addSpaceBetween('', ' __\\o\n', '/)  |\n');
  const POSE_FIVE = addSpaceBetween(' __|\n', '   \\o\n', '    ( \\ ');
  const POSE_SIX = addSpaceBetween('  \\ / \n', '   |\n', '  /o\\');
  const POSE_SEVEN = addSpaceBetween('    |__ \n', '  o/\n', '  / )');
  const POSE_EIGHT = addSpaceBetween('', ' o/__ \n', ' |  (\\\n');
  const POSE_NINE = addSpaceBetween('   o _\n', '   /\\ \n', '   / |');

  const poses = [
    POSE_TWO,
    POSE_THREE,
    POSE_FOUR,
    POSE_FIVE,
    POSE_SIX,
    POSE_SEVEN,
    POSE_EIGHT,
    POSE_NINE,
  ];

  return poses;
}

function makeGround() {
  let ground = "";

  for (let index = 8; index >= 6; index -= 2) {
    const floorCount = index;
    const spaceCount = index - 2;

    ground += repeat('▔', floorCount) + repeat(" ", spaceCount);
  }

  return repeat(ground, 5);
}

function start() {
  const poses = makePoses();
  const endRoad = "\n" + makeGround() + repeat('▔', 7);

  for (let index = 0; index < 8; index++) {
    const fireEmoji = index % 2 === 0 ? ' 🔥 ' : '🔥🔥';
    let fires = repeat(fireEmoji, 31);

    delay(7.1);
    console.clear();
    console.log(repeat('\n', 8));
    console.log(poses[index] + endRoad + '\n\n' + fires);
  }
}

function main() {
  const POSE_ONE = '  o\n ' + '/|\\\n' + ' / \\ \n';
  console.clear();
  console.log(repeat('\n', 9) + POSE_ONE);

  for (let index = 0; index < 5; index++) {
    start();
  }
}

main();