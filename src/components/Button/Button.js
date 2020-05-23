import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const buttonColor = props => (props.white ? "#ffffff" : "#000000")

const ButtonStyled = styled.a`
  display: block;
  padding: 15px;
  border-radius: 20px;
  background: transparent;
  border: 2px solid;
  border-color: ${buttonColor};
  color: ${buttonColor};
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${buttonColor};
    color: ${props => (!props.white ? "#ffffff" : "#000000")};
  }
`

const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
)

Button.propTypes = {
  children: PropTypes.string,
}

export default Button
