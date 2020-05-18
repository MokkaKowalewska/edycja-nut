import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "../components/Button/Button"

const TextWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    margin: 0;
    font-family: "Righteous", serif;
    font-size: 15rem;
  }

  p {
    margin: 0 0 20px 0;
    font-size: 2.3rem;
  }
`

const StyledImage = styled(BackgroundImage)`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

const IndexPage = ({ data }) => {
  const backgroundFluidImageStack = [
    data.file.childImageSharp.fluid,
    `linear-gradient(rgba(61, 89, 131, 0.63), rgba(37, 34, 35, 0.53))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      fluid={backgroundFluidImageStack}
      backgroundColor={`#040e18`}
    >
      <TextWrapper>
        <h1>Nuty</h1>
        <p>to podstawa udanego koncertu. Nie powierzaj ich edycji byle komu.</p>
        <Button>sprawdź mnie</Button>
      </TextWrapper>
    </BackgroundImage>
  )
}

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2048) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
