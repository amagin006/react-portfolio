import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props)
    const body = document.querySelector('body');
    body.classList.remove('noSidebar')
  }

  render() {
    return (
      <>
        <div className="main-visual">
          <div className="main-visual-wrapper">
            <div className="main-visual-title-block">
              <div className="title-top">Web & Mobile Developer</div>
              <h1>SHOTA IWAMOTO</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home