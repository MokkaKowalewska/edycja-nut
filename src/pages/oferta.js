import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Card from "../components/Card/Card"
import PageHeading from "../components/PageHeading/PageHeading"

const CardsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 20px;
`

const Oferta = ({ data }) => (
  <>
    <PageHeading>Co możesz mi zlecić?</PageHeading>
    <CardsWrapper>
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
    </CardsWrapper>
  </>
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

export default Oferta
