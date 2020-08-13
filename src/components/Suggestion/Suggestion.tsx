import React from 'react'

// styles

import "./Suggestion.scss";

const Suggestion = (props: any) => {
  return (
    <div className="suggestion">
      {!!!props.suggestion ? (
        <span>{props.text}</span>
      ) : (
        <div className="suggestion__container">
          {props.suggestion.map((entry: any, index: number) => {
            return (
              <div onClick={() => props.add(entry)} key={index} className="suggestion__entry">
                {entry}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Suggestion
