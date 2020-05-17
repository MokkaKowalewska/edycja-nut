import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ButtonStyled = styled.button`
  padding: 15px;
  border-radius: 20px;
  background: transparent;
  border: 2px solid #ffffff;
`

const Button = ({ children }) => <ButtonStyled>{children}</ButtonStyled>

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
