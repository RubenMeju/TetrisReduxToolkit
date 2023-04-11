import {
  FixedBlockSFX,
  GameOverSFX,
  RowDeleteSFX
} from '../components/sound/sound'
import { shapes } from './tetriminos'

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomShape = () => {
  return random(1, shapes.length - 1)
}

export const initialGrid = () => {
  const rows = 18
  const cols = 10
  const array = []

  for (let row = 0; row < rows; row++) {
    array.push([])
    for (let col = 0; col < cols; col++) {
      array[row].push(0)
    }
  }

  return array
}

// Devuelve la siguiente rotación de una forma
// la rotación no puede exceder el último índice de las rotaciones para la forma dada.
export const nextRotation = (shape, rotation) => {
  return (rotation + 1) % shapes[shape].length
}

export const canMoveTo = (shape, grid, x, y, rotation) => {
  console.log('me puedo mover')
  const currentShape = shapes[shape][rotation]

  // Obtener el ancho y alto de la grilla
  const gridWidth = grid[0].length - 1
  const gridHeight = grid.length - 1

  // Bucle sobre la matriz de formas
  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      // Si el valor no es 0 es parte de la forma
      if (currentShape[row][col] !== 0) {
        // Offset the square to map it to the larger grid
        const proposedX = col + x
        const proposedY = row + y

        // Desplazar el cuadrado para mapearlo a la cuadrícula más grande
        const possibleRow = grid[proposedY]

        // Fuera del lado izquierdo o derecho o fuera de la parte inferior return false
        if (proposedX < 0 || proposedX > gridWidth || proposedY > gridHeight) {
          return false
        } else if (possibleRow !== undefined) {
          // Si la fila no está indefinida, estás en la cuadrícula
          if (possibleRow[proposedX] !== 0) {
            // Este cuadrado debe ser rellenado
            return false
          }
        }
      }
    }
  }
  return true
}

// Agregar la figura al grid
export const addBlockToGrid = (shape, grid, x, y, rotation) => {
  /*
  console.log('shape: ', shape)
  console.log('grid: ', grid)
  console.log('x: ', x)
  console.log('y: ', y)
  console.log('rotation: ', rotation)
  */

  // En este punto el juego no ha terminado
  let blockOffGrid = false
  const block = shapes[shape][rotation]
  const newGrid = [...grid]
  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col]) {
        const yIndex = row + y
        // Si el yIndex es menor que 0 parte del bloque
        // está fuera de la parte superior de la pantalla y el juego ha terminado
        if (yIndex < 0) {
          blockOffGrid = true
          GameOverSFX()
          console.log('El juego ha terminado')

          break
        } else {
          newGrid[row + y][col + x] = shape
          console.log('Bloque fijado')
          FixedBlockSFX()
        }
      }
    }
  }
  // Devuelve tanto newGrid como gameOver bool
  return { grid: newGrid, gameOver: blockOffGrid }
}

// Verificar filas completas y sumar puntos
export const checkRows = (grid) => {
  // const playDeleteRowsSFX = () => DeleteRowsSFX()
  // Aumentar puntos por cada fila completa
  // 40 puntos por completar una fila, 100 puntos por dos filas etc...
  const points = [0, 40, 100, 300, 1200]
  let completedRows = 0
  for (let row = 0; row < grid.length; row++) {
    // No hay celdas vacías significa que no puede encontrar un 0, ¡así que la fila debe estar completa!
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1

      // Elimina la fila y agrega una nueva vacía en la parte superior
      grid.splice(row, 1)
      grid.unshift(Array(10).fill(0))
      // Reproduce el sonido de la fila eliminada
      RowDeleteSFX()
    }
  }
  return points[completedRows]
}
