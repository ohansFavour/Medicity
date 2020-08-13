import React from 'react'

import Accept from '../../assets/images/Accept terms.svg'

import "./Terms.scss"

const Terms = () => {
  return (
    <div className="terms">
      <img src={Accept} alt="accept terms and conditions" />
      <div className="terms__main">
        <h2>Terms of Service</h2>
        <p>Please read and accept before using this application</p>
        <ul>
          <li>
            <span>Checkup is not for full diagnosis:</span> If having doubts and need medication
            please contact a doctor
          </li>
          <li>
            <span>Do not use in the case of emergencies</span>: In cases of health emergencies
            please call the hospital emergency number close to you
          </li>
          <li>
            <span>Your data is safe:</span> Information that is provided is anonymous and is not
            shared with anyone
          </li>
        </ul>
        <div className="terms__acceptance">
          <input type="checkbox" />
          <p>
            I have <span>read</span> the <span>terms and conditions</span> and also{' '}
            <span>Privacy policies</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms
