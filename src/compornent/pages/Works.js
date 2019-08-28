import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { workContents } from  '../../constants/workContentInfo';
import Works1 from '../WorkItem/Work1'
import Works2 from '../WorkItem/Work2';
import Works3 from '../WorkItem/Work3';

class Work extends React.Component {

  state = {
    visibleItem: 1,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const scrolled = window.pageYOffset;
    if (scrolled < 700 ) {
      this.setState({ visibleItem: 1 })
    } else if (scrolled < 1400) {
      this.setState({ visibleItem: 2 })
    } else if (scrolled < 2100) {
      this.setState({ visibleItem: 3 })
    }
  }

  render() {
    const work = workContents.filter(work => {
      return this.state.visibleItem === work.itemNum
    })
    const { url, imgUrl, title, disc, text } = work[0]
    return (
      <div className="work-content">
        <div className="work-item-wrapper">
          <div className="work-box">
            <Route render={({ location }) =>  (
              <TransitionGroup>
                <CSSTransition
                        key={this.props.location.key}
                        classNames="fade"
                        timeout={300}
                      >
                  <Switch location={location}>
                    <Route exact path='/works'>
                      <Link to={`${this.props.location.pathname}${url}`}>
                        <div className="work-item-box">
                          <img src={imgUrl} alt=""/>
                          <div className="w-title-box">
                            <div className="title">{title}</div>
                            <div className="disc">{disc}</div>
                            <div className="text">{text}</div>
                          </div>
                        </div>
                      </Link>
                    </Route>
                    <Route exact path="/works/work1" component={Works1}/>
                    <Route exact path="/works/work2" component={Works2}/>
                    <Route exact path="/works/work3" component={Works3}/> 
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        </div>
      </div>
    )
  }
}

export default Work