import React, { useContext } from 'react'
import './Result.scss'
import { StoreContext } from '../../context/store'

const Result = (props: any) => {
  const { state } = useContext(StoreContext)
  return (
    <div className="result">
      <span>&#10006;</span>
      <div>
        <h3>{state.result.header}</h3>
        <h1>{state.result.result}</h1>
        <h4>The system used an algorithm to compare patients drawings with a trained model</h4>
      </div>
    </div>
  )
}

export default Result
