import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../compornent/common/style.css';
import '../css/common.scss';
import Header from './header/Header';
import Continer from './Container';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header /> 
          <Continer />
        </div> 
      </BrowserRouter>
    )
  }
  
}

export default App;
