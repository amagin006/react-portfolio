import React from 'react';
import { aboutImages } from  '../../constants/workContentInfo';
import Delighters from '../common/delighters'

class About extends React.Component {

  componentDidMount() {
    Delighters.init();
  }
    
  render() {
    return (
      <>
        <div className="who-sec">
          <div className="a-section1" data-delighter>
            <div className="section-inner" data-delighter>
              <div className="bg-1 left" data-delighter></div>
              <span>scroll</span>
            </div>
          </div> 

          <div className="a-section2">
            <div className="wrapper">
              <div className="photo_1" data-delighter>
                <img src={aboutImages.find(image => image.itemNum === 1).url} alt=""/>
              </div>
            </div>
          </div>
          <div className="a-section3" data-delighter>
            <div className="bg-3" data-delighter>
              <div className="bg-3-c bg-3-1"></div>
              <div className="bg-3-c bg-3-2"></div>
              <div className="bg-3-c bg-3-3"></div>
              <div className="bg-3-c bg-3-4"></div>
              <div className="bg-3-c bg-3-5"></div>
              <div className="a-section3-box fl fl-bt">
                <div className="skill-box fl fl-column  fl-ju-ce">
                  <h3 className="skill-t title line-1">Skills</h3>
                  <div className="skill-t line-2">iOS / Swift / Objective-C / Java / Android</div>
                  <div className="skill-t line-3">JavaScript / React / Redux / HTML5 / CSS3 </div>
                  <div className="skill-t line-4">WordPress /  jQuery / SASS / Webpack / Gulp</div>
                  <div className="skill-t line-5">Git / pug / Bootstrap / AdobeXD / ...and more</div>
                  <div className="skill-disc">
                    <div className="disc-title">What I Aim</div>
                    <p>My Goal is not only builting web and app, also understanding businesses and creating good user expriences.</p>
                  </div>

                <div className="ref-box">
                  <a className="linkedin" href="https://www.linkedin.com/in/shota-iwamoto001/">
                    linkedin
                  </a>
                  <a className="mail" href="mailto:shota.iwamoto.shota@gmail.com">Mail</a>
                  <a className="github" href="https://github.com/amagin006">GitHub</a>
                </div>
                </div>
                <div className="disc-box"></div>
              </div>
            </div>
            <div className="who-text-block" data-delighter>
              <h2>About</h2>
              <p>Hi, I’m Shota Iwamoto from Japan. <br />
                Currently, I’ve learned Web & Mobile development in Vancouver, Canada.</p>
              <p>I’m passionate about solve problem and writing code that works well and good performance. </p>
              <p>I’ve worked as a freelance remotely for agencies, collaborated with people for businesses.  I always eager to learn more and communicate with people.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About