import { play } from './ai.js';

// Example: empty board
/*
const emptyBoard = ['', '', '', '', '', '', '', '', ''];
console.log('Optimal move for empty board:', play(emptyBoard));



// Example: mid-game board
const midBoard = ['x', 'o', 'x', '', 'o', '', '', '', ''];
console.log('Optimal move for mid-game board:', play(midBoard));
*/
const easyBoard = ['o', 'x', '', 'o', '', '', '', '', ''];
console.log('Optimal move for easy board:', play(easyBoard));
// Example: almost full board
/*
console.log('Optimal move for easy win:', play(easyWin));
const easyWin = ['x', 'o', '', 'x', '', '', '', '', ''];
const almostFull = ['x', 'o', 'x', 'x', 'o', 'o', 'o', '', ''];
console.log('Optimal move for almost full board:', play(almostFull));
*/
