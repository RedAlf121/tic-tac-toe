import gameState from "./gameChecker.js";

export function play(board,turn='x'){
    console.log(turn);
    const next = nextTurn(turn)
    const variations = actions(board,next);
    let score = -Infinity;
    let bestAction = 0
    for(let action of variations) {
        const localScore = minValue(result(board, action, next), next, turn);
        console.log(`action: ${action} score: ${localScore}`)
        if(score < localScore){
            score = localScore;
            bestAction = action;
        }
    }
    return result(board,bestAction,turn);
}

function nextTurn(turn){
    return (turn === 'x')? 'o' : 'x';
}

function maxValue(board,turn='x',initial='x',depth=0){
    if(terminal(board)){
        const utilityValue = utility(board, initial);
        return (utilityValue!==0)? utilityValue-depth : 0;
    }
    let score = -Infinity;
    for(let action of actions(board,turn)){
        const localScore = minValue(result(board, action,initial),nextTurn(turn),initial,depth+1);
        score = Math.max(score,localScore);
    }
    return score;
}

function minValue(board,turn='x',initial='x',depth=0){
    if(terminal(board)){
        const utilityValue = utility(board, initial);
        return (utilityValue!==0)? utilityValue+depth : 0;
    }
    let score = Infinity;
    for(let action of actions(board,turn)){
        const localScore = maxValue(result(board, action,turn),nextTurn(turn),initial,depth+1);
        score = Math.min(score,localScore);
    }
    return score;
}

function terminal(board){
    return gameState(board)!==null;
}

function result(board,position,turn='x'){
    return board.map((value,index)=>(index===position)? turn : value);
}


function actions(board){
    return board.map((cell,index)=>(cell==='')? index : null)
                .filter((value)=>value!==null);
}

function utility(board,initial='x'){
    const state = gameState(board);
    if(state==='tie')
        return 0;
    else return (state===initial)? 10 : -10; 
}