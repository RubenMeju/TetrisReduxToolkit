import { useDispatch, useSelector } from 'react-redux'
import GridBoard from './components/board/GridBoard'
import NextBlock from './components/nextBlock/NextBlock'
import MenuButtons from './components/menu/MenuButtons'
import './App.css'
import ScoreBoard from './components/score/ScoreBoard'
import { useEffect } from 'react'
import music1SFX from './assets/music1SFX.mp3'
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate
} from './redux/reducers/gameSlice'
import Controls from './components/playerController/Controls'

function App() {
  const { isRunning } = useSelector((state) => state.game)

  useEffect(() => {
    const music = document.querySelector('#music')
    music.volume = 0.1
    if (isRunning) {
      music.play()
    } else {
      music.pause()
    }
  }, [isRunning])

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

  return (
    <div className="App" onKeyDownCapture={onKeyDown}>
      <audio id="music" src={music1SFX}></audio>
      <ScoreBoard />
      <div className="container">
        <NextBlock />
        <MenuButtons />
      </div>
      <GridBoard />
      <Controls />
    </div>
  )
}

export default App
