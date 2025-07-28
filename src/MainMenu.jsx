import Board from './Board.jsx'
import { GAME_MODE } from './assets/gameMode.js'
import { useState } from 'react';
export function MainMenu() {
    const [gameMode,setGameMode] = useState(null);
    const menuButtons = <div className="menu-buttons">
        <button onClick={() => setGameMode(GAME_MODE.Player)}>vs Player</button>
        <button onClick={() => setGameMode(GAME_MODE.AI)}>vs AI</button>
    </div>;
    return <>
        <div className="main-center">
            <h1>Tic Tac Toe</h1>
            {gameMode ? <Board gameMode={gameMode} /> : menuButtons}
        </div>
    </>
}