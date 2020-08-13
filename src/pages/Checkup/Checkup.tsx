import React, { useState } from 'react'

import './Checkup.scss'
import DiagnosisStart from '../../containers/diagnosisStart/DiagnosisStart'
import Terms from '../../containers/Terms/Terms'
import Gender from '../../containers/Gender/Gender'
import Age from '../../containers/Age/Age'
import Symptoms from '../../containers/Symptoms/Symptoms'
import Questions from '../../containers/Questions/Questions'

const Checkup = () => {
  const [pageNumber, setPageNumber] = useState(6)

  if ('') {
    setPageNumber(pageNumber)
  }
  return (
    <div className="checkup">
      <div className="checkup__container">
        <div className="checkup__summary">
          <div className="checkup__item checkup--nil">
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Introduction</span>
          </div>
          <div className="checkup__item">
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Patient</span>
          </div>
          <div className="checkup__item">
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Symptoms</span>
          </div>
          <div className="checkup__item">
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Results</span>
          </div>
        </div>
      </div>
      <div className="checkup__main">
        <div className={`checkup__content ${pageNumber === 1 ? 'checkup__visible' : ''}`}>
          <DiagnosisStart />
        </div>
        <div className={`checkup__content ${pageNumber === 2 ? 'checkup__visible' : ''}`}>
          <Terms />
        </div>
        <div className={`checkup__content ${pageNumber === 3 ? 'checkup__visible' : ''}`}>
          <Gender />
        </div>
        <div className={`checkup__content ${pageNumber === 4 ? 'checkup__visible' : ''}`}>
          <Age />
        </div>
        <div className={`checkup__content ${pageNumber === 5 ? 'checkup__visible' : ''}`}>
          <Symptoms />
        </div>
        <div className={`checkup__content ${pageNumber === 6 ? 'checkup__visible' : ''}`}>
          <Questions />
        </div>
        <div className="checkup__footer">
          <div>
            <span> &lt; </span>Back
          </div>
          <button>Next</button>
        </div>{' '}
      </div>
    </div>
  )
}

export default Checkup
