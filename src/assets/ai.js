import gameState from "./gameChecker.js";
/**
 BestMovement
 {
    score: int,
    bestAction: Movement
 }
 */
export function play(board,turn='x'){
    const nextMove = maxValue(board, turn, turn);
    console.log(nextMove.score);
    return result(board,nextMove.bestAction);
}

function nextTurn(turn){
    return (turn === 'x')? 'o' : 'x';
}

function maxValue(board,turn='x',initial='x'){
    if(terminal(board)){
        return utility(board,initial);
    }
    let score = -Infinity;
    let bestAction = {}
    for(let action of actions(board,turn)){
        const oponnentMove = minValue(result(board, action,initial),nextTurn(turn),initial);
        if(score < oponnentMove.score){
            score = oponnentMove.score;
            bestAction = action;
        }
    }
    return {
        score,
        bestAction
    };
}

function minValue(board,turn='x',initial='x'){
    if(terminal(board)){
        return utility(board,initial);
    }
    let score = Infinity;
    let bestAction = {}
    for(let action of actions(board,turn)){
        const oponnentMove = maxValue(result(board, action),nextTurn(turn),initial);
        if(score > oponnentMove.score){
            score = oponnentMove.score;
            bestAction = action;
        }
    }
    return {
        score,
        best_action: bestAction
    };
}

function terminal(board){
    return gameState(board)!==null;
}
/*
movement
{
    position: int,
    value: char
}
*/
function result(board,movement){
    const newBoard = [...board];
    newBoard[movement.position] = movement.value;
    return newBoard;
}


/*
this function returns a list of movement
movement
{
    position: int,
    value: char
}
*/
function actions(board,turn='x'){
    const actionList = [];
    for(let i in board){
        if(board[i]===''){
            actionList.push({
                position: i,
                value: turn
            });
        }
    }
    return actionList;
}

function utility(board,initial='x'){
    const state = gameState(board);
    if(state==='tie')
        return {score: 0, bestAction: ''};
    else return (state===initial)? {score: 1, bestAction: ''} : {score: -1, bestAction: ''}; 
}