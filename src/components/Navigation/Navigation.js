import React from "react"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Navigation = () => (
  <NavigationWrapper>
    <ul>
      <span>Edycja nut</span>
      <li>start</li>
      <li>oferta</li>
      <li>cennik</li>
      <li>kontakt</li>
    </ul>
  </NavigationWrapper>
)

export default Navigation
