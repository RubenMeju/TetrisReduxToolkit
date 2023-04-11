import { useDispatch, useSelector } from 'react-redux'
import './controller.css'
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate
} from '../../redux/reducers/gameSlice'
import iconLeftArrow from '../../assets/icons/left-arrow.png'
import iconRightArrow from '../../assets/icons/right-arrow.png'
import iconRotate from '../../assets/icons/rotate.png'
import iconDownArrow from '../../assets/icons/down-arrow.png'

export default function Controls(props) {
  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)
  return (
    <div className="arrows">
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return
          }
          dispatch(moveLeft())
        }}
      >
        <img className="icon" src={iconLeftArrow} alt="" />
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return
          }
          dispatch(moveRight())
        }}
      >
        <img className="icon" src={iconRightArrow} alt="" />
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return
          }
          dispatch(rotate())
        }}
      >
        <img className="icon" src={iconRotate} alt="" />
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return
          }
          dispatch(moveDown())
        }}
      >
        <img className="icon" src={iconDownArrow} alt="" />
      </button>
    </div>
  )
}
