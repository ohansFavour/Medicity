import React, { useState, useContext, useEffect } from 'react'
import './CardioUpload.scss'
import { StoreContext } from '../../context/store'
import { withRouter } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'

const CardioUpload = (props: any) => {
  const [page, setPage] = useState(1)
  const [weight, setWeight] = useState<any>('')
  const [height, setHeight] = useState<any>('')
  const [age, setAge] = useState<any>('')
  const [gender, setGender] = useState<any>('')
  const [sbp, setSbp] = useState<any>('')
  const [dbp, setDbp] = useState<any>('')
  const [chol, setChol] = useState<any>('')
  const [drink, setDrink] = useState<any>('')
  const [smoke, setSmoke] = useState<any>('')
  const [glucose, setGlucose] = useState<any>('')
  const [active, setActive] = useState<any>('')

  const { dispatch, state } = useContext(StoreContext)

  const disable = !!!(
    glucose &&
    age &&
    weight &&
    height &&
    sbp &&
    dbp &&
    gender &&
    chol &&
    drink &&
    smoke &&
    active
  )

  const handleRadio = (event: any, func: any) => {
    if (event.target.checked) {
      func(event.target.value)
    }
  }
  const handleChange = (event: any, func: any) => {
    const { value } = event.target
    if (!Number(value)) {
      return
    }
    func(value)
  }

  const handleSubmit = async () => {
    dispatch({
      type: 'IS_LOADING',
    })

    function asyncFunc(): any {
      return new Promise((resolve, reject): any => {
        let xhr = new XMLHttpRequest()
        xhr.onerror = () => {
          reject('An Error Occured')
        }
        xhr.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.response)
            resolve(response[0])
          }
        }
        xhr.open(
          'GET',
          `https://cors-anywhere.herokuapp.com/http://thehealthdome2.pythonanywhere.com/?cvd=1&age=${age}&gender=${gender}&height=${height}&weight=${weight}&ap_hi=${sbp}&ap_lo=${dbp}&chol=${chol}&gluc=${glucose}&smoke=${smoke}&alco=${drink}&active=${active}`
        )
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send()
      })
    }
    try {
      const data = await asyncFunc()

      dispatch({
        type: 'SET_RESULT',
        payload: {
          result: data,
          type: 'description',
          disease: 'CardioVascular Disease',
        },
      })
      props.history.push('/dashboard/cardiovascular/result')
    } catch (e) {
      dispatch({
        type: 'NOT_LOADING',
      })
      alert('An Error Occured, please ensure that your internet connection is intact')
    }
  }
  useEffect(() => {
    dispatch({
      type: 'NOT_LOADING',
    })
  }, [dispatch])

  return (
    <>
      {state.isLoading ? (
        <div className="cardioUpload__container">
          <Spinner />
        </div>
      ) : (
        <>
          {page === 1 ? (
            <div className="cardioUpload__container">
              <h2>Cardiovascular Detection System</h2>
              <div className="cardioUpload">
                <h6>Age</h6>
                <input
                  type="name"
                  className="cardio__full"
                  value={age}
                  onChange={(e) => {
                    handleChange(e, setAge)
                  }}
                />
                <div className="cardio__halfContainer">
                  <div className="cardio__half">
                    <span>Height (cm)</span>
                    <input
                      type="name"
                      value={height}
                      onChange={(e) => {
                        handleChange(e, setHeight)
                      }}
                    />
                  </div>
                  <div className="cardio__half">
                    <span>Weight (kg)</span>
                    <input
                      type="name"
                      value={weight}
                      onChange={(e) => {
                        handleChange(e, setWeight)
                      }}
                    />
                  </div>
                </div>
                <h6>Gender</h6>
                <div className="cardio__section">
                  <span className="first">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value={1}
                      onChange={(e) => {
                        handleRadio(e, setGender)
                      }}
                    />
                    <label htmlFor="male">Male</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value={2}
                      onChange={(e) => {
                        handleRadio(e, setGender)
                      }}
                    />
                    <label htmlFor="female">Female</label>
                  </span>
                </div>
                <h6>Systolic blood pressure</h6>
                <input
                  type="name"
                  className="cardio__full"
                  value={sbp}
                  onChange={(e) => {
                    handleChange(e, setSbp)
                  }}
                />

                <h6>Diastolic blood pressure</h6>
                <input
                  type="name"
                  className="cardio__full"
                  value={dbp}
                  onChange={(e) => {
                    handleChange(e, setDbp)
                  }}
                />
                <h6>Cholreterol</h6>
                <div className="cardio__trippleContainer">
                  <span className="first">
                    <input
                      type="radio"
                      id="male"
                      name="chol"
                      value={1}
                      onChange={(e) => {
                        handleRadio(e, setChol)
                      }}
                    />
                    <label htmlFor="male">Normal</label>
                  </span>
                  <span className="first">
                    <input
                      type="radio"
                      id="female"
                      name="chol"
                      value={2}
                      onChange={(e) => {
                        handleRadio(e, setChol)
                      }}
                    />
                    <label htmlFor="female">Above Normal</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="female"
                      name="chol"
                      value={3}
                      onChange={(e) => {
                        handleRadio(e, setChol)
                      }}
                    />
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
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value={1}
                      onChange={(e) => {
                        handleRadio(e, setGlucose)
                      }}
                    />
                    <label htmlFor="male">Normal</label>
                  </span>
                  <span className="first">
                    <input
                      type="radio"
                      id="female"
                      name="glucose"
                      value={2}
                      onChange={(e) => {
                        handleRadio(e, setGlucose)
                      }}
                    />
                    <label htmlFor="female">Above Normal</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="female"
                      name="glucose"
                      value={3}
                      onChange={(e) => {
                        handleRadio(e, setGlucose)
                      }}
                    />
                    <label htmlFor="female">High</label>
                  </span>
                </div>
                <h6>Do you smoke?</h6>
                <div className="cardio__section">
                  <span className="first">
                    <input
                      type="radio"
                      id="male"
                      name="smoke"
                      value={1}
                      onChange={(e) => {
                        handleRadio(e, setSmoke)
                      }}
                    />
                    <label htmlFor="male">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="female"
                      name="smoke"
                      value={2}
                      onChange={(e) => {
                        handleRadio(e, setSmoke)
                      }}
                    />
                    <label htmlFor="female">No</label>
                  </span>
                </div>
                <h6>Do you take Alcohol?</h6>

                <div className="cardio__section">
                  <span className="first">
                    <input
                      type="radio"
                      id="male"
                      name="drink"
                      value={1}
                      onChange={(e) => {
                        handleRadio(e, setDrink)
                      }}
                    />
                    <label htmlFor="male">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="female"
                      name="drink"
                      value={2}
                      onChange={(e) => {
                        handleRadio(e, setDrink)
                      }}
                    />
                    <label htmlFor="female">No</label>
                  </span>
                </div>
                <h6>Do you exercise regularly?</h6>

                <div className="cardio__section">
                  <span className="first">
                    <input
                      type="radio"
                      id="male"
                      name="active"
                      value={1}
                      onChange={(e) => {
                        handleRadio(e, setActive)
                      }}
                    />
                    <label htmlFor="male">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="female"
                      name="active"
                      value={2}
                      onChange={(e) => {
                        handleRadio(e, setActive)
                      }}
                    />
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
                  <button
                    className={`${disable ? 'disabled' : null}`}
                    disabled={disable}
                    onClick={handleSubmit}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default withRouter(CardioUpload)
