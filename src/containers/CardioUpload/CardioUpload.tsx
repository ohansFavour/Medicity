import React, { useState } from 'react'
import './CardioUpload.scss'

const CardioUpload = () => {
  const [page, setPage] = useState(1)
  return (
    <>
      {page === 1 ? (
        <div className="cardioUpload__container">
          <h2>Cardiovascular Detection System</h2>
          <div className="cardioUpload">
            <h6>Comments?</h6>
            <input type="name" className="cardio__full" />
            <div className="cardio__halfContainer">
              <div className="cardio__half">
                <span>Height (cm)</span>
                <input type="name" />
              </div>
              <div className="cardio__half">
                <span>Weight (kg)</span>
                <input type="name" />
              </div>
            </div>
            <h6>Gender</h6>
            <div className="cardio__section">
              <span className="first">
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
              </span>
              <span>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
              </span>
            </div>
            <h6>Systolic blood pressure</h6>
            <input type="name" className="cardio__full" />

            <h6>Diastolic blood pressure</h6>
            <input type="name" className="cardio__full" />
            <h6>Cholreterol</h6>
            <div className="cardio__trippleContainer">
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
            <div className="next" onClick={() => setPage(2)}>
              <span>Next</span>
              <span className="arrow">{'>'}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="cardioUpload__container">
          <h2>Cardiovascular Detection System</h2>
          <div className="cardioUpload">
            <h6>Glucose</h6>
            <div className="cardio__trippleContainer">
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
            <h6>Do you smoke?</h6>
            <div className="cardio__section">
             
              <span className="first">
                <input type="radio" id="male" name="smoke" value="male" />
                <label htmlFor="male">Yes</label>
              </span>
              <span>
                <input type="radio" id="female" name="smoke" value="female" />
                <label htmlFor="female">No</label>
              </span>
            </div>
            <h6>Do you take Alcohol?</h6>

            <div className="cardio__section">
              <span className="first">
                <input type="radio" id="male" name="smoke" value="male" />
                <label htmlFor="male">Yes</label>
              </span>
              <span>
                <input type="radio" id="female" name="smoke" value="female" />
                <label htmlFor="female">No</label>
              </span>
            </div>
            <h6>Do you exercise regularly?</h6>

            <div className="cardio__section">
              <span className="first">
                <input type="radio" id="male" name="smoke" value="male" />
                <label htmlFor="male">Yes</label>
              </span>
              <span>
                <input type="radio" id="female" name="smoke" value="female" />
                <label htmlFor="female">No</label>
              </span>
            </div>
            <h6>Comments?</h6>
            <input type="name" className="cardio__full" />
            <div className="button">
              <div onClick={() => setPage(1)}>
                <span>{'<'}</span>
                <span>Back</span>
              </div>
              <button>Upload</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CardioUpload
