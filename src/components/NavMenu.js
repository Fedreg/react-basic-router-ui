import React from 'react';
import { Link } from 'react-router-dom'
import { Page1 } from './Page1.js'
import { Page2 } from './Page2.js'
import { Page3 } from './Page3.js'
import { Page4 } from './Page4.js'
import { Page5 } from './Page5.js'

export const NavMenuContainer = (props) => {
  return(
    <div className="Nav-menu-container" style={{transform: OpenOrCloseNav(props.navState)}}>
      { NavList.map( (item) => { 
        return <Link className="Nav-menu-item" to={item.route} key={item.id}> {item.name} </Link> }
      )}
    </div>
  )
}

export const OpenOrCloseNav = (bool) => {
  bool = !bool
  if (bool === true ) return "translateY(0)"
  else return "translateY(-500px)"
}

export const NavList = [
  { name:'Page 1', id: 1, route:"/page1", component: Page1 } 
  , { name:'Page 2', id: 2, route:"/page2", component: Page2 } 
  , { name:'Page 3', id: 3, route:"/page3", component: Page3 } 
  , { name:'Page 4', id: 4, route:"/page4", component: Page4 } 
  , { name:'Page 5', id: 5, route:"/page5", component: Page5 } 
  ]
