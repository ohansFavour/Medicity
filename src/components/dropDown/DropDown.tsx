import React from 'react'
import { withRouter } from 'react-router-dom'

// images
import Diagnosis from '../../assets/images/online-diagnosis.svg'
import Ai from '../../assets/images/ai.svg'
// styles
import './DropDown.scss'

const DropDown = (props: any): JSX.Element => {
  const handleOnline = () => {
    props.history.push('/online-diagnosis')
  }
  const handleAI = () => {
    props.history.push('/ai-diagnosis')
  }
  return (
    <div className="dropdown">
      <div className="dropdown__item">
        <img src={Diagnosis} alt="online-diagnosis" />
        <span onClick={handleOnline}>Online Diagnosis</span>
      </div>
      <div className="dropdown__item">
        <img src={Ai} alt="artificial Intelligence" />
        <span onClick={handleAI}>AI Diagnosis</span>
      </div>
    </div>
  )
}

export default withRouter(DropDown)
