import React from 'react'
import { withRouter } from 'react-router-dom'

// styles
import './footer.scss'

const Footer = (props: any) => {
  const handleOnline = () => {
    props.history.push('/online-diagnosis')
  }

  return (
    <div className="footer">
      <div className="footer__intro">
        <p>Want to take a quick online health examination ? </p>
        <button onClick={handleOnline}>Get Examined</button>
      </div>
      <div className="footer__main">
        <div className="footer__medicity">
          <h3>Contact</h3>
          <span>2, taiwo street, ajala bustop, Lagos, Nigeria.</span>
          <span>contact@medicity.com</span>
          <span>08068239121</span>
        </div>
        <div className="footer__links">
          <h3>Company</h3>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
        <div className="footer__newsletter">
          <h3>Don't miss out</h3>
          <p>sign up for our weekly health tips</p>
          <div className="footer__input">
            <input name="footer-input" placeholder="Email" />
            <button className="footer__button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Footer)
