import React from 'react';

class WorkImgBox extends React.Component {
  
  render() {
    return (
      <div className="work-item-box">
        <img src={this.props.img} alt=""/>
      </div>
    )
  }

}

export default WorkImgBox;