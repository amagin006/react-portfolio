import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="fl fl-bt">
          <li className="home"><NavLink onClick={this.props.clickLinked} activeStyle={{ color: 'red'}} exact to='/'>Home</NavLink></li>
          <li className="about"><NavLink onClick={this.props.clickLinked} activeStyle={{ color: 'red'}} exact to='/about'>About</NavLink></li>
          <li className="work"><NavLink onClick={this.props.clickLinked} activeStyle={{ color: 'red'}} to='/works'>Work</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Header;