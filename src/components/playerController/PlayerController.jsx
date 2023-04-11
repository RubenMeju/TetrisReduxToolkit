import { useDispatch } from 'react-redux'
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate
} from '../../redux/reducers/gameSlice'

export function PlayerController() {
  const dispatch = useDispatch()
  const onKeyDown = ({ code }) => {
    console.log('onKeyDown', code)
    if (code === 'ArrowLeft') {
      dispatch(moveLeft())
    }
    if (code === 'ArrowRight') {
      dispatch(moveRight())
    }
    if (code === 'ArrowUp') {
      dispatch(rotate())
    }
    if (code === 'ArrowDown') {
      dispatch(moveDown())
    }
  }
  return (
    <input
      style={{ opacity: 0 }}
      className="GameController"
      type="text"
      // onKeyDown={onKeyDown}
      onKeyDownCapture={onKeyDown}
      // onKeyUp={onKeyUp}
      autoFocus
    />
  )
}
