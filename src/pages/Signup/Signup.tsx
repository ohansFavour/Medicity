import React, { useState, useContext, useEffect } from 'react'
// import Axios from 'axios'
import { withRouter } from 'react-router-dom'

import PractitionersDesktop from '../../assets/images/Health professional team-amico (1).svg'
import Practitioners from '../../assets/images/Health professional team-amico (1) (1).svg'

import './Signup.scss'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

const SignupDoctor = (props: any) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const { state, dispatch } = useContext(StoreContext)

  const handleChange = (event: any, func: any) => {
    func(event.target.value)
  }
  const disabled = !!!(
    firstname &&
    lastname &&
    username &&
    email &&
    phone &&
    password &&
    password === cpassword
  )

  const handleSubmit = async () => {
    // dispatch({
    //   type: 'IS_LOADING',
    // })
    try {
      // await Axios({
      //   method: 'POST',
      //   url: 'https://hackaton-hospital.herokuapp.com/save-doctor/A12BQUST67',
      //   data: {
      //     firstName: firstname,
      //     lastName: lastname,
      //     userName: username,
      //     email: email,
      //     phoneNumber: phone,
      //     password: password,
      //     roles: 'doctor',
      //   },
      // })
      props.history.push('/sign-in')
    } catch (e) {
      alert(e)
    } finally {
      dispatch({
        type: 'NOT_LOADING',
      })
    }
  }
  useEffect(() => {
    dispatch({
      type: 'NOT_LOADING',
    })
  }, [dispatch])

  return (
    <div className="signupDoctor__container">
      <div className="signupDoctor">
        <img src={Practitioners} alt="practitioners" className="practitioners__mobile" />
        <img src={PractitionersDesktop} alt="practitioners" className="practitioners__desktop" />
        {state.isLoading ? (
          <Spinner />
        ) : (
          <div className="signupDoctor__main">
            <h1>Welcome!</h1>
            <p>Please only doctors are allowed to signup</p>
            <form>
              <div className="names">
                <div className="first">
                  <label htmlFor="signupDoctor__name">Firstname</label>
                  <input
                    type="name"
                    id="signupDoctor__name"
                    value={firstname}
                    onChange={(e) => {
                      handleChange(e, setFirstname)
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="signupDoctor__lastname">Lastname</label>
                  <input
                    type="name"
                    id="signupDoctor__lastname"
                    value={lastname}
                    onChange={(e) => {
                      handleChange(e, setLastname)
                    }}
                  />
                </div>
              </div>
              <label htmlFor="signupDoctor__uname">Username</label>
              <input
                type="name"
                id="signupDoctor__uname"
                value={username}
                onChange={(e) => {
                  handleChange(e, setUsername)
                }}
              />
              <label htmlFor="signupDoctor__email">Email</label>
              <input
                type="name"
                id="signupDoctor__email"
                value={email}
                onChange={(e) => {
                  handleChange(e, setEmail)
                }}
              />
              <label htmlFor="signupDoctor__number">Phone Number</label>{' '}
              <input
                type="name"
                id="signupDoctor__number"
                value={phone}
                onChange={(e) => {
                  handleChange(e, setPhone)
                }}
              />
              <label htmlFor="signupDoctor__password">Password</label>{' '}
              <input
                type="password"
                id="signupDoctor__password"
                value={password}
                onChange={(e) => {
                  handleChange(e, setPassword)
                }}
              />
              <label htmlFor="signupDoctor__cpassword">Confirm Password</label>{' '}
              <input
                type="password"
                id="signupDoctor__cpassword"
                value={cpassword}
                onChange={(e) => {
                  handleChange(e, setCpassword)
                }}
                className={`${password === cpassword ? '' : 'colorIt'}`}
              />
              <div className="signupDoctor__doctor">
                <div className="signupDoctor__doctor-buttons">
                  <button
                    onClick={handleSubmit}
                    disabled={disabled}
                    className={` signupDoctor__button ${disabled ? 'disabled' : null}`}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
export default withRouter(SignupDoctor)
