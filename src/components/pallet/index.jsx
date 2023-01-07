import React from 'react'
import Container from './styled'
import colors from '../../services/colors'

export default function Header() {

  return (
    <Container>
      {
        colors.map((cor) => <div style={{backgroundColor: cor}}></div>)
      }
    </Container>
  )
}
