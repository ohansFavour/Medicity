import React from 'react'
import { withRouter } from 'react-router-dom'
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
        {props.img.map((entry: any, index) => (
          <div key={index}>
            <img src={entry.src} alt={entry.alt} /> <span>{entry.alt}</span>
          </div>
        ))}
      </div>
      <div className="testStart__discuss">
        <div className="testStart__how">
          <h3>How to Use</h3>
          <p>{props.show}</p>
          <div className="testStart__step">
            <span className="testStart__label">1</span>{' '}
            <span>{props.one? props.one: "Input images in respective image boxes."}</span>
          </div>
          <div className="testStart__step">
            <span className="testStart__label">2</span>{' '}
            <span>{props.two? props.two: "Make sure images are in the right format."}</span>
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
        <button
          onClick={() => {
            props.history.push(`${props.match.path}/upload`)
          }}
        >
          Start Test
        </button>
      </div>
    </div>
  )
}

export default withRouter(TestStart)
