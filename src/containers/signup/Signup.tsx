import React from 'react'

// styles
import './Signup.scss'

// images
import Practitioners from '../../assets/images/signup-img.png'
import PractitionersDesktop from "../../assets/images/desktop-signin.png";

// components

const Signup = () => {
  return (
    <div className="signup__container">
      <div className="signup">
        <img src={Practitioners} alt="practitioners" className="practitioners__mobile"/>
        <img src={PractitionersDesktop} alt="practitioners" className="practitioners__desktop"/>
        <div className="signup__main">
          <h1>Welcome!</h1>
          <p>Please login to you account</p>
          <form>
            <label htmlFor="signup__name">Email or Username</label>{' '}
            <input type="name" id="signup__name" />
            <label htmlFor="signup__password">Password</label>{' '}
            <input type="name" id="signup__password" />
            <div className="signup__remember">
              <span className="signup__rememberme">
                <input type="checkbox" id="signin-check"/> Remember me
              </span>
              <span className="signup__forgot">Forgot password?</span>
            </div>
          </form>
          <div className="signup__doctor">
            <div className="signup__doctor-buttons">
              <button className="signup__button signup__button--background">Sign in</button>
              <button className="signup__button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
