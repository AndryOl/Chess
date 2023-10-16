/* eslint-disable react-hooks/exhaustive-deps */
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import BoardComponent from './Components/BoardComponent'
import InfoGame from './Components/InfoGame'
import { Board } from './models/Board'
import { Player } from './models/Player'

function App() {
  const [board, setBoard] = useState<Board | null>(null)
  const [whitePlayer] = useState<Player>(new Player('white'))
  const [blackPlayer] = useState<Player>(new Player('black'))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  const restart = () => {
    setCurrentPlayer(whitePlayer)
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
    if (board && currentPlayer?.color) {
      board.calculateAllMoves(currentPlayer.color)
      setBoard(board.copyBoard())
    }
  }, [currentPlayer])
=======
import { MutableRefObject, useRef, useState } from 'react'
import Modal from './Components/Modal'

function App() {
  const [showModal] = useState(true)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
>>>>>>> 67b93e4 (feat(client): added and styled Modal component)

  return (
    <Modal className={showModal ? 'bg-image' : ''} isShow={showModal}>
      <input type="text" ref={inputRef} placeholder="Enter game id" />
      <button className="btn" onClick={() => console.log('clicked!')}>
        Connect
      </button>
    </Modal>
  )
}

export default App
