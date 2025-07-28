const checkWinner = (array) => {
    const winningCombinations = [
        [0, 1, 2], // Fila superior
        [3, 4, 5], // Fila del medio
        [6, 7, 8], // Fila inferior
        [0, 3, 6], // Columna izquierda
        [1, 4, 7], // Columna del medio
        [2, 5, 8], // Columna derecha
        [0, 4, 8], // Diagonal principal
        [2, 4, 6]  // Diagonal secundaria
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (array[a]!=='' && array[a] === array[b] && array[a] === array[c]) {
            return array[a];
        }
    }
    if(array.every((value)=>value!==''))
        return 'tie'
    
    return null; 
};

export default function gameState(board) {
    const winner = checkWinner(board);
    return winner? winner : null
}