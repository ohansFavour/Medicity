import React, { useState } from 'react'

import './Checkup.scss'
import DiagnosisStart from '../../containers/diagnosisStart/DiagnosisStart'
import Terms from '../../containers/Terms/Terms'
import Gender from '../../containers/Gender/Gender'
import Age from '../../containers/Age/Age'
import Symptoms from '../../containers/Symptoms/Symptoms'
import Questions from '../../containers/Questions/Questions'

const Checkup = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [isChecked, setIsChecked] = useState(false)

  const handlePageIncrease = () => {
    if (pageNumber === 6) {
      return
    }
    setPageNumber(pageNumber + 1)
  }
  const handlePageDecrease = () => {
    setPageNumber(pageNumber - 1)
  }
  const isDisabled = pageNumber === 2 && isChecked === false

  return (
    <div className="checkup">
      <div className="checkup__container">
        <div className="checkup__summary">
          <div
            className={`checkup__item checkup--nil ${pageNumber < 3 ? 'checkup__emphasis' : ''}`}
          >
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Introduction</span>
          </div>
          <div
            className={`checkup__item  ${
              pageNumber > 2 && pageNumber < 5 ? 'checkup__emphasis' : ''
            }`}
          >
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Patient</span>
          </div>
          <div
            className={`checkup__item  ${
              pageNumber >= 5 && pageNumber < 7 ? 'checkup__emphasis' : ''
            }`}
          >
            <span className="checkup__vertical"></span>
            <span className="checkup__name">Symptoms</span>
          </div>
          <div className={`checkup__item  ${pageNumber === 7 ? '' : ''}`}>
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
          <Terms setIsChecked={setIsChecked} />
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
          {pageNumber !== 1 && (
            <div onClick={() => handlePageDecrease()} style={{ cursor: 'pointer' }}>
              <span> &lt; </span>Back
            </div>
          )}
          <button
            onClick={() => handlePageIncrease()}
            style={{ cursor: 'pointer' }}
            disabled={isDisabled}
            className={`${isDisabled ? 'disabled' : ''}`}
          >
            Next
          </button>
        </div>{' '}
      </div>
    </div>
  )
}

export default Checkup
