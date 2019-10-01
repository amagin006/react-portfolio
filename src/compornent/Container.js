import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from './common/ScrollToTop';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import WorksDetail from './pages/WorkDetail/WorkDetail'
import Page404 from './pages/Page404'


class Container extends React.Component {

  render() {
    return (
      <Route render={({ location }) =>  {
        return (
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="fade"
            timeout={1500}
            >
            <div className="m-content-box">
              <ScrollToTop>
                <Switch>
                  <Route exact path='/' component={Home} 
                    pageClass={() => {this.changePageClass()}}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/works' component={Works}/>
                  <Route exact path="/works/:url" component={WorksDetail}/>
                  <Route component={Page404} />
                </Switch>
              </ScrollToTop>
            </div>
          </CSSTransition>
        </TransitionGroup>
        )}
      }
      />
    );
  };
}

export default withRouter(Container);