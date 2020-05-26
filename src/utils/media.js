import { css } from "styled-components"

const sizes = {
  phone: 767,
  tablet: 1023,
  desktop: 2000,
}

export default Object.keys(sizes).reduce((acc, px) => {
  acc[px] = (...args) => css`
    @media (max-width: ${sizes[px]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
