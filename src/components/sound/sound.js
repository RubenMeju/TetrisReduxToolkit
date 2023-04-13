import fixedBlockSFX from '../../assets/fixedBlockSFX.mp3'
import rowDeleteSFX from '../../assets/rowDeleteSFX.mp3'
import gameOverSFX from '../../assets/gameOverSFX.mp3'
import music1SFX from '../../assets/music1SFX.mp3'

export const Music1SFX = (estado) => {
  console.log('estado', estado)
  const audio = new Audio(music1SFX)
  if (estado) {
    audio.play()
  } else {
    console.log('ewstttt')
    audio.pause()
  }
}
export const stopMusic1SFX = () => {
  const audio = new Audio(music1SFX)
  audio.pause()
}

export const FixedBlockSFX = () => {
  new Audio(fixedBlockSFX).play()
}

export const RowDeleteSFX = () => {
  new Audio(rowDeleteSFX).play()
}

export const GameOverSFX = () => {
  new Audio(gameOverSFX).play()
}
