import React from 'react';
import work1 from '../../img/Iphone_Mockup_V1.jpg'

class Work extends React.Component {

  render() {
    return (
      <>
        <div className="work-content">
          <div className="work-item-wrapper">
            <div className="work-item-box">
              <img src={work1} alt=""/>
            </div>
          </div>
          <div className="sample-box"></div>
        </div>
      </>
    )
  }
}

export default Work