import React from 'react'
import './Question.scss'

const Question = (props: any) => {
  return (
    <>
      <div className={`question ${props.nohr ? "nohr" : null}`} >
        <div className="question__name">{props.name}</div>
        <div className="question__options">
          <div className="question__option">
            <span></span>Yes
          </div>
          <div className="question__option">
            <span></span>No
          </div>
          <div className="question__option special">
            <span></span>Don't Know
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
