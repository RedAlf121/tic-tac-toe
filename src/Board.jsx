import './styles.css'
import Square from './components/Square.jsx'
import GameState from './components/GameState.jsx'
import { useEffect, useState } from 'react'
import gameChecker from './assets/gameChecker.js'

function splitSquare(index, value, handleClick) {
  return (
    <div className="board-row" key={index}>
      <Square key={index} value={value} setValue={handleClick} />
    </div>
  )
}


function Board() {
  const [playerTurn, setPlayerTurn] = useState(true) // true for O ; false for X
  const [squareValues, setSquareValues] = useState(Array(9).fill(''))
  const [gameState,setGameState] = useState(null)

  function whichTurn() {
    return playerTurn ? 'O' : 'X'
  }

  function handleClick(index) {
    if(!gameState && playerMovement(index))
      setPlayerTurn(!playerTurn)
  }
  
  function changeState() {
    const gameChecked = gameChecker(squareValues)
    setGameState(gameChecked)
    if (gameChecked) {
      setPlayerTurn(gameChecked == 'O')
    }
  }
  
  function playerMovement(index) {
    const newSquareValues = [...squareValues]
    if(newSquareValues[index] === ''){
      newSquareValues[index] = whichTurn()
      setSquareValues(newSquareValues)
      return true
    }
    return false
  }
  
  const rows = squareValues.map((value, index) => splitSquare(index, value, () => handleClick(index)))
  useEffect(changeState,[playerTurn])
  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <div className='board'>
          {rows}
        </div>
        <GameState value={whichTurn()} state={gameState}/>
      </div>
    </>
  )

}

export default Board;