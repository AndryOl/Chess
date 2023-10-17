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
import Modal from './Components/Modal'
import socket from './helpers/socket'

function App() {
  const [showModal] = useState(true)
  const [isNewGame, setIsNewGame] = useState(false)
  const data = [
    { time: '5', name: 'Blitz' },
    { time: '10', name: 'Rapid' },
    { time: '30', name: 'Classical' },
    { time: '-', name: 'Unlimit' }
  ]

  const createGame = (option: (typeof data)[0]) => {
    socket.emit('start', { time: option.time })
    console.log(option)
  }

  return (
    <Modal className={showModal ? 'bg-image' : ''} isShow={showModal}>
      {!isNewGame ? (
        <button className="btn" onClick={() => setIsNewGame(true)}>
          Create
        </button>
      ) : (
        <>
          <div className="flex">
            <span className="text-lg">Please select game type!</span>
            <button className="btn-close" onClick={() => setIsNewGame(false)}>
              &times;
            </button>
          </div>

          <div className="lpoll">
            {data.map((item) => (
              <div key={Math.random()} onClick={() => createGame(item)}>
                <div className="clock">{item.time} min</div>
                <div className="perf">{item.name}</div>
              </div>
            ))}
          </div>
        </>
      )}
>>>>>>> cd65d85 (chore(client): added the ability to create an online game)
    </Modal>
  )
}

export default App
