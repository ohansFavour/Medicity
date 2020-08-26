import React, { useState } from 'react'
import './Result.scss'
import Phone from '../../assets/images/phone.png'
import diseases from '../../assets/data/Diseases definitions.json'
import Spinner from '../../components/Spinner/Spinner'
import { withRouter } from 'react-router-dom'

const Result = (props: any) => {
  const [star, setStar] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
      props.history.push('/')
    }, 3000)
  }

  return (
    <div className="resultPage">
      {loading ? (
        <Spinner />
      ) : (
        <>
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
            <p className="symp">
              From symptoms given here are the list of diseases it seems you have
            </p>
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

          <div className="result__feedback">
            <h3>Feedback</h3>
            <p>Was this information helpful?</p>
            <div className="rating">
              <span onClick={() => setStar(1)} className={`${star === 1 ? 'picked' : ''}`}>
                ☆
              </span>
              <span onClick={() => setStar(2)} className={`${star === 2 ? 'picked' : ''}`}>
                ☆
              </span>
              <span onClick={() => setStar(3)} className={`${star === 3 ? 'picked' : ''}`}>
                ☆
              </span>
              <span onClick={() => setStar(4)} className={`${star === 4 ? 'picked' : ''}`}>
                ☆
              </span>
              <span onClick={() => setStar(5)} className={`${star === 5 ? 'picked' : ''}`}>
                ☆
              </span>
            </div>
            <span className="result__help">
              <span>Your Comments</span>(optional)
            </span>
            <input type="name" className="result__comment"></input>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
  )
}

export default withRouter(Result)
