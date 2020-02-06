import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img src={avatar} alt="profile" />
          </div>
          <h1>
            <strong>Jason Young</strong>, a site <br />
            created for personal use
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
