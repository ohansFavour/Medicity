import React from 'react'

import './DiagnosisStart.scss'

import Doctor from '../../assets/images/Online Doctor-rafiki.svg'

const DiagnosisStart = () => {
  return (
    <div className="diagnosis-start">
     <div className="diagnosis-start__image"><img src={Doctor} alt="practitioners" /></div> 
      <div className="diagnosis-start__main">
        <h2>Hey There!</h2>
        <p>
          You are about go through a short, safe and anonymous health check up. Your answers will be
          carefully and efficiently analyzed and you will learn about possible causes of those
          symptoms and for light symptoms you would be giving descriptions about the medications
          that should be taken.
        </p>
      </div>
    </div>
  )
}

export default DiagnosisStart