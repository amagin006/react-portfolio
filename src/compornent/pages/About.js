import React from 'react';
import photo_1 from '../../img/tvb_0114.jpg'

class About extends React.Component {

  render() {
    return (
      <>
        <div className="who-sec">
          <div className="wrapper">
            <div className="photo_1"><img src={photo_1} alt=""/></div>
            <div className="who-text-block">
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