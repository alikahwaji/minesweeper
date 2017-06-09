document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  'cells':[
    {row: 0, col: 0, isMine: false, hidden: true,  isMarked: false, surroundingMines:0},
    {row: 0, col: 1, isMine: false, hidden: true,  isMarked: false,  surroundingMines:0},
    {row: 0, col: 2, isMine: false, hidden: true,  isMarked: false,  surroundingMines:0},
    {row: 1, col: 0, isMine: false, hidden: true,  isMarked: false,  surroundingMines:0},
    {row: 1, col: 1, isMine: true, hidden: true,  isMarked: false, surroundingMines:0},
    {row: 1, col: 2, isMine: false, hidden: true,  isMarked: false,  surroundingMines:0},
    {row: 2, col: 0, isMine: true, hidden: true,  isMarked: false, surroundingMines:0},
    {row: 2, col: 1, isMine: false, hidden: true,  isMarked: false, surroundingMines:0},
    {row: 2, col: 2, isMine: false, hidden: true,    isMarked: false,    surroundingMines:0}
  ]

};

function startGame () {
  for (var i=0; i > board.cells.lenght; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cell[i]);
  }
  // Don't remove this function call: it makes the game work!

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu' , checkForWin);
  lib.initBoard()
};
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i=0; i< board.cells.length; i++){
    if (board.cells[i].isMine === true){
      if (board.cells[i].isMarked === false){
        console.log("Boom");
        return;
      }
    }
    if (board.cells[i].hidden === true && board.cells[i].isMine === false) {
      console.log("No Boom");
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  lib.displayMessage('You Win!')
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
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var mineCount =0;
  for (var i =0; i <surrounding.length; i++) {
    if (surrounding[i].isMine === true){
      mineCount +=1;
    }
  }
  return mineCount;
}
