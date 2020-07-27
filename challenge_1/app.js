/*
Model
-Tic Tac Toe Board Data structure: 3 x 3 matrix/nested array
*/
window.board = [['#', '#', '#'],
                ['#', '#', '#'],
                ['#', '#', '#']];

var displayBoard = function() {
  var count = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',]
  var countIndex = 0;
  for (var i = 0; i < window.board.length; i++) {
    for (var j = 0; j < window.board[i].length; j++) {
      var current = document.getElementById(count[countIndex]);
      var content = document.createTextNode(window.board[i][j]);
      current.appendChild(content);
      countIndex++;
    }
  }
}
displayBoard();
/*
Controller
-Methods that update the matrix and check for a winner
*/