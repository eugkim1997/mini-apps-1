/*
Model
-Tic Tac Toe Board Data structure: 3 x 3 matrix/nested array
*/
window.board = [['#', '#', '#'],
                ['#', '#', '#'],
                ['#', '#', '#']];

document.body.onload = displayBoard;

var displayBoard = function() {
}

/*
Controller
-Methods that update the matrix and check for a winner
*/