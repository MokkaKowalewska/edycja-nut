import React from "react"
import styled from "styled-components"

import PageHeading from "../components/PageHeading/PageHeading"

const BioParagraph = styled.p`
  margin: 30px;
`

const OMniePage = () => (
  <>
    <PageHeading>Taki jestem</PageHeading>
    <BioParagraph>nutki, dużo nutek, piękne nutki!</BioParagraph>
  </>
)

export default OMniePage
