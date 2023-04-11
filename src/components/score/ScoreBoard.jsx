import { useSelector } from 'react-redux'
import './score.css'

export default function ScoreBoard(props) {
  const { score } = useSelector((state) => state.game)

  return (
    <div className="score">
      <div>Score:{score}</div>
      <div>Level: 1</div>
    </div>
  )
}
