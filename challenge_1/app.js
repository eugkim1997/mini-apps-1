
/*
Model
-tictactoe Board Data structure: 3 x 3 matrix/nested array
*/

//current contents of tictactoe board
var blueprint = [['1', '2', '3'],
                  ['4', '5', '6'],
                  ['7', '8', '9']];
var count = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var turn = 'X';

//maintains elements(buttons) displayed on html board, reflects blueprint
var updateBoard = function() {
  var countIndex = 0;
  for (var i = 0; i < blueprint.length; i++) {
    for (var j = 0; j < blueprint[i].length; j++) {
      document.getElementById(count[countIndex]).innerHTML = blueprint[i][j];
      countIndex++;
    }
  }
};

//if blueprint[row][i] === turn

//checks current board for winner
var winnerCheck = function() {
  var result = 'tie';
  result = verticalChecks();
  if (result === 'tie') {
    result = horizontalChecks();
  }
  if (result === 'tie') {
    result = diagonalChecks();
  }
  if (result !== 'tie') {
    console.log('Winner: ', result);
  }
};

//checks for a vertical winner
var verticalChecks = function(result) {
  var result = 'tie';
  if (blueprint[0][0] === blueprint[1][0] && blueprint[0][0] === blueprint[2][0] && blueprint[1][0] === blueprint[2][0]) {
    result = blueprint[0][0];
  } else if (blueprint[0][1] === blueprint[1][1] && blueprint[0][1] === blueprint[2][1] && blueprint[1][1] === blueprint[2][1]) {
    result = blueprint[0][1];
  } else if (blueprint[0][2] === blueprint[1][2] && blueprint[0][2] === blueprint[2][2] && blueprint[1][2] === blueprint[2][2]) {
    result = blueprint[0][2];
  }
  return result;
};

//checks for a horizontal winner
var horizontalChecks = function(result) {
  var result = 'tie';
  if (blueprint[0][0] === blueprint[0][1] && blueprint[0][0] === blueprint[0][2] && blueprint[0][1] === blueprint[0][2]) {
    result = blueprint[0][0];
  } else if (blueprint[1][0] === blueprint[1][1] && blueprint[1][0] === blueprint[1][2] && blueprint[1][1] === blueprint[1][2]) {
    result = blueprint[1][0];
  } else if (blueprint[2][0] === blueprint[2][1] && blueprint[2][0] === blueprint[2][2] && blueprint[2][1] === blueprint[2][2]) {
    result = blueprint[2][0];
  }
  return result;
};

//checks for a diagonal winner
var diagonalChecks = function(result) {
  var result = 'tie';
  if (blueprint[0][0] === blueprint[1][1] && blueprint[0][0] === blueprint[2][2] && blueprint[1][1] === blueprint[2][2]) {
    result = blueprint[0][0];
  } else if (blueprint[0][2] === blueprint[1][1] && blueprint[0][2] === blueprint[2][0] && blueprint[1][1] === blueprint[2][0]) {
    result = blueprint[0][2];
  }
  return result;
};

//starts app
updateBoard();

/*
Controller
-Methods that update the matrix and check for a winner
*/

//
var changeContent = function(row, column, content) {
  blueprint[row][column] = content;
  updateBoard();
  switchTurn();
  winnerCheck();
};

var switchTurn = function() {
  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
};