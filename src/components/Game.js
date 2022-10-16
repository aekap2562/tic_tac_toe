import React, { useState } from 'react'; 
import { calculateWinner } from '../helpers';
import Board from './Board'; 


const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board]
        //if user clicks on an occupied square or if game is done, return
        if(winner || boardCopy[i]){
            return;
        }
        //put an X or O in clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O'; 
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>Start New Game</button>
    }

    return(
        <>
            <Board squares={board} onClick={handleClick}/>
            <div>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;