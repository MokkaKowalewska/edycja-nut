import React from "react"
import styled from "styled-components"

import PageHeading from "../components/PageHeading/PageHeading"
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
  text-align: center;
`

const MailButton = styled(Button)`
  margin: 40px;
`

const Kontakt = () => (
  <>
    <PageHeading>Kto pyta, nie błądzi</PageHeading>
    <ContentWrapper>
      <p>
        Każda partytura jest inna, każdy utwór to osobna historia. Pytaj,
        wycenię pracę jak najszybciej!
      </p>

      <MailButton as="a" href="mailto:woj.kowalewski@gmail.com">
        Zapytaj o stawki
      </MailButton>
    </ContentWrapper>
  </>
)

export default Kontakt
