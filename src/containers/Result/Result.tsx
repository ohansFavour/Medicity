import React from 'react'
import './Result.scss'
import Phone from '../../assets/images/phone.png'
import diseases from '../../assets/data/Diseases definitions.json'

const Result = (props: any) => {
  

  return (
    <div className="resultPage">
      <div className="result__doctor">
        <div className="doctor__image">
          <img src={Phone} alt="phone" />
        </div>
        <div className="doctor__main">
          <span>Recommendation</span>
          <h3>Visit or contact a Doctor for further details</h3>
          <span>
            Your symptoms may require prompt medical evaluation. If your symptoms suddenly get
            worse, go to the nearest medical emergency center
          </span>
        </div>
      </div>
      <div className="result__main">
        <h3>Results</h3>
        <span>
          Please note that the list below may not be complete and is provided solely for
          informational purposes.
        </span>
        <p className="symp">From symptoms given here are the list of diseases it seems you have</p>
        <>
          {props.data && props.data[0] === 'NULL' ? (
            <>
              {props.data.map((entry, index) => {
                if (index !== 0) {
                  return (
                    <div className="result__details" key={index}>
                      <hr />
                      <h3>{diseases[entry].Diseases}</h3>
                      <>
                        {diseases[entry].Definitions.split('\n').map((entry, index2) => {
                          return <p key={index2}>{entry}</p>
                        })}
                      </>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </>
          ) : (
            <>
              {props.data &&
                props.data.map((entry, index) => {
                  return (
                    <div className="result__details" key={index}>
                      <hr />
                      <h3>{diseases[entry].Diseases}</h3>
                      <>
                        {diseases[entry].Definitions.split('\n').map((entry, index2) => {
                          return <p key={index2}>{entry}</p>
                        })}
                      </>
                    </div>
                  )
                })}
            </>
          )}
        </>
      </div>
    </div>
  )
}

export default Result
