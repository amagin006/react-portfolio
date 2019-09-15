import React from 'react';
import WorkImgBox from '../WorkImgBox';
import posed from 'react-pose';

import work1 from '../../img/work1.jpg';
import work2 from '../../img/work2.jpg';

const Box = posed.div({
  visible: { opacity: 1, delay: 600 },
  hidden: { opacity: 0 },
  transition: { duration: 3000 }
})

class Work extends React.Component {

  constructor(props) {
    super(props)
    const body = document.querySelector('body');
    body.className += ' noSidebar'
  }

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
    if (scrolled < 100 ) {
      this.setState({ visibleItem: 1 })
    } else if (scrolled < 500) {
      this.setState({ visibleItem: 2 })
    } else if (scrolled < 700) {
      this.setState({ visibleItem: 3 }) 
    }
  }

  render() {
    return (
      <div className="work-content">
        <div className="work-item-wrapper">
          <Box className="work-box" pose={ this.state.visibleItem === 1 ? 'visible' : 'hidden'}>
            <WorkImgBox img={work1}/>
          </Box>
          <Box className="work-box" pose={ this.state.visibleItem === 2 ? 'visible' : 'hidden'}>
            <WorkImgBox img={work2}/>
          </Box> 
          <Box className="work-box" pose={ this.state.visibleItem === 3 ? 'visible' : 'hidden'}>
            <WorkImgBox img={work1}/>
          </Box>
        </div>
        <div className="sample-box"></div>
      </div>
    )
  }
}

export default Work