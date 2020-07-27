/*
Model
-Tic Tac Toe Board Data structure: 3 x 3 matrix/nested array
*/
var board = [['#', '#', '#'],
             ['#', '#', '#'],
             ['#', '#', '#']];
var count = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var move = 'O';

var displayBoard = function() {
  var countIndex = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      document.getElementById(count[countIndex]).innerHTML = board[i][j];
      countIndex++;
    }
  }
}
displayBoard();

/*
Controller
-Methods that update the matrix and check for a winner
*/

//
var changeContent = function(i, j, content) {
  board[i][j] = content;
  displayBoard();
}