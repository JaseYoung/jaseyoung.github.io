import React from 'react'
import '../assets/scss/main.scss'

import Bio from './bio'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Bio />
        {children}
      </div>
    )
  }
}

export default Template
