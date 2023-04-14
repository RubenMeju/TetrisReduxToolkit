import { useSelector } from 'react-redux'
import GridBoard from './components/board/GridBoard'
import NextBlock from './components/nextBlock/NextBlock'
import MenuButtons from './components/menu/MenuButtons'
import './App.css'
import ScoreBoard from './components/score/ScoreBoard'
import { useEffect } from 'react'
import music1SFX from './assets/TetrisTechno.mp3'

import Controls from './components/playerController/Controls'
import usePressKey from './hooks/usePressKey'

function App() {
  const { isRunning } = useSelector((state) => state.game)
  // hook to listen to key press
  const { onKeyDown } = usePressKey()

  useEffect(() => {
    const music = document.querySelector('#music')
    music.volume = 0.1
    if (isRunning) {
      music.play()
    } else {
      music.pause()
    }
  }, [isRunning])

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
