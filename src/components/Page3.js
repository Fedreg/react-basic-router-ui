import React from 'react'
import glamorous from "glamorous"
import { Table } from "./PaginatingTable"

const Page3Container = glamorous.div({
  margin: "15px",
  textAlign: "left",
  fontSize: "16px",
})

const DataContainer = glamorous.div({
  position: "relative",
  padding: "25px",
  display: "flex",
  height: "180px",
  margin: "20px",
  backgroundColor: "#ddd",
  border: "1px solid #ccc",
},
(props) => ({
  width: props.half ? "50vw" : "92vw",
})
)

const InputContainer = (props) => {
  return(
    <div>
      <div>Input </div>
      <input style={{width: props.width, height: "25px", marginRight: "25px"}} />
    </div>
  )
}

const Button = (props) => {
  return <div style={{
    position: "absolute",
    bottom: "25px",
    right: props.right,
    width: "120px",
    border: "1px solid #666",
    backgroundColor: "#ddd",
    padding: "10px",
    color: "#222",
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center"
  }}>{props.text}
  </div>
}

export const Page3 = () => {
  return(
    <Page3Container>
      <DataContainer>
        <InputContainer width={"700px"} />
        <InputContainer width={"200px"} />
        <InputContainer width={"200px"} />
        <Button right={"50px"} text={"Submit"} />
        <Button right={"200px"} text={"Cancel"} />
      </DataContainer>
      <Table />
    </Page3Container>
  )
}