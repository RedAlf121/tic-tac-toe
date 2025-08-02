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

const gfgBoard = ['x', 'o', 'x', 'o', 'o', 'x', '', '', '' ]
console.log('Optimal move for gfgBoard is:', play(gfgBoard))
const almostFull = ['x', 'o', 'x', 'x', 'o', 'o', 'o', '', ''];
console.log('Optimal move for almost full board:', play(almostFull));
const lastPlay = ['x','x','o','','o','','x','o','o'];
console.log('Optimal move for almost last play:', play(lastPlay));

// Example: almost full board
/*
console.log('Optimal move for easy win:', play(easyWin));
const easyWin = ['x', 'o', '', 'x', '', '', '', '', ''];
*/
