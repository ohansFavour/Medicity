import React from 'react'
import './Result.scss'

const Result = () => {
  return (
    <div className="result">
      <span>&#10006;</span>
      <div>
        <h3>Probability of Patient having Parkinson's disease is</h3>
        <h1>45%</h1>
        <h4>The system used an algorithm to compare patients drawings with a trained model</h4>
      </div>
    </div>
  )
}

export default Result
