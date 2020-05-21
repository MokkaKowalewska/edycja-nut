import React from "react"
import styled from "styled-components"
import Card from "../components/Card/Card"

const PageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 20px;
`

const OfertaPage = () => (
  <PageWrapper>
    <Card />
    <Card />
    <Card />
  </PageWrapper>
)

export default OfertaPage
