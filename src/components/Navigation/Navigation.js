import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Raleway", serif;

  a {
    text-decoration: none;
    color: #0b214b;
  }
`

const Logo = styled.span`
  font-family: "Playfair Display", serif;
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

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">Edycja nut</Link>
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
