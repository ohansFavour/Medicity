import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './StressUpload.scss'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

const StressUpload = (props: any) => {
  const [ecg, setEcg] = useState<any>('')
  const [emg, setEmg] = useState<any>('')
  const [fgs, setFgs] = useState<any>('')
  const [hgs, setHgs] = useState<any>('')
  const [hr, setHr] = useState<any>('')
  const [rr, setRr] = useState<any>('')

  const { state, dispatch } = useContext(StoreContext)

  const disable = !!!(ecg && emg && fgs && hgs && hr && rr)

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
          `https://cors-anywhere.herokuapp.com/http://thehealthdome2.pythonanywhere.com/?stress=1&ecg= ${ecg}&emg= ${emg}&foot_gsr= ${fgs}&hand_gsr= ${hgs}&hr= ${hr}&resp= ${rr}`
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
          disease: 'Stress',
        },
      })
      props.history.push('/dashboard/stress/result')
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
    <div className="stressUpload__container">
      {state.isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>Stress Detection System</h2>
          <div className="stressUpload">
            <span>Electrocardiogram (mV)</span>
            <input
              type="name"
              value={ecg}
              onChange={(e) => {
                handleChange(e, setEcg)
              }}
            />
            <span>Electromyogram (MV)</span>
            <input
              type="name"
              value={emg}
              onChange={(e) => {
                handleChange(e, setEmg)
              }}
            />
            <span>Foot Galvanic Skin Response (mV)</span>{' '}
            <input
              type="name"
              value={fgs}
              onChange={(e) => {
                handleChange(e, setFgs)
              }}
            />
            <span>Hand Galvanic Skin Response (mV)</span>
            <input
              type="name"
              value={hgs}
              onChange={(e) => {
                handleChange(e, setHgs)
              }}
            />
            <span>Heartrate (bpm)</span>
            <input
              type="name"
              value={hr}
              onChange={(e) => {
                handleChange(e, setHr)
              }}
            />
            <span>Respiratory rate (mV)</span>
            <input
              type="name"
              value={rr}
              onChange={(e) => {
                handleChange(e, setRr)
              }}
            />
            <div className="button">
              <button
                disabled={disable}
                className={`${disable ? 'disabled' : null}`}
                onClick={handleSubmit}
              >
                Upload
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default withRouter(StressUpload)
