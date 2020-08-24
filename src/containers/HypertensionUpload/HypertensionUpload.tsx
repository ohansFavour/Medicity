import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './HypertensionUpload.scss'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

const DiabetesUpload = (props: any) => {
  const [gender, setGender] = useState('')
  const [family, setFamily] = useState('')
  const [income, setIncome] = useState<any>('')
  const [sbp, setSbp] = useState<any>('')
  const [dbp, setDbp] = useState<any>('')
  const [wc, setWc] = useState<any>('')
  const [bmi, setBmi] = useState<any>('')
  const [history, setHistory] = useState<any>('')

  const { state, dispatch } = useContext(StoreContext)

  const disable = !!!(gender && family && income && sbp && dbp && wc && bmi && history)

  const handleRadio = (event: any, func: any) => {
    if (event.target.checked) {
      func(event.target.value)
    }
  }

  const handleChange = (event: any, func: any) => {
    const { value } = event.target
    if (value === '') {
      return func(value)
    }
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
          `https://cors-anywhere.herokuapp.com/http://thehealthdome2.pythonanywhere.com/?hypertension=1&sex=${gender}&familyhxht=${family}&poor=${income}&bmi=${bmi}&wc=${wc}&sbp=${sbp}&dbp=${dbp}&htn=${history}`
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
          disease: 'Hypertension',
        },
      })
      props.history.push('/dashboard/hypertension/result')
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
        <div className="hpUpload__container">
          <Spinner />
        </div>
      ) : (
        <div className="hpUpload__container">
          <h2>Hypertension Detection System</h2>
          <div className="hpUpload">
            <h6>Gender</h6>
            <div className="hp__section">
              <span className="first">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="1"
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
                  value="2"
                  onChange={(e) => {
                    handleRadio(e, setGender)
                  }}
                />
                <label htmlFor="female">Female</label>
              </span>
            </div>

            <div className="hp__halfContainer">
              <div className="hp__half">
                <span>
                  BMI(kg/m<sup>2</sup>)
                </span>
                <input
                  type="name"
                  value={bmi}
                  onChange={(e) => {
                    handleChange(e, setBmi)
                  }}
                />
              </div>
              <div className="hp__half">
                <span>Waist Circumference (cm)</span>
                <input
                  type="name"
                  value={wc}
                  onChange={(e) => {
                    handleChange(e, setWc)
                  }}
                />
              </div>
            </div>

            <h6>Does family have history of an Hypertension?</h6>
            <div className="hp__section">
              <span className="first">
                <input
                  type="radio"
                  id="yes"
                  name="family"
                  value="1"
                  onChange={(e) => {
                    handleRadio(e, setFamily)
                  }}
                />
                <label htmlFor="yes">Yes</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="no"
                  name="family"
                  value="0"
                  onChange={(e) => {
                    handleRadio(e, setFamily)
                  }}
                />
                <label htmlFor="no">No</label>
              </span>
            </div>
            <h6>Family income less than 85000?</h6>
            <div className="hp__section">
              <span className="first">
                <input
                  type="radio"
                  id="yes"
                  name="income"
                  value="1"
                  onChange={(e) => {
                    handleRadio(e, setIncome)
                  }}
                />
                <label htmlFor="yes">Yes</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="no"
                  name="income"
                  value="0"
                  onChange={(e) => {
                    handleRadio(e, setIncome)
                  }}
                />
                <label htmlFor="no">No</label>
              </span>
            </div>
            <div className="hp__halfContainer">
              <div className="hp__half">
                <span>SBP</span>
                <input
                  type="name"
                  value={sbp}
                  onChange={(e) => {
                    handleChange(e, setSbp)
                  }}
                />
              </div>
              <div className="hp__half">
                <span>Dbp</span>
                <input
                  type="name"
                  value={dbp}
                  onChange={(e) => {
                    handleChange(e, setDbp)
                  }}
                />
              </div>
            </div>
            <h6>HTN either raised SBP or DBP or history of drug intake</h6>
            <div className="hp__section">
              <span className="first">
                <input
                  type="radio"
                  id="yes"
                  name="history"
                  value="1"
                  onChange={(e) => {
                    handleRadio(e, setHistory)
                  }}
                />
                <label htmlFor="yes">Yes</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="no"
                  name="history"
                  value="0"
                  onChange={(e) => {
                    handleRadio(e, setHistory)
                  }}
                />
                <label htmlFor="no">No</label>
              </span>
            </div>

            <div className="button" onClick={handleSubmit}>
              <button disabled={disable} className={`${disable ? 'disabled' : null}`}>
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default withRouter(DiabetesUpload)
