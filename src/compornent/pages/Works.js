import React from 'react';
import { Link } from 'react-router-dom';

import { workContents } from  '../../constants/workContentInfo';

class Work extends React.Component {
  state = {
    visibleItem: 1,
    bottom: false,
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
      this.setState({ 
        visibleItem: 1,
        bottom: false,
       })
    } else if (scrolled < 1400) {
      this.setState({ 
        visibleItem: 2,
        bottom: false,
       })
    } else if (scrolled < 2100) {
      this.setState({ 
        visibleItem: 3,
        bottom: true,
       })
    }
  }

  render() {
    const work = Object.values(workContents).filter(works=> {
      return this.state.visibleItem === works.itemNum
    })
    const { url, imgUrl, title, disc, text } = work[0]
    
    return (
      <div className="work-content">
        <div className="work-box">
          <Link to={`${this.props.location.pathname}/${url}`}>
            <div className="work-item-box">
              <img src={imgUrl} alt=""/>
              <div className="w-title-box">
                <div className="title">{title}</div>
                <div className="disc">{disc}</div>
                <div className="text">{text}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="work-item-wrapper">
          <div style={{ opacity: this.state.bottom ? 0 : 1 }} className="w-scroll-arrow">scroll</div>
        </div>
      </div>
    )
  }
}

export default Work