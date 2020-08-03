import React from 'react'

import Logo from '../../assets/images/logo.png'

import './footer.scss'

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <div className="footer__brand">
        <img src={Logo} alt="Medicity-logo" />
      </div>
      <div className="footer__links">
        <h4>Useful Links</h4>
        <span>About Us</span>
        <span>Services</span>
        <span>Careers</span>
      </div>
      <div className="footer__contact">
        <h4>Contact Us</h4>
        <div className="footer__item">
          <span className="footer__details">contact@medicity.com</span>
        </div>

        <div className="footer__item">
          <span className="footer__details">080xxxxxxxx</span>
        </div>

        <div className="footer__item">
          <span className="foote__details">
            3, Taiwo Street, Ajala Bustop, Ijaiye, Lagos State.
          </span>
        </div>
      </div>
    </div>
    <div className="accessories__container">
      <div className="accessories">
        <span>&copy;</span>2020 <span>Medicity</span>
      </div>
    </div>
  </div>
)

export default Footer
