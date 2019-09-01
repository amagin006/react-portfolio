import React from 'react';
import { NavLink } from 'react-router-dom';
import mail from '../../img/mail-icon.png';
import linkedin from '../../img/linkedin-icon.png';
import github from '../../img/github-icon.png';

class Header extends React.Component {
  state = {
    menuClick: false,
  }

  burgerClick = () => {
    this.setState({
      menuClick: !this.state.menuClick,
    })
  }

  menuListClickDone = () => {
    this.props.clickLinked();
    this.burgerClick();
  }

  render() {
    return (
      <div className={`header ${this.state.menuClick && "nav-active"}`}>
        <ul className="fl fl-bt fl-column-md">
          <li className="home"><NavLink onClick={this.menuListClickDone} activeStyle={{ color: 'red'}} exact to='/'>Home</NavLink></li>
          <li className="about"><NavLink onClick={this.menuListClickDone} activeStyle={{ color: 'red'}} exact to='/about'>About</NavLink></li>
          <li className="work"><NavLink onClick={this.menuListClickDone} activeStyle={{ color: 'red'}} to='/works'>Work</NavLink></li>
        </ul>
        <div className="h-ref-box">
          <a className="mail" href="mailto:shota.iwamoto.shota@gmail.com" onClick={this.burgerClick}>
            <img src={mail} alt="mail"/>
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/shota-iwamoto001/" onClick={this.burgerClick}>
            <img src={linkedin} alt="linkedin"/>
          </a>
          <a className="github" href="https://github.com/amagin006" onClick={this.burgerClick}>
            <img src={github} alt="github"/>
          </a>
        </div>
        <div className={`burger-con ${this.state.menuClick && "active"}`} onClick={this.burgerClick}>
          <div className="burger-inner">
            <div className={`burger ${this.state.menuClick && "burger-active"}`}></div>
          </div>
          <div className={`nav-bg ${this.state.menuClick && "nav-bg-active"}`}></div>
        </div>
      </div>
    )
  }
}

export default Header;