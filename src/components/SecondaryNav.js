import React from 'react'
import glamorous from "glamorous"

const SecondaryHeader = glamorous.div({
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
  fontSize: "12px",
  backgroundColor: "#ddd",
  color: "#777",
  zIndex: "-20000",
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc"
})

const SecNavItem = glamorous.span({
    cursor: "pointer",
    ":hover": { color: "red"}
})

const SecondaryNav = () => {
  return(
    <SecondaryHeader>
      <SecNavItem>Link 1</SecNavItem>
      <SecNavItem>Link 2</SecNavItem>
      <SecNavItem>Link 3</SecNavItem>
    </SecondaryHeader>
  )
}

export default SecondaryNav 
