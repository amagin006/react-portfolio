import React from 'react';
import { workContents } from  '../../constants/workContentInfo'; 

class Work1 extends React.Component {
  itemDetail(url) {
    const workItem = Object.values(workContents).filter(works => works.url === url) 

    const { imgUrl, title, disc } = workItem[0]
    return (
      <div>
        <img src={imgUrl} alt=""/>
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