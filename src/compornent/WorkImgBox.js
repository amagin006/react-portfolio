import React from 'react';
import { Link } from 'react-router-dom';


class WorkImgBox extends React.Component {

  render() {
    const { imgUrl, url, title, disc, text } = this.props.work;
    return (
      <div className="work-item-box">
        <Link to={`${this.props.location.pathname}${url}`}>
          <img src={imgUrl} alt=""/>
          <div className="w-title-box">
            <div className="title">{title}</div>
            <div className="disc">{disc}</div>
            <div className="text">{text}</div>
          </div>
        </Link>
      </div>
    )
  };

}

export default WorkImgBox;