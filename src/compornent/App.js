import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../compornent/common/style.css'
import '../css/common.scss';
import Header from './header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Works1 from './WorkItem/Work1';
import Works2 from './WorkItem/Work2';
import Works3 from './WorkItem/Work3';
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
            <Route exact path='/works' component={Works}/>
            <Route exact path='/works/work1' component={Works1}/>
            <Route exact path='/works/work2' component={Works2}/>
            <Route exact path='/works/work3' component={Works3}/>
            <Route component={Page404} />
          </Switch>
        </div> 
      </BrowserRouter>
    )
  }
  
}

export default App;
