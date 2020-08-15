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
            <label htmlFor="signupDoctor__lastname">Lastname</label>
            <input type="name" id="signupDoctor__lastname" />
            <label htmlFor="signupDoctor__uname">Username</label>
            <input type="name" id="signupDoctor__uname" />
            <label htmlFor="signupDoctor__email">Email</label>
            <input type="name" id="signupDoctor__email" />
            <label htmlFor="signupDoctor__number">Phone Number</label>{' '}
            <input type="name" id="signupDoctor__number" />
            <label htmlFor="signupDoctor__password">Password</label>{' '}
            <input type="name" id="signupDoctor__password" />
            <label htmlFor="signupDoctor__cpassword">Confirm Password</label>{' '}
            <input type="name" id="signupDoctor__cpassword" />
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
