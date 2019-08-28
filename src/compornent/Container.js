import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Page404 from './pages/Page404'


class Container extends React.Component {
  render() {
    return (
      <Route render={({ location }) =>  (
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="fade"
            timeout={1500}
            >
            <div className="m-content-box">
              <Switch location={location}>
                <Route exact path='/' component={Home} 
                  pageClass={() => {this.changePageClass()}}/>
                <Route exact path='/about' component={About}/>
                <Route path='/works' component={Works}/>
                <Route component={Page404} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  };
}

export default withRouter(Container);