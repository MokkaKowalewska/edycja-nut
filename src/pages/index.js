import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import Typing from "react-typing-animation"
import styled from "styled-components"
import Button from "../components/Button/Button"

const TextWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #ffffff;

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

const Background = styled(BackgroundImage)`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

const IndexPage = ({
  data: {
    wordpress: {
      pageBy: {
        homeFields: { title, subtitle, backgroundimage },
      },
    },
  },
}) => {
  const backgroundFluidImageStack = [
    backgroundimage.sourceUrlSharp.childImageSharp.fluid,
    `linear-gradient(rgba(61, 89, 131, 0.63), rgba(37, 34, 35, 0.53))`,
  ].reverse()

  return (
    <Background
      Tag="section"
      fluid={backgroundFluidImageStack}
      backgroundColor={`#040e18`}
    >
      <TextWrapper>
        <h1>{title}</h1>
        <Typing speed={20}>
          <p>{subtitle}</p>
        </Typing>
        <Button to="/o-mnie" white>
          sprawdź mnie
        </Button>
      </TextWrapper>
    </Background>
  )
}

export const query = graphql`
  query MyQuery {
    wordpress {
      pageBy(uri: "strona-glowna") {
        homeFields {
          title
          subtitle
          backgroundimage {
            sourceUrl
            sourceUrlSharp {
              childImageSharp {
                fluid(quality: 100) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundimage: PropTypes.object,
}

export default IndexPage
