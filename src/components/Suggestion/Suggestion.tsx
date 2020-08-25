import React from 'react'

// styles

import "./Suggestion.scss";
 

const Suggestion = (props: any) => {
  const handleClick = (entry)=>{
   props.add(entry.name)
   props.setDiseases([...props.diseases,props.keys[entry.number]])
  }
  return (
    <div className="suggestion">
      {!!!props.suggestion ? (
        <span>{props.text}</span>
      ) : (
        <div className="suggestion__container">
          {props.suggestion.map((entry: any, index: number) => {
            return (
              <div onClick={() => handleClick(entry)} key={index} className="suggestion__entry">
                {entry.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Suggestion
