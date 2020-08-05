import React from 'react'

// styles
import './AiDiagnosis.scss'

// images
import Apply from '../../assets/images/apply.svg'

const AiDiagnosis: React.FC = (): JSX.Element => {
  return (
    <div className="ai">
      <div className="ai__header">
        <h1>Artificial Intelligence Diagnosis</h1>
      </div>
      <div className="ai__main">
        <div className="ai__content">
          <p className="ai__liner">
            The AI-driven software is programmed to accurately spot signs of certain diseases in
            medical images such as MRIs, x-rays, and CT scans.
          </p>
          <p className="ai__desc">
            Here at medicity we apply AI to medical diagnosis which provides numerous benefits to
            the evolving of the healthcare industry. The AI-based software can tell whether a
            patient has a certain disease even before evident symptoms appear. The opportunity of
            deep learning technologies to analyze images and recognize patterns which the human eye
            can hardly detect opens up the potential for creating algorithms to help doctors
            diagnose specific diseases faster and more accurately. Also, this algorithms
            continuously learn, thus improving its resulting quality of guessing the right
            diagnosis.
          </p>
        </div>
        <div className="ai__cta-container">
          <div className="ai__cta">
            <h3>Apply as a Doctor</h3>
            <button>
              <img src={Apply} alt="apply" /> Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiDiagnosis
