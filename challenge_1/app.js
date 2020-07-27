
/*
Model
-tictactoe Board Data structure: 3 x 3 matrix/nested array
*/

//current contents of tictactoe board
var blueprints = [['#', '#', '#'],
                  ['#', '#', '#'],
                  ['#', '#', '#']];
var count = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var turn = 'X';

//maintains elements(buttons) displayed on html board, reflects blueprints
var updateBoard = function() {
  var countIndex = 0;
  for (var i = 0; i < blueprints.length; i++) {
    for (var j = 0; j < blueprints[i].length; j++) {
      document.getElementById(count[countIndex]).innerHTML = blueprints[i][j];
      countIndex++;
    }
  }
};
//starts app
updateBoard();

/*
Controller
-Methods that update the matrix and check for a winner
*/

//
var changeContent = function(i, j, content) {
  blueprints[i][j] = content;
  updateBoard();
  switchTurn();
};

var switchTurn = function() {
  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
};