import gameChecker from './gameChecker.js';


function getRandomIndex(actions) {
    //shuffling the array
    let shuffled = actions.sort(() => Math.random() - 0.5);
    const availableIndexes = [...shuffled.keys()];
    let randomPos = Math.floor(Math.random() * availableIndexes.length);
    let index = availableIndexes.splice(randomPos, 1)[0];
    return index;   
}

export function play(board,turn='x'){
    let score = -Infinity;
    const bestActions = [];
    for(let action of actions(board,turn,true)){
        board[action]=turn;
        let localScore = minimax(board,turn,0,false);
        board[action]='';
        console.log(localScore);
        if(score<localScore){
            score=localScore;
            bestActions.length=0;
        }
        if(score==localScore){
            bestActions.push(action);
        }
    }

    return (bestActions.length > 0)? result(board,bestActions[getRandomIndex(bestActions)]) : board;
}


function minimax(board,turn='x',depth=0,aiTurn=true){
    const finalState = terminal(board, turn, depth);
    if(finalState!==null) return finalState;
    let bestScore = null;
    let comparison = null;
    if(aiTurn){
        //maximize
        bestScore = -Infinity;
        comparison = Math.max;
    }else{
        //minimize
        bestScore = Infinity;
        comparison = Math.min;
    }
    for(let action of actions(board)){
        board[action] = (aiTurn)? turn : nextTurn(turn);
        const localScore = minimax(board,turn,depth+1,!aiTurn);
        board[action] = '';
        bestScore = comparison(bestScore,localScore);
    }
    return bestScore;
}


function terminal(board,turn, depth=0){
    const gameState = gameChecker(board);
    if(gameState===null) return null;
    if(gameState==='tie') return 0;
    if(gameState===turn) return 10-depth;
    if(gameState===nextTurn(turn)) return -10+depth;
}

function nextTurn(turn){
    return (turn === 'x')? 'o' : 'x';
}

function actions(board){
    return board.map((value,index)=>(value==='')? index : null)
                .filter((value)=>value!==null);
}

function result(board,position,turn='x',aiTurn=true){
    return board.map((value,index)=>{
        if(index!==position) return value;
        return aiTurn? turn : nextTurn(turn);
    })
}