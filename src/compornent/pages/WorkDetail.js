import React from 'react';
import { workContents } from  '../../constants/workContentInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
class Work1 extends React.Component {
  constructor() {
    super()
    library.add(faExternalLinkAlt);
  }

  itemDetail(propUrl) {
    const workItem = Object.values(workContents).filter(works => works.url === propUrl) 
    const { imgUrl, title, disc, discText, role, development, links } = workItem[0]
    return (
      <div className="work-detail-sec">
        <div className="work-detail-inner"></div>
        <div className="work-detail-bg">
          <div className="wd-hero-box" style={{ backgroundImage: `url(${imgUrl})` }}></div>
        </div>
        <div className="wd-discription-sec">
          <div className="wrapper">
            <div className="intro-sec">
              <h2>{title}<span>{disc}</span></h2>
              <div className="fl fl-bt">
                <div className="left">
                  <h3>OVERVIEW</h3>
                  <p>{discText}</p>
                </div>
                <div className="right">
                  <div className="wd-disc-text">
                    <h4>My role</h4>
                    <div className="role">{role}</div>
                  </div>
                  <div className="wd-disc-text">
                    <h4>Development</h4>
                    <div className="development">
                      <ul className="fl fl-wr">{development.map((item) => {
                          return <li key={item}>{item}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="wd-disc-text">
                    <h4>Web Site</h4>
                    <div className="web-site">
                      {Object.keys(links).map((link, i) => {
                        return <a href={links.link} key={i}>{link}<FontAwesomeIcon className="fa-link" icon={faExternalLinkAlt} /></a>
                      })}
                    </div>
                  </div>
                </div>
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