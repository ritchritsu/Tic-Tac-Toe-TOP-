document.addEventListener("DOMContentLoaded", function () {
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // 1D array for the board
  let currentPlayer = "X"; // Starting player

  // Winning check function
  function won(board) {
    // Winning conditions for rows
    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] === board[i + 1] &&
        board[i + 1] === board[i + 2] &&
        board[i] !== " "
      ) {
        return true;
      }
    }

    // Winning conditions for columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] === board[i + 3] &&
        board[i + 3] === board[i + 6] &&
        board[i] !== " "
      ) {
        return true;
      }
    }

    // Winning condition for left-to-right diagonal
    if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[0] !== " "
    ) {
      return true;
    }

    // Winning condition for right-to-left diagonal
    if (
      board[2] === board[4] &&
      board[4] === board[6] &&
      board[2] !== " "
    ) {
      return true;
    }

    return false;
  }

  function clearBoard() {
    return [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // Reset board to empty
  }

  function switchPlayer() {
    // Switch player after each turn
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  function resetBoardUI() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.textContent = "";
    });
  }

  function initializeGame() {
    board = clearBoard();
    resetBoardUI();
    currentPlayer = "X";
  }

  // Add click event listeners to each cell
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.addEventListener("click", function () {
      if (board[index] === " ") {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (won(board)) {
          alert(`${currentPlayer} wins!`);
          initializeGame(); // Reset board for a new game
        } else if (board.indexOf(" ") === -1) {
          alert("It's a draw!");
          initializeGame(); // Reset board for a new game
        } else {
          switchPlayer(); // Switch player after each move
        }
      }
    });
  });

  initializeGame(); // Initialize the game on page load
});
