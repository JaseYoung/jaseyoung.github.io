import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://twitter.com/J5ONp" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/jaseyoung" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/jaseyoung"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Gatsby Starter Strata</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
