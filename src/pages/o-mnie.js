import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import PageHeading from "../components/PageHeading/PageHeading"

const ContentWrapper = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  align-items: center;
`

const BioParagraph = styled.p`
  margin: 30px;
`

const BioImage = styled.img`
  width: 40%;
`

const OMniePage = ({ data }) => (
  <>
    <PageHeading>{data.wordpressPage.acf.bioHeading}</PageHeading>
    <ContentWrapper>
      <BioParagraph>{data.wordpressPage.acf.bioParagraph}</BioParagraph>
      <BioImage src={data.wordpressPage.acf.bioImage.source_url} />
    </ContentWrapper>
  </>
)

export const query = graphql`
  query bioQuery {
    wordpressPage {
      acf {
        bioHeading
        bioParagraph
        bioImage {
          source_url
        }
      }
    }
  }
`

export default OMniePage
