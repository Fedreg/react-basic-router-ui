import React, { Component } from 'react'
import { NavMenu, NavList } from './components/NavMenu.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Page1 from './components/Page1.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App-header">
            <NavMenu></NavMenu>
          </div>
          {NavList.map( (item) => 
            { return <Route path={item.route} component={item.component}></Route>}
          )}
        </div>
      </Router>
    )
  }
}


export default App
