import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"

import PageHeading from "../components/PageHeading/PageHeading"
import media from "../utils/media"

const ContentWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-items: center;

  ${media.tablet`
    flex-direction: column;
  `}
`

const TextWrapper = styled.div`
  ${media.desktop`
margin-right: 40px;
  `}

  h3 {
    text-align: center;
    font-weight: bold;
  }
`

const BioParagraph = styled.p`
  margin: 30px 0;
`

const BioImage = styled.img`
  ${media.desktop`
    width: 40%;
  `}
  margin: 0;
  ${media.tablet`
    width: 70vw;
  `}
`

const OMnie = ({
  data: {
    wordpress: {
      pageBy: {
        bioFields: { bioheading, bioname, bioparagraphgroup, bioimage },
      },
    },
  },
}) => {
  return (
    <>
      <PageHeading>{bioheading}</PageHeading>
      <ContentWrapper>
        <TextWrapper>
          <h3>{bioname}</h3>

          {Object.values(bioparagraphgroup).map((bioParagraph, index) => {
            return <BioParagraph key={index}>{bioParagraph}</BioParagraph>
          })}
        </TextWrapper>
        <BioImage src={bioimage.sourceUrl} />
      </ContentWrapper>
    </>
  )
}

// I didn't want to spend money on Repeater field, that's why...
export const query = graphql`
  {
    wordpress {
      pageBy(uri: "o-mnie") {
        bioFields {
          bioheading
          bioname
          bioparagraphgroup {
            bioparagraph0
            bioparagraph1
            bioparagraph2
            bioparagraph3
            bioparagraph4
            bioparagraph5
            bioparagraph6
            bioparagraph7
            bioparagraph8
          }
          bioimage {
            sourceUrl
            sourceUrlSharp {
              childImageSharp {
                fluid {
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

OMnie.propTypes = {
  bioheading: PropTypes.string,
  bioname: PropTypes.string,
  bioparagraphgroup: PropTypes.object,
  bioimage: PropTypes.object,
}

export default OMnie
