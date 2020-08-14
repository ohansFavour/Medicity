import React from 'react'

import PractitionersDesktop from '../../assets/images/Health professional team-amico (1).svg'
import Practitioners from '../../assets/images/Health professional team-amico (1) (1).svg'

import './Signup.scss'

const SignupDoctor = () => {
  return (
    <div className="signupDoctor__container">
      <div className="signupDoctor">
        <img src={Practitioners} alt="practitioners" className="practitioners__mobile" />
        <img src={PractitionersDesktop} alt="practitioners" className="practitioners__desktop" />
        <div className="signupDoctor__main">
          <h1>Welcome!</h1>
          <p>Please only doctors are allowed to signup</p>
          <form>
            <label htmlFor="signupDoctor__name">Firstname</label>
            <input type="name" id="signupDoctor__name" />
            <label htmlFor="signupDoctor__name">Lastname</label>
            <input type="name" id="signupDoctor__name" />
            <label htmlFor="signupDoctor__name">Username</label>
            <input type="name" id="signupDoctor__name" />
            <label htmlFor="signupDoctor__name">Email</label>
            <input type="name" id="signupDoctor__name" />
            <label htmlFor="signupDoctor__name">Phone Number</label>{' '}
            <input type="name" id="signupDoctor__name" />
            <label htmlFor="signupDoctor__password">Password</label>{' '}
            <input type="name" id="signupDoctor__password" />
            <label htmlFor="signupDoctor__password">Confirm Password</label>{' '}
            <input type="name" id="signupDoctor__password" />
          </form>
          <div className="signupDoctor__doctor">
            <div className="signupDoctor__doctor-buttons">
              <button className="signupDoctor__button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignupDoctor
