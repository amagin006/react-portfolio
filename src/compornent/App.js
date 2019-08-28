import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../compornent/common/style.css'
import '../css/common.scss';
import Header from './header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Page404 from './pages/Page404'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header /> 
          <Switch>
            <Route exact path='/' component={Home} 
              pageClass={() => {this.changePageClass()}}/>
            <Route exact path='/about' component={About}/>
            <Route path='/works' component={Works}/>
            <Route component={Page404} />
          </Switch>
        </div> 
      </BrowserRouter>
    )
  }
  
}

export default App;
