import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shapes } from '../../utils/tetriminos'
import { GridSquare } from '../square/GridSquare'
import './board.css'
import { moveDown } from '../../redux/reducers/gameSlice'
import Message from '../message/Message'

export default function GridBoard(props) {
  const requestRef = useRef()
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)
  const dispatch = useDispatch()

  const { grid, shape, rotation, x, y, isRunning, speed } = useSelector(
    (state) => state.game
  )

  const block = shapes[shape][rotation]
  const blockColor = shape
  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Encuentra el bloque x e y en la cuadrícula de formas
      // Al restar x e y de la columna y la fila, obtenemos la posición de la esquina superior izquierda de la matriz de bloques como si estuviera superpuesta a la cuadrícula principal
      const blockX = col - x
      const blockY = row - y
      let color = square
      // Asigna el bloque que cae actual a la cuadrícula.
      // Para cualquier cuadrado que caiga en la cuadrícula, debemos mirar la matriz de bloques y ver si hay un 1, en este caso usamos el color del bloque.
      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }
      // Generar una clave única para cada bloque
      const k = row * grid[0].length + col

      return <GridSquare key={k} color={color} />
    })
  })
  const update = (time) => {
    requestRef.current = requestAnimationFrame(update)
    if (!isRunning) {
      return
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time
    }
    const deltaTime = time - lastUpdateTimeRef.current
    progressTimeRef.current += deltaTime
    if (progressTimeRef.current > speed) {
      dispatch(moveDown())
      progressTimeRef.current = 0
    }
    lastUpdateTimeRef.current = time
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [isRunning])

  return (
    <div className="grid-board">
      <Message />
      {gridSquares}
    </div>
  )
}
