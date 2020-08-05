import React from 'react'

// styles
import './OnlineDiagnosis.scss'

// images
import Check from '../../assets/images/check.svg'
import SmartPhone from '../../assets/images/smartphone.svg'
import Practitioners from '../../assets/images/Online test practitioners.svg'

const OnlineDiagnosis: React.FC = (): JSX.Element => {
  return (
    <div className="diagnosis__container">
      <img src={Practitioners} alt="practitioners" />
      <div className="diagnosis">
        <h1>Online Diagnosis</h1>
        <p>
          Our symptom checker is quick and easy to use it provides you with fast, efficient and
          accurate health assessment.
        </p>
        <div className="diagnosis__step">
          <span className="diagnosis__label">1</span> <span>Enter your symptoms</span>
        </div>
        <div className="diagnosis__step">
          <span className="diagnosis__label">2</span>{' '}
          <span>Answer some short simple questions</span>
        </div>
        <div className="diagnosis__step">
          <span className="diagnosis__label">3</span>{' '}
          <span>And that's all! You are done your result will reveal.</span>
        </div>
        <div className="diagnosis__category">
          <div>
            <img src={Check} alt="check" /> Causes of symptom
          </div>
          <div>
            <img src={Check} alt="check" /> Diagnosis based on symptoms
          </div>
          <div>
            <img src={Check} alt="check" /> Suggested medication and lab tests
          </div>
        </div>
        <div className="diagnosis__start">
          {' '}
          <h3>Feeling ill? Try it now</h3>
          <button>
            <img src={SmartPhone} alt="smart_phone" />
            Start Check Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnlineDiagnosis
