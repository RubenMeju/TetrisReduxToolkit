import { useSelector } from 'react-redux'
import GridBoard from './components/board/GridBoard'
import NextBlock from './components/nextBlock/NextBlock'
import MenuButtons from './components/menu/MenuButtons'
import Controls from './components/playerController/Controls'
import './App.css'
import { PlayerController } from './components/playerController/PlayerController'
import ScoreBoard from './components/score/ScoreBoard'
import { useEffect } from 'react'
import music1SFX from './assets/music1SFX.mp3'
import { useWidhtScreen } from './hooks/useWidhtScreen'

function App() {
  useWidhtScreen()
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

  return (
    <div className="App">
      <audio id="music" src={music1SFX}></audio>
      <ScoreBoard />
      <div className="container">
        <NextBlock />
        <MenuButtons />
      </div>
      <GridBoard />
      <Controls />
      <div className="contPlayerController">
        {isRunning && <PlayerController />}
      </div>
    </div>
  )
}

export default App
