import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="fl fl-bt">
          <li className="home"><NavLink activeStyle={{ color: 'red'}} exact to='/'>Home</NavLink></li>
          <li className="about"><NavLink activeStyle={{ color: 'red'}} to='/about'>About</NavLink></li>
          <li className="work"><NavLink activeStyle={{ color: 'red'}} to='/Work'>Work</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Header;