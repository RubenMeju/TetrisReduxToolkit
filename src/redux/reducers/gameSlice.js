import { createSlice } from '@reduxjs/toolkit'
import {
  addBlockToGrid,
  canMoveTo,
  checkRows,
  initialGrid,
  nextRotation,
  randomShape
} from '../../utils/utils'

export const initialState = {
  isRunning: false,
  grid: initialGrid(),
  shape: randomShape(),
  nextShape: randomShape(),
  rotation: 0,
  x: 5,
  y: -4,
  score: 0,
  speed: 400,
  gameOver: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
  rotate: false,
  paused: false,
  resume: false,
  restart: false
}

export const gameSlice = createSlice({
  name: 'gameStatus',
  initialState,
  reducers: {
    pause: (state) => {
      state.isRunning = false
      state.paused = true
    },
    resume: (state) => {
      state.isRunning = true
      state.paused = false
    },
    restart: (state) => {
      window.location.reload()
    },
    gameOver: (state) => {
      state.isRunning = false
      state.gameOver = true
    },

    rotate(state) {
      const { shape, grid, x, y, rotation } = state
      const newRotation = nextRotation(shape, rotation)
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation }
      }
      return state
    },
    moveRight(state) {
      const { shape, grid, x, y, rotation } = state
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 }
      }
      return state
    },
    moveLeft(state) {
      const { shape, grid, x, y, rotation } = state
      // resta 1 de la x y verifique si esta nueva posición es posible llamando a `canMoveTo()
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        return { ...state, x: x - 1 }
      }
      return state
    },
    moveDown: (state) => {
      const { shape, grid, x, y, rotation, score, nextShape, isRunning } = state
      // Obtener la siguiente posición Y potencial
      const maybeY = y + 1

      // Compruebe si el bloque actual puede moverse aquí
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        // Si es así, muévete hacia abajo, no coloques el bloque.
        console.log('obligado a moverme hacia abajo')
        return { ...state, y: maybeY }
      }

      // Si no coloca el bloque(esto devuelve un objeto con una grilla y bool de gameover)
      const obj = addBlockToGrid(shape, grid, x, y, rotation)
      const newGrid = obj.grid
      const gameOver = obj.gameOver

      if (gameOver) {
        console.log('gameover')
        // Game Over

        state.isRunning = false
        state.gameOver = true
        return state
      }

      // restablecer algunas cosas para comenzar una nueva forma/bloque
      const newState = state
      console.log('newState', newState)
      newState.grid = newGrid
      newState.shape = nextShape
      newState.score = score
      newState.isRunning = isRunning
      newState.y = -4
      newState.x = 5
      newState.rotation = 0
      newState.nextShape = randomShape()

      // TODO: comprobar y establecer el nivel
      // Puntuación aumenta disminuye intervalo
      newState.score = score + checkRows(newGrid)
      return newState
    }
  }
})

export const {
  pause,
  resume,
  restart,
  gameOver,
  moveDown,
  rotate,
  moveRight,
  moveLeft
} = gameSlice.actions
export default gameSlice.reducer
