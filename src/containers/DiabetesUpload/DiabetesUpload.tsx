import React from 'react'
import './DiabetesUpload.scss'

const DiabetesUpload = () => {
  return (
    <div className="dbUpload__container">
      <h2>Diabetes Detection System</h2>
      <div className="dbUpload">
        <h6>Gender</h6>
        <div className="db__section">
          <span className="first">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </span>
          <span>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </span>
        </div>
        <h6>If female please state number of pregnancies</h6>
        <input type="name" className="db__full" />
        <div className="db__halfContainer">
          <div className="db__half">
            <span>Age</span>
            <input type="name" />
          </div>
          <div className="db__half">
            <span>BP</span>
            <input type="name" />
          </div>
        </div>
        <h6>Glucose</h6>
        <div className="db__trippleContainer">
          <span className="first">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Normal</label>
          </span>
          <span className="first">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Above Normal</label>
          </span>
          <span>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">High</label>
          </span>
        </div>
        <div className="db__halfContainer">
          <div className="db__half">
            <span>Insulin Level</span>
            <input type="name" />
          </div>
          <div className="db__half">
            <span>BMI</span>
            <input type="name" />
          </div>
        </div>
        <h6>Skin Thickness</h6>
        <input type="name" className="db__full" />
        <h6>Diabetes pedigree function</h6>
        <input type="name" className="db__full" />
        <div className="button">
          <button>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default DiabetesUpload
