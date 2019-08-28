import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../compornent/common/style.css';
import '../css/common.scss';
import Header from './header/Header';
import Continer from './Container';

class App extends React.Component {

  state = {
    overflow: false
  }

  onClick = () => {
    this.setState({overflow: true})
    setTimeout(() => {
      this.setState({overflow: false})
    }, 1500);
  }

  render() {

    console.log(this.state.overflow)
    return (
      <BrowserRouter>
        <div style={{ 
          overflow: this.state.overflow ? "hidden" : "none",
          height: this.state.overflow ? "100vh" : "auto",
        }}>
          <Header clickLinked={this.onClick} /> 
          <Continer />
        </div> 
      </BrowserRouter>
    )
  }
  
}

export default App;
