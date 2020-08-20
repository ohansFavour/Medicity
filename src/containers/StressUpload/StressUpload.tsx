import React from 'react'
import './StressUpload.scss'

const StressUpload = () => {
  return (
    <div className="stressUpload__container">
        <h2>Stress Detection System</h2>
      <div className="stressUpload">
        <span>Electrocardiogram (mV)</span>
        <input type="name" />
        <span>Electromyogram (MV)</span>
        <input type="name" />
        <span>Foot Galvanic Skin Response (mV)</span> <input type="name" />
        <span>Hand Galvanic Skin Response (mV)</span>
        <input type="name" />
        <span>Heartrate (bpm)</span>
        <input type="name" />
        <span>Respiratory rate (mV)</span>
        <input type="name" />
        <div className="button">
          <button>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default StressUpload
