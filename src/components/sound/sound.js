import fixedBlockSFX from '../../assets/fixedBlockSFX.mp3'
import rowDeleteSFX from '../../assets/rowDeleteSFX.mp3'
import gameOverSFX from '../../assets/gameOverSFX.mp3'

export const FixedBlockSFX = () => {
  new Audio(fixedBlockSFX).play()
}

export const RowDeleteSFX = () => {
  new Audio(rowDeleteSFX).play()
}

export const GameOverSFX = () => {
  new Audio(gameOverSFX).play()
}
