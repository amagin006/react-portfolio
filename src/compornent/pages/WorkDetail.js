import React from 'react';
import { workContents } from  '../../constants/workContentInfo'; 

class Work1 extends React.Component {

  itemDetail(propUrl) {
    const workItem = Object.values(workContents).filter(works => works.url === propUrl) 

    const { imgUrl, title, disc,  } = workItem[0]
    return (
      <div className="work-detail-sec">
        <div className="work-detail-inner"></div>
        <div className="work-detail-bg">
          <div className="wd-hero-box" style={{ backgroundImage: `url(${imgUrl})` }}>
            {/* <img src={imgUrl} alt=""/> */}
          </div>
        </div>
        <div>{disc}</div>
        <div>{title}</div>
      </div> 
    )
  }

  render() {
    const {url} = this.props.match.params;
    return (
      <div>{this.itemDetail(url)}</div>
    )
  }
}

export default Work1;