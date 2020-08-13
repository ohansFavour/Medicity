import React from 'react'
import { Slider } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

const Age = () => {
  const handleStyle = {
    color: '#fff',
    fontSize: 12,
    width: 32,
    height: 22,
  }
  return (
    <div
      className="age"
      style={{
        paddingTop: '70px',
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      <h3 style={{ marginBottom: '70px', textAlign: 'center', color: '#186a7b' }}>
        Please Select Your Age
      </h3>
      <div style={{ width: '80%', margin: '0 auto', marginBottom: '70px' }}>
        <Slider
          progress
          defaultValue={50}
          handleStyle={handleStyle}
          onChange={(value) => {
            // console.log(value)
          }}
        />
      </div>
    </div>
  )
}

export default Age
