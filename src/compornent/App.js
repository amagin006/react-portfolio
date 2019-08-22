import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Page404 from './pages/Page404'
import '../css/common.scss';

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
            <Route exact path='/work' component={Work}/>
            <Route component={Page404} />
          </Switch>
        </div> 
      </BrowserRouter>
    )
  }
  
}

export default App;
