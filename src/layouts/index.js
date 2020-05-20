import React from "react"
import PropTypes from "prop-types"
import { Match } from "@reach/router"

import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Match path="/">
      {props =>
        props.match ? (
          <Navigation color={"#ffffff"} />
        ) : (
          <Navigation color={"#000000"} />
        )
      }
    </Match>

    {children}
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
