import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation color={"#818181"} />
    {children}
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
