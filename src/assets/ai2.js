// ai2.js
// Minimax implementation for Tic-Tac-Toe (3 en raya)
// Board: array of 9 elements, values: 'o', 'x', ''
// 'o' is the AI, 'x' is the player
import gameChecker from './gameChecker.js';

// Returns the best move index for the AI (aiSymbol)
export function minimaxMove(board, aiSymbol = 'x', opponentSymbol = 'o') {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < 9; i++) {
    if (board[i] === '') {
      board[i] = aiSymbol;
      let score = minimax(board, 0, false, aiSymbol, opponentSymbol);
      board[i] = '';
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

// Minimax algorithm
function minimax(board, depth, isMaximizing, aiSymbol, opponentSymbol) {
  const result = gameChecker(board);
  if (result !== null) {
    if (result === aiSymbol) return 10 - depth;
    if (result === opponentSymbol) return depth - 10;
    if (result === 'tie') return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        board[i] = aiSymbol;
        let score = minimax(board, depth + 1, false, aiSymbol, opponentSymbol);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        board[i] = opponentSymbol;
        let score = minimax(board, depth + 1, true, aiSymbol, opponentSymbol);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

// Returns a new board with the AI's move applied
export function playAI(board, aiSymbol = 'x', opponentSymbol = 'o') {
  const move = minimaxMove([...board], aiSymbol, opponentSymbol);
  if (move !== -1) {
    const newBoard = [...board];
    newBoard[move] = aiSymbol;
    return newBoard;
  }
  return board;
}
