import fixedBlockSFX from '../../assets/fixedBlockSFX.mp3'
import rowDeleteSFX from '../../assets/rowDeleteSFX.mp3'
import gameOverSFX from '../../assets/gameOverSFX.mp3'

export const FixedBlockSFX = () => {
  const audio = new Audio(fixedBlockSFX)
  audio.volume = 0.2
  audio.play()
}

export const RowDeleteSFX = () => {
  new Audio(rowDeleteSFX).play()
}

export const GameOverSFX = () => {
  const audio = new Audio(gameOverSFX)
  audio.volume = 0.2
  audio.play()
}
