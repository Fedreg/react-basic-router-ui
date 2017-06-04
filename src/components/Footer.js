import React from 'react'
import glamorous from "glamorous"

const FooterContainer = glamorous.div({
  position: "absolute",
  bottom: "0",
  width: "100vw",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
  fontSize: "12px",
  backgroundColor: "#ddd",
  color: "#777",
  borderTop: "1px solid #ccc",
})

const FooterItem = glamorous.span({
    cursor: "pointer",
    ":hover": { color: "red"}
})

const Footer = () => {
  return(
    <FooterContainer>
      <FooterItem>Link 1</FooterItem>
      <FooterItem>Link 2</FooterItem>
      <FooterItem>Link 3</FooterItem>
    </FooterContainer>
  )
}

export default Footer
