import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import './Result.scss'
import { StoreContext } from '../../context/store'
import Stethoscope from '../../assets/images/Stethoscope.jpg'

const Result = (props: any) => {
  const { state } = useContext(StoreContext)
  return (
    <div className="result">
      <span
        onClick={() => {
          props.history.goBack()
        }}
        className="result__back"
      >
        &#10006;
      </span>
      <>
        {state.result.type === 'description' ? (
          <div className="result__name">
            <span>
              {state.result.result === 0
                ? `Patient is unlikely to have ${state.result.disease}`
                : `Patient is likely to have ${state.result.disease}`}
            </span>
            <img alt="stethoscope" src={Stethoscope} />
          </div>
        ) : (
          <div className="result__number">
            <h3>{state.result.header}</h3>
            <h1>{state.result.result}%</h1>
            <h4>The system used an algorithm to compare patients drawings with a trained model</h4>
          </div>
        )}
      </>
    </div>
  )
}

export default withRouter(Result)
