import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  height: 60vh;
  width: 25vw;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 20px 40px -5px lightgrey;
  color: black;
  text-align: center;
`

const Emoji = styled.figure`
  margin: 0;
  font-size: 10rem;
`

const Card = ({}) => (
  <CardWrapper>
    <Emoji>🎹</Emoji>
    <h3>Przepisywanie nut</h3>
    <p>
      Możesz zlecić mi przepisywanie nut. Generalnie nie wiem dokładnie, o co
      pięć, ale zrobię po prostu nutki jak ta lala.
    </p>
  </CardWrapper>
)

Card.propTypes = {}

export default Card
