import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="content__header">
        <div className="header" id="first__header">
          <div className="grid">
            <div className="content__grid">
              <div id="title">DEMO Streaming</div>
              <div id="login_btn__header">
                <a id="login" href="">Log in</a>
                <a id="btn" href="">Start your free trial</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header" id="second__header">
          <div className="grid">
            <div className="content__grid">
              <div id="subtitle">Popular Titles</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
