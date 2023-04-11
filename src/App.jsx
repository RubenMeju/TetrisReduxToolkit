import { useSelector } from 'react-redux'
import GridBoard from './components/board/GridBoard'
import NextBlock from './components/nextBlock/NextBlock'
import MenuButtons from './components/menu/MenuButtons'
import Controls from './components/playerController/Controls'
import './App.css'
import { PlayerController } from './components/playerController/PlayerController'
import ScoreBoard from './components/score/ScoreBoard'

function App() {
  const { isRunning } = useSelector((state) => state.game)
  return (
    <div className="App">
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
