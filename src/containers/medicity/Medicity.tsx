import React from 'react'

// styles
import './Medicity.scss'

// components
import Video from '../../components/video/Video'

const Medicity = () => {
  return (
    <div className="medicity">
      <h3>Welcome to Medicity</h3>
      <div className="medicity__main">
        <div className="medicity__text">
          <h4>Your Quick Link to the Doctor </h4>
          <p>
            Medicity aids medical diagnosis via symptoms and reduction of medical error in Nigeria.
            We have done this by creating an expert system which would help diagnose patients online
            by just imputing their symptoms into the system and answering some few questions
            regarding the symptoms that are occurring within the patient. <br/><br/>This project also tries to
            solve the problem of miss diagnosis by doctors by creating several prediction systems
            for various diseases which helps the doctors predict various diseases at the early stage
            which in turn reduces the likelyhood of misdiagnosis of patients’ symptoms.
          </p>
        </div>
        <div className="medicity__video">
          <Video />
        </div>
      </div>
    </div>
  )
}

export default Medicity
