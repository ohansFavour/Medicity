import React, { useEffect, useRef, MutableRefObject } from 'react'

// styles

import './Suggestion.scss'

const Suggestion = (props: any) => {
  const divRef = useRef() as MutableRefObject<HTMLInputElement>

  const handleOutsideClick = (event: any) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
     props.setUserInput("")
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  const handleClick = (entry) => {
    props.add(entry.name)
    props.setDiseases([...props.diseases, props.keys[entry.number]])
  }
  return (
    <div className="suggestion">
      {!!!props.suggestion ? (
        <span>{props.text}</span>
      ) : (
        <div className="suggestion__container" ref={divRef}>
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
