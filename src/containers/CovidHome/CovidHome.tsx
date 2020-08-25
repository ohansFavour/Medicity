import React from 'react'
import './CovidHome.scss'

import Covid from '../../assets/images/covid19_1600852x.png'

const CovidHome = (props: any) => {
  return (
    <div className="covidHome__container">
      <img alt="covid" src={Covid} />
      <div>
        <h2>Check your risk of having COVID-19 infection?</h2>
        <p>
          Based on best clinical practices, CDC guidelines, illness severity and risk factors like
          age and pre-existing conditions.
        </p>
        <button
           onClick={() => {
            window.location.assign('https://master.d2mbogtk0mwq0k.amplifyapp.com');
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}
export default CovidHome
