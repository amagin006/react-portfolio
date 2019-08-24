import React from 'react';
import { aboutImages } from  '../../constants/workImages';
import Delighters from '../common/delighters'

class About extends React.Component {

  componentDidMount() {
    Delighters.init();
  }
    
  render() {
    return (
      <>
        <div className="who-sec">
          <div className="w-section1">
            <div className="bg-1 left" data-delighter></div>
          </div> 

          <div className="w-section2">
            <div className="wrapper">
              <div className="photo_1" data-delighter>
                <img src={aboutImages.find(image => image.itemNum === 1).url} alt=""/>
              </div>
            </div>
          </div>
          <div className="w-section3" data-delighter>
            <div className="bg-3" data-delighter>
              <div className="bg-3-c bg-3-1"></div>
              <div className="bg-3-c bg-3-2"></div>
              <div className="bg-3-c bg-3-3"></div>
              <div className="bg-3-c bg-3-4"></div>
              <div className="bg-3-c bg-3-5"></div>
            </div>
            <div className="who-text-block" data-delighter>
              <h2>Who I am</h2>
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