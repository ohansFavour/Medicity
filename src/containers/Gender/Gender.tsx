import React, { useState } from 'react'

import './Gender.scss'

import Man from '../../assets/images/man.svg'
import Lady from '../../assets/images/lady.svg'

const Gender = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="gender">
      <h2>Please Select Your Gender</h2>
      <div className="gender__main">
        <div
          onClick={() => {
            setSelected(1)
          }}
          className={`${selected === 1 ? 'gender__select' : ''}`}
        >
          <img src={Man} alt="male" />
          <h6>Male</h6>
        </div>
        <div
          onClick={() => {
            setSelected(2)
          }}
          className={`${selected === 2 ? 'gender__select' : ''}`}
        >
          <img src={Lady} alt="female" />
          <h6>Female</h6>
        </div>
      </div>
      
    </div>
  )
}

export default Gender
