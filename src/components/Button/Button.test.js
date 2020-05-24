import React from "react"
import renderer from "react-test-renderer"

import Button from "./Button"

describe("IndexPage Button", () => {
  it("renders correctly", () => {
    const ButtonTest = renderer
      .create(
        <Button to="/o-mnie" white>
          sprawdź mnie
        </Button>
      )
      .toJSON()
    expect(ButtonTest).toMatchSnapshot()
  })
})

describe("Kontakt Button", () => {
  it("renders correctly", () => {
    const ButtonTest = renderer
      .create(
        <Button as="a" href="mailto:woj.kowalewski@gmail.com">
          Zapytaj o stawki
        </Button>
      )
      .toJSON()
    expect(ButtonTest).toMatchSnapshot()
  })
})
