import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Page404 from './Page404'
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
