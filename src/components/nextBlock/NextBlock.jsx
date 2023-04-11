import { useSelector } from 'react-redux'
import './nextBlock.css'
import { shapes } from '../../utils/tetriminos'
import { GridSquare } from '../square/GridSquare'

// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {
  const nextShape = useSelector((state) => state.game.nextShape)

  /*
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  */
  const box = shapes[nextShape][0] // Get the first rotation

  // Map the block to the grid
  const grid = box.slice(0, 3).map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return (
        <GridSquare
          key={`${row}${col}`}
          color={square === 0 ? 'transparent' : nextShape}
        />
      )
    })
  })

  return <div className="next-block">{grid}</div>
}
