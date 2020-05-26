import React, { useState } from "react"
import PropTypes from "prop-types"
import { Match } from "@reach/router"
import styled, { css } from "styled-components"

import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import Logo from "../components/Logo/Logo"

const PageWrapper = styled.div`
  width: 100%;
  ${({ color }) => color === "#000000" && `padding: 80px 50px 0;`}
`

const MainLayout = ({ children }) => {
  const [color, changeColor] = useState("#ffffff")

  return (
    <>
      <GlobalStyle />
      <Match path="/">
        {props => {
          if (props.match) {
            changeColor("#ffffff")
          } else {
            changeColor("#000000")
          }
        }}
      </Match>
      <Logo />
      <Navigation color={color} />
      <PageWrapper color={color}>{children}</PageWrapper>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
