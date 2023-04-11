import { useDispatch, useSelector } from 'react-redux'
import './menuButtons.css'
import { pause, restart, resume } from '../../redux/reducers/gameSlice'

export default function MenuButtons() {
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
  const { isRunning, gameOver } = game

  return (
    <div className="menu">
      <button
        className="btn"
        onClick={(e) => {
          if (gameOver) {
            return
          }
          if (isRunning) {
            dispatch(pause())
          } else {
            dispatch(resume())
          }
        }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        className="btn"
        onClick={(e) => {
          dispatch(restart())
        }}
      >
        Restart
      </button>
    </div>
  )
}
