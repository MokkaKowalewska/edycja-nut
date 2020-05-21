import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  min-height: 60vh;
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

const Card = ({ emoji, title, description }) => (
  <CardWrapper>
    <Emoji>{emoji}</Emoji>
    <h3>{title}</h3>
    <p>{description}</p>
  </CardWrapper>
)

Card.propTypes = {}

export default Card
