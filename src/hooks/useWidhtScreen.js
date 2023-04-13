import { useEffect } from 'react'

export const useWidhtScreen = () => {
  const widhtScreen = window.innerWidth
  useEffect(() => {
    if (widhtScreen < 500) {
      document.querySelector('.contPlayerController').style.display = 'none'
    }
  }, [widhtScreen])
}
