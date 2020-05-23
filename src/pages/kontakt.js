import React from "react"

import PageHeading from "../components/PageHeading/PageHeading"
import Button from "../components/Button/Button"

const Kontakt = () => (
  <>
    <PageHeading>Kto pyta, nie błądzi</PageHeading>
    <p>
      Każda partytura jest inna, każdy utwór to osobna historia. Pytaj, wycenię
      pracę jak najszybciej!
    </p>

    <Button to="mailto:woj.kowalewski@gmail.com">Zapytaj o stawki</Button>
  </>
)

export default Kontakt
