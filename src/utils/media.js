import { css } from "styled-components"

const sizes = {
  phone: 450,
  tablet: 768,
  desktop: 1024,
}

export default Object.keys(sizes).reduce((acc, px) => {
  acc[px] = (...args) => css`
    @media (min-width: ${sizes[px]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
