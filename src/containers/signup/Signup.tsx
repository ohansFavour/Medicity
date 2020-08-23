import React, { useEffect, useContext, useState } from 'react'
// import Axios from 'axios'
import { withRouter } from 'react-router-dom'

// styles
import './Signup.scss'

// images
import Practitioners from '../../assets/images/signup-img.png'
import PractitionersDesktop from '../../assets/images/desktop-signin.png'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

// components

const Signup = (props: any) => {
  const [eoru, setEoru] = useState('')
  const [password, setPassword] = useState('')

  const { state, dispatch } = useContext(StoreContext)

  const handleChange = (event: any, func: any) => {
    func(event.target.value)
  }
  const disabled = !!!(eoru && password)

  const handleSubmit = async () => {
    dispatch({
      type: 'IS_LOADING',
    })
    try {
      // const data = await Axios({
      //   method: 'POST',
      //   url: 'https://hackathon-hospital.heroku.com/login/A12BQUST67',
      //   data: {
      //     userName: eoru,
      //     password: password,
      //   },
      // })

      dispatch({
        type: 'SET_USER',
        payload: eoru,
      })
      props.history.push('/dashboard')
    } catch (e) {
      alert(e)
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
    <div className="signup__container">
      <div className="signup">
        <img src={Practitioners} alt="practitioners" className="practitioners__mobile" />
        <img src={PractitionersDesktop} alt="practitioners" className="practitioners__desktop" />
        {state.isLoading ? (
          <Spinner />
        ) : (
          <div className="signup__main">
            <h1>Welcome!</h1>
            <p>Please login to you account</p>
            <form>
              <label htmlFor="signup__name">Username</label>{' '}
              <input
                type="name"
                id="signup__name"
                value={eoru}
                onChange={(e) => {
                  handleChange(e, setEoru)
                }}
              />
              <label htmlFor="signup__password">Password</label>{' '}
              <input
                type="password"
                id="signup__password"
                value={password}
                onChange={(e) => {
                  handleChange(e, setPassword)
                }}
              />
              <div className="signup__remember">
                <span className="signup__rememberme">
                  <input type="checkbox" id="signin-check" /> Remember me
                </span>
                <span className="signup__forgot">Forgot password?</span>
              </div>
            </form>
            <div className="signup__doctor">
              <div className="signup__doctor-buttons">
                <button
                  onClick={handleSubmit}
                  disabled={disabled}
                  className={`signup__button signup__button--background  ${
                    disabled ? 'disabled' : null
                  }`}
                >
                  Sign in
                </button>
                <button onClick={() => props.history.push('/sign-up')} className="signup__button">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default withRouter(Signup)
