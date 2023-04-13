import { useSelector } from 'react-redux'
import './message.css'

export default function Message(props) {
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)
  const paused = useSelector((state) => state.game.paused)

  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (paused && !isRunning) {
    message = 'Paused'
    isHidden = ''
  } else if (!isRunning && !paused) {
    message = 'Use the keyboard arrows or buttons'
    isHidden = ''
  }

  return (
    <div className={`message ${isHidden}`}>
      <h1 className="textMessage">{message}</h1>
    </div>
  )
}
