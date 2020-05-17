import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"

const TextWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
  object-fit: cover;
  object-position: top;
  width: 100vw;
  height: 100vh;
  filter: brightness(0.4);
`

const IndexPage = ({ data }) => (
  <>
    <TextWrapper>
      <h1>Napiszę Ci</h1>
      <p>nutki, dużo nutek, piękne nutki!</p>
      <Button>sprawdź ofertę</Button>
    </TextWrapper>
    <ImageWrapper src={data.file.publicURL} alt="" />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
    }
  }
`

export default IndexPage
