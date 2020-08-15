import React from 'react'
import {withRouter} from "react-router-dom"
// components
import Button from '../../components/button/Button'

// styles
import './Introduction.scss'

const Introduction: React.FC = (props:any): JSX.Element => {
  const handleSignup = ()=>{
  props.history.push("/sign-up");
  }
  return (
    <div className="introduction">
      <div className="introduction__main">
        <h3>Artificial Intelligence in Medical Diagnosis</h3>
        <p>
          Doctors have access to highly efficient trained AI models which can be used for the fast
          diagnosis of patients.&nbsp;
          <span>
            Using this model doctors will be able diagnose disease which can normally be
            misdiagnosed.{' '}
          </span>{' '}
        </p>
        <Button
          title="SIGN UP"
          width={100}
          height={39}
          color="rgba(226, 103, 119, 1)"
          handleClick={() => {handleSignup()}}
          id="introduction__button"
        />
      </div>
    </div>
  )
}

export default withRouter(Introduction)
