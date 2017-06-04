import React from 'react'
import glamorous from "glamorous"

const Page2Container = glamorous.div({
  margin: "15px",
  textAlign: "left",
  fontSize: "16px",
})

const DataContainer = glamorous.div({
  display: "flex",
  height: "180px",
  margin: "20px",
  backgroundColor: "#ddd",
  border: "1px solid #ccc",
  lineHeight: "180px"
},
(props) => ({
  width: props.half ? "50vw" : "92vw",
})
)

const DataItem = glamorous.span({
    cursor: "pointer",
    padding: "60px",
    ":hover": { color: "red"}
})

export const Page2 = () => {
  return(
    <Page2Container>
      <DataContainer half>
        {['this', 'that', 'other', 'else'].map((item) => {
          return <DataItem>{item}</DataItem> })}
      </DataContainer>
      <DataContainer half />
      <DataContainer />
    </Page2Container>
  )
}
