import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import Axios from 'axios'
import './DiabetesUpload.scss'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

const DiabetesUpload = (props: any) => {
  const [gender, setGender] = useState('male')
  const [glucose, setGlucose] = useState<any>('')
  let [pregnancy, setPregnancy] = useState<any>('')
  const [age, setAge] = useState<any>('')
  const [BP, setBP] = useState<any>('')
  const [insulin, setInsulin] = useState<any>('')
  const [BMI, setBMI] = useState<any>('')
  const [thickness, setThickness] = useState<any>('')
  const [dFunc, setDFunc] = useState<any>('')

  const { state, dispatch } = useContext(StoreContext)

  const disable = !!!(glucose && age && BP && insulin && BMI && thickness && dFunc)

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
    if (!pregnancy) {
      pregnancy = 0
    }

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
          `https://cors-anywhere.herokuapp.com/http://thehealthdome2.pythonanywhere.com/?diabetes=1&pregnancies=${pregnancy}&glucose=${glucose}&bloodpressure=${BP}&skinthickness=${thickness}&insulin=${insulin}&bmi=${BMI}&diabetespedigreefunction=${dFunc}&age=${age}`
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
          disease: 'Diabetes',
        },
      })
      props.history.push('/dashboard/diabetes/result')
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
        <div className="dbUpload__container">
          <Spinner />
        </div>
      ) : (
        <div className="dbUpload__container">
          <h2>Diabetes Detection System</h2>
          <div className="dbUpload">
            <h6>Gender</h6>
            <div className="db__section">
              <span className="first">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
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
                  value="female"
                  onChange={(e) => {
                    handleRadio(e, setGender)
                  }}
                />
                <label htmlFor="female">Female</label>
              </span>
            </div>
            <>
              {gender === 'female' ? (
                <>
                  <h6>Please state number of pregnancies</h6>
                  <input
                    type="name"
                    className="db__full"
                    value={pregnancy}
                    onChange={(e) => {
                      handleChange(e, setPregnancy)
                    }}
                  />
                </>
              ) : null}
            </>
            <div className="db__halfContainer">
              <div className="db__half">
                <span>Age</span>
                <input
                  type="name"
                  value={age}
                  onChange={(e) => {
                    handleChange(e, setAge)
                  }}
                />
              </div>
              <div className="db__half">
                <span>BP</span>
                <input
                  type="name"
                  value={BP}
                  onChange={(e) => {
                    handleChange(e, setBP)
                  }}
                />
              </div>
            </div>
            <h6>Glucose</h6>
            <input
              type="name"
              className="db__full"
              value={glucose}
              onChange={(e) => {
                handleChange(e, setGlucose)
              }}
            />
            <div className="db__halfContainer">
              <div className="db__half">
                <span>Insulin Level</span>
                <input
                  type="name"
                  value={insulin}
                  onChange={(e) => {
                    handleChange(e, setInsulin)
                  }}
                />
              </div>
              <div className="db__half">
                <span>BMI</span>
                <input
                  type="name"
                  value={BMI}
                  onChange={(e) => {
                    handleChange(e, setBMI)
                  }}
                />
              </div>
            </div>
            <h6>Skin Thickness</h6>
            <input
              type="name"
              className="db__full"
              value={thickness}
              onChange={(e) => {
                handleChange(e, setThickness)
              }}
            />
            <h6>Diabetes pedigree function</h6>
            <input
              type="name"
              className="db__full"
              value={dFunc}
              onChange={(e) => {
                handleChange(e, setDFunc)
              }}
            />
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
