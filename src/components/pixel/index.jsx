import React, { useEffect } from 'react'
import Container from './styled'

export default function Pixel() {
  const createPixel = () => {
    for (let i = 0; i < 100; i++) {
      const main = document.querySelector('main');
      const pixel = document.createElement('div');
      main.appendChild(pixel);
    }
  }

  useEffect(() => {
    createPixel();
  }, [])

  return (
    <Container>
    </Container>
  )
}
