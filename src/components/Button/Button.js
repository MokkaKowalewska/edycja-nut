import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const buttonColor = props => (props.white ? "#ffffff" : "#000000")

export const StyledButton = styled(Link)`
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
    cursor: pointer;
    background: ${buttonColor};
    color: ${props => (!props.white ? "#ffffff" : "#000000")};
  }
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.propTypes = {
  children: PropTypes.string,
}

export default Button
