import React from 'react'

// images
import Diagnosis from '../../assets/images/online-diagnosis.svg'
import Ai from '../../assets/images/ai.svg'
// styles
import './DropDown.scss'

const DropDown = (): JSX.Element => {
  return (
    <div className="dropdown">
      <div className="dropdown__item">
        <img src={Diagnosis} alt="online-diagnosis" />
        <span>Online Diagnosis</span>
      </div>
      <div className="dropdown__item">
        <img src={Ai} alt="artificial Intelligence" />
        <span>AI Diagnosis</span>
      </div>
    </div>
  )
}


export default DropDown
