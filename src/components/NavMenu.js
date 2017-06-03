import React from 'react';
import glamorous from "glamorous";
import { Link } from 'react-router-dom'
import Page1 from './Page1.js'
import Page2 from './Page2.js'
import Page3 from './Page3.js'
import Page4 from './Page4.js'
import Page5 from './Page5.js'

const NavMenuContainer = glamorous.div({
  position: "absolute",
  top: "40px",
  right: "-20px",
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  lineHeight: "40px",
  width: "200px",
  backgroundColor: "#ddd",
  textAlign: "center",
  transition: "all 0.3s ease"
})
  
export const NavIcon = glamorous.div({
  position: "absolute",
  top: "20px",
  right: "50px",
  width: "35px",
  border: "1px solid #222",
  padding: "8px",
  fontSize: "12px",
  cursor: "pointer",
  ":hover": { color: "red", borderColor: "red" }
})
const MenuWrapper = (bool) => {
  console.log("1",bool)
  bool = !bool
  console.log("2",bool)
  if (bool === true) return <div style={{transform: "scale(1,1)"}} />
  else return <div style={{transform: "scale(0,0)"}} />
  
}

const NavMenuItem = glamorous.span({
  color: "#222",
  cursor: "pointer",
  ":hover": { color: "red" }
})

export const NavMenu = (props) => {
  return(
    <NavIcon>MENU 
      <MenuWrapper>
        <NavMenuContainer> 
          {NavList.map( (item) => 
            { return <Link to={item.route} id={item.id}> { item.name } </Link> }
          )}
        </NavMenuContainer>
      </MenuWrapper>
    </NavIcon>
  )
}

export const NavList = [
  { name:'Page 1', id: 1, route:"/page1", component: Page1 } 
  , { name:'Page 2', id: 1, route:"/page2", component: Page2 } 
  , { name:'Page 3', id: 1, route:"/page3", component: Page3 } 
  , { name:'Page 4', id: 1, route:"/page4", component: Page4 } 
  , { name:'Page 5', id: 1, route:"/page5", component: Page5 } 
  ]
