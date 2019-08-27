import React from 'react';
import WorkImgBox from '../WorkImgBox';

import { workContents } from  '../../constants/workContentInfo';

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

    return (
      <div className="work-content">
        <div className="work-item-wrapper">
          <div className="work-box">
            <WorkImgBox work={work[0]} location={this.props.location} />
          </div>
        </div>
      </div>
    )
  }
}

export default Work