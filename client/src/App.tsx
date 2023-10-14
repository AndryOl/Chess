/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import BoardComponent from './Components/BoardComponent'
import InfoGame from './Components/InfoGame'
import { Board } from './models/Board'
import { Player } from './models/Player'

function App() {
  const isFirstMove = useRef(true)
  const [board, setBoard] = useState<Board | null>(null)
  const [whitePlayer] = useState<Player>(new Player('white'))
  const [blackPlayer] = useState<Player>(new Player('black'))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  const restart = () => {
    setCurrentPlayer(whitePlayer)
    isFirstMove.current = true
    const newBoard = new Board()
    newBoard.fill()
    newBoard.getFigures()
    setBoard(newBoard)
  }

  const changePlayer = () => {
    const player = currentPlayer === whitePlayer ? blackPlayer : whitePlayer
    setCurrentPlayer(player)
  }

  useEffect(() => {
    restart()
  }, [])

  useEffect(() => {
    if (currentPlayer?.color && !isFirstMove.current) board?.checkMate(currentPlayer.color)
  }, [board])

  useEffect(() => {
    if (board && currentPlayer?.color) {
      if (isFirstMove.current) isFirstMove.current = false
      board.calculateAllMoves(currentPlayer.color)
      setBoard(board.copyBoard())
    }
  }, [currentPlayer])

  return (
    <div className="app">
      <InfoGame player={currentPlayer} handler={restart} time={300} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        changePlayer={changePlayer}
      />
    </div>
  )
}

export default App