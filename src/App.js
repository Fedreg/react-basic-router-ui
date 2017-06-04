import React, { Component } from 'react'
import { NavMenuContainer, NavList } from './components/NavMenu'
import SecondaryNav from './components/SecondaryNav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { navOpen: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }))
  }
  render() {
    return (
      <Router>
        <div>
          <div className="App-header">
            <span>U.S. Army Corps of Engineers</span>
          </div>
          <NavMenuContainer navState={this.state.navOpen} />
          <div className="Nav-icon" onClick={this.handleClick}>{this.state.navOpen}MENU</div>
          <SecondaryNav />
          {NavList.map((item) =>
            { return <Route key={item.id} path={item.route} component={item.component}></Route> }
          )}
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App
