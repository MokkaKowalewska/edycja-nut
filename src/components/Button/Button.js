import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = ({ children, href }) => {
  const ButtonTag = href ? "a" : Link

  const ButtonStyled = styled(ButtonTag)`
    padding: 15px;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #ffffff;
    color: #ffffff;
    text-decoration: none;
  `

  return <ButtonStyled>{children}</ButtonStyled>
}

Button.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
}

export default Button
