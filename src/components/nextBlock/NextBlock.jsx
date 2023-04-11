import { useSelector } from 'react-redux'
import './nextBlock.css'
import { shapes } from '../../utils/tetriminos'
import { GridSquare } from '../square/GridSquare'

// Dibuja la vista de bloque "siguiente" que muestra el siguiente bloque para colocar
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
  // Obtener la primera rotación
  const box = shapes[nextShape][0]

  // Asignar el bloque a la grilla
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
