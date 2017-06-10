document.addEventListener('DOMContentLoaded', startGame)

//Define your `board` object here!
var rowLength = 5;
var colLength = 5;
var board = {
  cells:[]
};


function startGame () {
  newBoard();
  for (var i=0; i<board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
};
// Don't remove this function call: it makes the game work!
  lib.initBoard();
  document.addEventListener ('click', checkForWin);
  document.addEventListener ('contextmenu', checkForWin);
};

function newBoard() {
  for (var i = 0; i< rowLength; i++) {
    for (var x =0; x< colLength; x++) {
      var newCell = {
        row: i,
        col: x,
        isMine: false,
        isMarked: false,
        hidden: true,
        surroundingMines: 0
      }
      board.cells.push(newCell);
    }
  }
  var mineCount = 0;
  var maxMines = 4;
  while (mineCount < maxMines) {
    var randomCell = Math.floor(Math.random() * 25)
    if (board.cells[randomCell].isMine === false) {
      (board.cells[randomCell].isMine = true)
      mineCount ++
    }
  }
}
//Play sound for winning
function audioClip(type) {
  if (type==='winner') {
    var audio = document.getElementsByTagName('audio')[0];
  }
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var countMarked= 0;
  for (var i=0; i<board.cells.length; i++) {
    if ((board.cells[i].isMine !== true) && (board.cells[i].hidden !== true)) {
      countMarked ++;
    } else if (board.cells[i].isMine && board.cells[i].isMarked) {
      countMarked ++;
    } else {
      return;
    }
  }
  if (countMarked = 24) {
    lib.displayMessage("You really are a Fanastic Fox!");
    soundClip('winner');
  }
}
function resetGame(){
  location.reload();
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i=0; i<surroundingCells.length; i++){
    if (surroundingCells[i].isMine == true){
      count ++;
    }
  }
  return count;
}
