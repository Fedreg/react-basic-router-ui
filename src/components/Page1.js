import React from 'react'
import glamorous from "glamorous"

const Page1Container = glamorous.div({
  marginTop: "200px",
  textAlign: "center",
  fontSize: "60px"
})

export const Page1 = () => {
  return <Page1Container>Main Content</Page1Container>
}
