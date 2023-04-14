import { useDispatch } from 'react-redux'
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate
} from '../redux/reducers/gameSlice'

export default function usePressKey() {
  const dispatch = useDispatch()
  const onKeyDown = ({ code }) => {
    // console.log('onKeyDown', code)
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
  return { onKeyDown }
}
