import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Jost", serif;

  a {
    text-decoration: none;
    color: ${props => props.color};
  }
`

const Logo = styled.span`
  font-family: "Righteous", serif;
  font-size: 3rem;
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

const NavigationListItem = styled.li`
  margin-left: 40px;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.4px;
  letter-spacing: 0.35px;
`

const Navigation = props => (
  <NavigationWrapper color={props.color}>
    <Logo>
      <Link to="/">edycja nut</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/oferta">oferta</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/cennik">cennik</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/kontakt">kontakt</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
