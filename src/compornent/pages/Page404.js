import React from 'react';

class Page404 extends React.Component {
  render() {
    return (
      <div className="notFound-page">
        <div className="notFound-bg">
          <div className="text-wrapper">
            <h2>404</h2>
            <p>Sorry...</p>
            <p>This is not the page you are looking for.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Page404;