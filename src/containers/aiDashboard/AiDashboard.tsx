import React from 'react'
import { withRouter} from 'react-router-dom'

import Malaria from '../../assets/images/malaria.png'
import Tuberculosis from '../../assets/images/Tuberculosis.png'
import Covid from '../../assets/images/covid19.png'
import Eye from '../../assets/images/eye.png'
import Diab from '../../assets/images/diabetes.png'
import Parkinson from '../../assets/images/parkinsons.png'
import Cardio from '../../assets/images/cardio.png'
import Pneumonia from '../../assets/images/pneumonia.png'
import Hypertension from '../../assets/images/hypertension.png'
import Stress from '../../assets/images/stress.png'

import './AiDashboard.scss'

const AiDashboard = (props: any) => {
  return (
    <div className="aiDashboard__container">
      <div className="aiDashboard">
        <div className="aiDashboard__detail">
          <h3>Welcome to the AI Diagnosis and Disease Detection System</h3>
          <p>
            You are given access to several trained AI disease detection system with this you can
            diagnose several diseases effectively efficiently and speedily
          </p>
        </div>
        <div className="aiDashboard__content">
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/tuberculosis')
            }}
          >
            <img src={Tuberculosis} alt="tuberculosis" />
            <span>Tuberculosis Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              window.location.assign('https://master.d2mbogtk0mwq0k.amplifyapp.com');
            }}
          >
            <img src={Covid} alt="covid" />
            <span>Covid19 Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/malaria')
             
            }}
          >
            <img src={Malaria} alt="malaria" />
            <span>Malaria Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/hypertension')
            }}
          >
            <img src={Hypertension} alt="hypertension" />
            <span>Hypertension Detection</span>
          </div>

          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/diabetes')
            }}
          >
            <img src={Diab} alt="diabetes" />
            <span>Diabetes Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/parkinsons')
            }}
          >
            <img src={Parkinson} alt="parkinson" />
            <span>Parkison's Disease Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/cardiovascular')
            }}
          >
            <img src={Cardio} alt="vascular" />
            <span> Cardiovascular Disease Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/pneumonia')
            }}
          >
            <img src={Pneumonia} alt="pneumonia" />
            <span>Pneumonia Detection</span>
          </div>
          
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/eye-defect')
            }}
          >
            <img src={Eye} alt="eye" />
            <span>Eye Disease Detection</span>
          </div>
          <div
            className="aiDashboard__card"
            onClick={() => {
              props.history.push('/dashboard/stress')
            }}
          >
            <img src={Stress} alt="stress" />
            <span>Stress Detection</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(AiDashboard)
