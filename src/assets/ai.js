import gameState from "./gameChecker.js";
/**
 BestMovement
 {
    score: int,
    bestAction: Movement
 }
 */
export function play(board,turn='x'){
    const variations = actions(board,turn);
    let bestAction = {};
    let score = -Infinity;
    let localScore = -Infinity
    for(let action of variations) {
        const nextState = result(board, action);
        if(terminal(nextState)){
            localScore = utility(nextState,turn);
        }else{
            localScore = maxValue(nextState,nextTurn(turn),turn);
        }
        if(score < localScore){
            score = localScore;
            bestAction = action;
        }
    }
    console.log("The best movement is:",bestAction)
    return result(board,bestAction);
}

function nextTurn(turn){
    return (turn === 'x')? 'o' : 'x';
}

function maxValue(board,turn='x',initial='x',depth=0){
    if(terminal(board)){
        return utility(board,initial)-depth;
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
        return utility(board,initial);
    }
    let score = Infinity;
    for(let action of actions(board,turn)){
        const localScore = maxValue(result(board, action),nextTurn(turn),initial,depth+1);
        score = Math.min(score,localScore);
    }
    return score;
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
        return 0;
    else return (state===initial)? 10 : -10; 
}