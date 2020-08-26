import React from 'react'
import './CovidHome.scss'
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide'

import Covid from '../../assets/images/covid19_1600852x.png'

const CovidHome = (props: any) => {
  return (
    <div className="covidHome__container">
      <Roll left duration={6000}>
        <img alt="covid" src={Covid} />
      </Roll>
      <Slide right duration={6000}>
        <div>
          <h2>Check your risk of having COVID-19 infection?</h2>
          <p>
            Based on best clinical practices, CDC guidelines, illness severity and risk factors like
            age and pre-existing conditions.
          </p>
          <button
            onClick={() => {
              window.location.assign('https://master.d2mbogtk0mwq0k.amplifyapp.com')
            }}
          >
            Get Started
          </button>
        </div>
      </Slide>
    </div>
  )
}
export default CovidHome
