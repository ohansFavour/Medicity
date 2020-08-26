import React from 'react'
import { withRouter } from 'react-router-dom'
import Slide from 'react-reveal/Slide'

// Images
import Practitioners from '../../assets/images/practitioners.png'
import Phonebook from '../../assets/images/smartphone.svg'

// styles
import './Health.scss'

const Health = (props: any) => {
  const handleOnline = () => {
    props.history.push('/online-diagnosis')
  }

  return (
    <div className="health">
      <div className="health__main">
        <h3>What Concerns Do You Have About Your Health?</h3>
        <p>
          What concerns you about your health today? Check your symptoms and find out what could be
          causing them. It's fast, free and anonymous.
        </p>
        <button onClick={handleOnline}>
          <img src={Phonebook} alt="phone" />
          Start Checkup
        </button>
      </div>
      <Slide right duration={6000}>
        <div className="health__img">
          <img src={Practitioners} alt="medical-practioners" />
        </div>
      </Slide>
    </div>
  )
}

export default withRouter(Health)
