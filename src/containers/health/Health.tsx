import React from 'react'

// Images
import Practitioners from '../../assets/images/practitioners.png'
import Phonebook from '../../assets/images/smartphone.svg'

// styles
import './Health.scss'

const Health = () => {
  return (
    <div className="health">
      <div className="health__main">
        <h3>What Concerns Do You Have About Your Health?</h3>
        <p>
          What concerns you about your health today? Check your symptoms and find out what could be
          causing them. It's fast, free and anonymous.
        </p>
        <button>
          <img src={Phonebook} alt="phone" />
          Start Checkup
        </button>
      </div>
      <div className="health__img">
        <img src={Practitioners} alt="medical-practioners" />
      </div>
    </div>
  )
}

export default Health
