import React from 'react';
import Delighters from '../common/delighters'

import { workContents } from  '../../constants/workContentInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
class Work1 extends React.Component {
  constructor() {
    super()
    library.add(faExternalLinkAlt);
  }

  componentDidMount() {
    Delighters.init();
  }

  itemDetail(propUrl) {
    const workItem = Object.values(workContents).filter(works => works.url === propUrl) 
    const { imgUrl, title, disc, discText, role, development, links, subImages } = workItem[0]
    return (
      <div className="work-detail-sec">
        <div className="work-detail-inner"></div>
        <div className="work-detail-bg">
          <div className="wd-hero-box" style={{ backgroundImage: `url(${imgUrl})` }}></div>
        </div>
        <div className="wd-discription-sec">
          <div className="wrapper">
            <div className="intro-sec">
              <h2 className="bottom" data-delighter>{title}<span>{disc}</span></h2>
              <div className="fl fl-bt fl-column-md">
                <div className="left-b wd-disc-text" data-delighter>
                  <h3 className="bottom">OVERVIEW</h3>
                  <p className="bottom">{discText}</p>
                </div>
                <div className="right-b">
                  <div className="wd-disc-text" data-delighter>
                    <h4 className="bottom">My role</h4>
                    <div className="role bottom">{role}</div>
                  </div>
                  <div className="wd-disc-text" data-delighter>
                    <h4 className="bottom">Development</h4>
                    <div className="development bottom">
                      <ul className="fl fl-wr">{development.map((item) => {
                          return <li key={item}>{item}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="wd-disc-text" data-delighter>
                    <h4 className="bottom">Web Site</h4>
                    <div className="web-site bottom">
                      {Object.keys(links).map((link, i) => {
                        return <a href={links[link]} key={i}>{link} : {links[link]}<FontAwesomeIcon className="fa-link" icon={faExternalLinkAlt} /></a>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="subImage-sec" data-delighter>
              <div className="w-subImage-box">
                {Object.keys(subImages).map((img, i) => {
                  return <img className="bottom" key={i} src={subImages[img]} alt={img}/>
                })}
              </div>
            </div>
          </div>
        </div>
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