<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useRef, useState } from 'react'
import Modal from './Components/Modal'

function App() {
  const [showModal] = useState(true)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  return (
    <Modal className={showModal ? 'bg-image' : ''} isShow={showModal}>
      <input type="text" ref={inputRef} placeholder="Enter game id" />
      <button className="btn" onClick={() => console.log('clicked!')}>
        Connect
      </button>
=======
import { useState } from 'react'
=======
import { MutableRefObject, useRef, useState } from 'react'
>>>>>>> 39bbec5 (chore(client): added processing of connecting to an online game)
import Modal from './Components/Modal'
import socket from './helpers/socket'
import CreateGame from './Components/CreateGame'

const App = () => {
  const [showModal] = useState(true)
  const [isNewGame, setIsNewGame] = useState(false)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  const connect = () => {
    if (inputRef.current.value.trim()) {
      socket.emit('check-token', { token: inputRef.current.value })
      socket.on('full', () => console.error('room is full'))
      socket.on('token-invalid', () => console.error('invalid'))
      socket.on('token-ok', () => console.log('token is ok'))
    }
  }

  return (
    <Modal className={showModal ? 'bg-image' : ''} isShow={showModal}>
      {!isNewGame ? (
        <>
          <input type="text" ref={inputRef} placeholder="Enter game id" />
          <button className="btn bg-black" onClick={connect}>
            Connect
          </button>
          <div className="text-center">or</div>
          <button className="btn bg-green" onClick={() => setIsNewGame(true)}>
            Create
          </button>
        </>
      ) : (
        <CreateGame handler={setIsNewGame} />
      )}
>>>>>>> cd65d85 (chore(client): added the ability to create an online game)
    </Modal>
  )
}

export default App
