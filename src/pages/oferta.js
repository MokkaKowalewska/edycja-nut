import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Card from "../components/Card/Card"

const PageWrapper = styled.div`
  width: 100%;
  padding: 80px 50px 0;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 20px;
`

const OfertaPage = ({ data }) => (
  <PageWrapper>
    {data.allWordpressAcfCard.nodes.map(node => {
      //change below to unique key
      return (
        <Card
          key={node.acf.card_title}
          emoji={node.acf.card_emoji}
          title={node.acf.card_title}
          description={node.acf.card_description}
        />
      )
    })}
  </PageWrapper>
)

export const query = graphql`
  query CardQuery {
    allWordpressAcfCard {
      nodes {
        acf {
          card_emoji
          card_title
          card_description
        }
      }
    }
  }
`

export default OfertaPage
