/*The dice rendered in the page are all done using css. there are 9 circls in each dice and they are by default transparent. The cirls in the dice chage color based on what number is generated using Math.random(). */

const dice = document.querySelectorAll(".dice-outline");

const player1 = mapDiceToObj(dice[0]);
const player2 = mapDiceToObj(dice[1]);

//
function rollDices() {
  const player1Score = Math.floor(Math.random() * 6) + 1; //random number between 1-6
  const player2Score = Math.floor(Math.random() * 6) + 1;
  resetAll(); //remove css class with white background from circles
  mapScore(player1, player1Score); // show the dot representing score
  mapScore(player2, player2Score);
  declearWiner(player1Score, player2Score); // compare score and change message based on score
}
// copare score and display message
function declearWiner(player1Score, player2Score) {
  let message = "";
  if (player1Score > player2Score) message = "Player 1 Wins";
  else if (player1Score < player2Score) message = "Player 2 Wins";
  else message = "Its a Draw";
  document.querySelector(".winner-announced").innerHTML = message;
}

// map number score into dots on dice
function mapScore(player, score) {
  switch (score) {
    case 1:
      selector(player.middleRow[1]);

      break;
    case 2:
      selector(player.topRow[2], player.buttomRow[0]);

      break;
    case 3:
      selector(player.topRow[2], player.middleRow[1], player.buttomRow[0]);
    case 4:
      selector(
        player.topRow[0],
        player.topRow[2],
        player.buttomRow[0],
        player.buttomRow[2]
      );

      break;
    case 5:
      selector(
        player.topRow[0],
        player.topRow[2],
        player.middleRow[1],
        player.buttomRow[0],
        player.buttomRow[2]
      );
      break;
    default:
      selector(
        player.topRow[0],
        player.topRow[2],
        player.middleRow[0],
        player.middleRow[2],
        player.buttomRow[0],
        player.buttomRow[2]
      );
      break;
  }
}

// To make each dot accessable for js
function mapDiceToObj(die) {
  const playerObj = {};
  const rows = die.children;
  playerObj.topRow = rows[0].children;
  playerObj.middleRow = rows[1].children;
  playerObj.buttomRow = rows[2].children;
  return playerObj;
}
// so new value is not mixed with old
function resetAll() {
  reset(player1);
  reset(player2);
}

function reset(obj) {
  for (const row in obj) {
    const eachRow = obj[row];
    for (circle of eachRow) {
      circle.classList.remove("visible");
    }
  }
}
// takes array of elements and adds visible class
function selector(...arr) {
  arr.forEach((circle) => {
    circle.classList.add("visible");
  });
}
