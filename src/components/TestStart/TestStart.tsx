import React from 'react'
import './TestStart.scss'

import OnlineDiagnosis from '../../assets/images/Online Doctor-rafiki.svg'

const TestStart = (props: any) => {
  return (
    <div className="testStart">
      <div className="testStart__header">
        <h3>{props.header}</h3>
        <p>{props.details}</p>
      </div>
      <div className="testStart__image">
        {props.img.map((entry: any) => (
          <div key={entry}><img src={entry.src} alt={entry.alt} /> <span>{entry.alt}</span></div>
        ))}
      </div>
      <div className="testStart__discuss">
        <div className="testStart__how">
          <h3>How to Use</h3>
          <p>
            Above is an example of a drawing of spiral and wave drawn by a Parkinson's Patient All
            that is needed to be done is listed below
          </p>
          <div className="testStart__step">
            <span className="testStart__label">1</span>{' '}
            <span>Input images in respective image boxes.</span>
          </div>
          <div className="testStart__step">
            <span className="testStart__label">2</span>{' '}
            <span>Make sure images are in the right format.</span>
          </div>
          <div className="testStart__step">
            <span className="testStart__label">3</span>{' '}
            <span>And that's all! You are done your result will reveal.</span>
          </div>
        </div>
        <div className="testStart__img">
          <img src={OnlineDiagnosis} alt="online-diagnosis" />
        </div>
      </div>
      <div className="testStart__button">
        <button>Start Test</button>
      </div>
    </div>
  )
}

export default TestStart
