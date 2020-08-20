import React, { useState } from 'react'
import './Age.scss'

const Age = () => {
  const [age, setAge] = useState(50)
  return (
    <div className="age">
      <h2>Please Select Your Age</h2>
      <span>{age}</span>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="myRange"
          onChange={(e) => {
            setAge(Number(e.target.value))
          }}
        />
      </div>
    </div>
  )
}

export default Age
