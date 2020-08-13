import React, { useState } from 'react'
import './Question.scss'

const Question = (props: any) => {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <div className={`question ${props.nohr ? 'nohr' : null} `}>
        <div className="question__name">{props.name}</div>
        <div className="question__options">
          <div className="question__option">
            <span
              className={`${selected === 1 ? 'question__background' : ''}`}
              onClick={() => setSelected(1)}
            ></span>
            Yes
          </div>
          <div className="question__option">
            <span
              className={`${selected === 2 ? 'question__background' : ''}`}
              onClick={() => setSelected(2)}
            ></span>
            No
          </div>
          <div className="question__option special">
            <span
              className={`${selected === 3 ? 'question__background' : ''}`}
              onClick={() => setSelected(3)}
            ></span>
            Don't Know
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
