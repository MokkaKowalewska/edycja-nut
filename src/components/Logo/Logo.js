import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoStyled = styled.span`
  position: absolute;
  z-index: 999;
  margin: 20px 0 0 50px;
  font-family: "Righteous", serif;
  font-size: 3rem;

  a {
    text-decoration: none;
    color: white;
  }
`

const Logo = () => (
  <LogoStyled>
    <Link to="/">edycja nut</Link>
  </LogoStyled>
)

export default Logo
