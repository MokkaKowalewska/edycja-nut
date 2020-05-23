import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"

import PageHeading from "../components/PageHeading/PageHeading"

const ContentWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  margin-right: 40px;

  h3 {
    text-align: center;
    font-weight: bold;
  }
`

const BioParagraph = styled.p`
  margin: 30px 0;
`

const BioImage = styled.img`
  width: 40%;
`

const OMnie = ({ data }) => (
  <>
    <PageHeading>{data.wordpress.pageBy.bioFields.bioheading}</PageHeading>
    <ContentWrapper>
      <TextWrapper>
        <h3>{data.wordpress.pageBy.bioFields.bioname}</h3>

        {Object.values(data.wordpress.pageBy.bioFields.bioparagraphgroup).map(
          (bioParagraph, index) => {
            return <BioParagraph key={index}>{bioParagraph}</BioParagraph>
          }
        )}
      </TextWrapper>
      <BioImage src={data.wordpress.pageBy.bioFields.bioimage.sourceUrl} />
    </ContentWrapper>
  </>
)

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
  data: PropTypes.node,
}

export default OMnie
