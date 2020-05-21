import React from "react"
import PropTypes from "prop-types"
import { Match } from "@reach/router"
import styled from "styled-components"

import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"

const PageWrapper = styled.div`
  width: 100%;
  padding: 80px 50px 0;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Match path="/">
      {props =>
        props.match ? (
          <>
            <Navigation color={"#ffffff"} />
            {children}
          </>
        ) : (
          <>
            <Navigation color={"#000000"} />
            <PageWrapper>{children}</PageWrapper>
          </>
        )
      }
    </Match>
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
