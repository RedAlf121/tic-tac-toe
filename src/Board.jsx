import './styles.css'
import Square from './components/Square.jsx'
import GameState from './components/GameState.jsx'
import { useEffect, useState } from 'react'
import gameChecker from './assets/gameChecker.js'
import { GAME_MODE } from './assets/gameMode.js'
import { play } from './assets/ai.js'

function splitSquare(index, value, handleClick) {
  return (
    <div className="board-row" key={index}>
      <Square key={index} value={value} setValue={handleClick} />
    </div>
  )
}


function Board(gamemode=GAME_MODE.Player) {
  const [playerTurn, setPlayerTurn] = useState(true) // true for O ; false for X
  const [squareValues, setSquareValues] = useState(Array(9).fill(''))
  const [gameState,setGameState] = useState(null)

  function whichTurn() {
    return playerTurn ? 'O' : 'X'
  }

  function handleClick(index) {
    if(!gameState && playerMovement(index)){
      setPlayerTurn(!playerTurn)
      console.log(gamemode.gameMode)
      if(gamemode.gameMode === GAME_MODE.AI){
        setSquareValues(play(squareValues));
        setPlayerTurn(true);
      }
    }
    
  }
  
  function changeState() {
    const gameChecked = gameChecker(squareValues)
    setGameState(gameChecked)
    if (gameChecked) {
      setPlayerTurn(gameChecked == 'O')
    }
  }
  
  function aiTurn(){
    return gamemode.gameMode === GAME_MODE.AI && !playerTurn;
  }

  function playerMovement(index) {
    const newSquareValues = [...squareValues]
    if(newSquareValues[index] === '' && !aiTurn()){
      newSquareValues[index] = whichTurn()
      squareValues[index] = newSquareValues[index]
      setSquareValues(squareValues)
      console.log(squareValues)
      return true
    }
    return false
  }
  
  function handleRestart() {
    setSquareValues(Array(9).fill(''));
    setGameState(null);
    setPlayerTurn(true);
  }

  function handleBack() {
    window.location.reload(); // O puedes navegar a otra vista si usas router
  }

  const rows = squareValues.map((value, index) => splitSquare(index, value, () => handleClick(index)))
  useEffect(changeState,[playerTurn, squareValues])
  return (
    <>
      <div>
        <div className='board'>
          {rows}
        </div>
        <GameState value={whichTurn()} state={gameState}/>
        <div className="board-actions">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </>
  )

}

export default Board;