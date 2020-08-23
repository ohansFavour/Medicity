import React, { useRef, useContext, useState, useEffect, MutableRefObject } from 'react'

import './MalariaUpload.scss'
import { StoreContext } from '../../context/store'
import { withRouter } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'

const MalariaUpload = (props: any) => {
  const [file1Name, setFile1Name] = useState('Image File')
  const [file1, setFile1] = useState<any>(null)

  const file1Input = useRef() as MutableRefObject<HTMLInputElement>

  const handleFile1Click = () => {
    file1Input.current.click()
  }
  const { state, dispatch } = useContext(StoreContext)

  const handleInput1Change = (event: any) => {
    const fileUploaded = event.target.files[0]
    setFile1Name(fileUploaded.name)
    setFile1(fileUploaded)
  }

  function func(file): any {
    return new Promise((resolve, reject): any => {
      var data = new FormData()
      data.append('modelId', '8b9c6d8f-6bf1-4301-97f4-5c06ca61ffd1')
      data.append('file', file) // file is a Blob object

      var xhr = new XMLHttpRequest()
      xhr.onerror = () => {
        reject('An Error Ocurred while trying to test')
      }
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          const value = JSON.parse(this.response)
          const arr = value.result[0].prediction

          const obj = arr.reduce((obj, entry) => {
            return {
              ...obj,
              [entry.label]: entry.probability,
            }
          }, {})
          const keys = Object.keys(obj)
          const values: any = Object.values(obj)
          const maxK = keys[values.indexOf(Math.max(...values))]
          resolve(maxK)
        }
      })

      xhr.open('POST', 'https://app.nanonets.com/api/v2/ImageCategorization/LabelFile/')
      xhr.setRequestHeader('authorization', 'Basic ' + btoa('SkrHduDEQRPzl4gD_qDuCnVEpKNoNX2M:'))

      xhr.send(data)
    })
  }

  const handleSubmit = async () => {
    dispatch({
      type: 'IS_LOADING',
    })
    try {
      const data = await func(file1)

      dispatch({
        type: 'SET_RESULT',
        payload: {
          result: 1,
          type: 'description',
          disease: `Plasmodium ${data}`,
        },
      })
      props.history.push('/dashboard/malaria/result')
    } catch (e) {
      alert(e);
      dispatch({
        type: 'NOT_LOADING',
      })
    }
  }
  useEffect(() => {
    dispatch({
      type: 'NOT_LOADING',
    })
  }, [dispatch])

  return (
    <div className="TuberculosisUpload__container">
      {state.isLoading ? (
        <Spinner />
      ) : (
        <div className="TuberculosisUpload">
          <h2>Malaria Detection System</h2>
          <div className="TuberculosisUpload__main">
            <div className="TuberculosisUpload__name">
              <label htmlFor="TuberculosisUpload__name">Patient's name</label>
              <input type="name" id="TuberculosisUpload__name" />
            </div>

            <div className="TuberculosisUpload__file" onClick={handleFile1Click}>
              <span>Cell Image</span>
              <div>{file1Name}</div>
            </div>

            <input
              type="file"
              id="TuberculosisUpload__file1"
              ref={file1Input}
              onChange={handleInput1Change}
              style={{ display: 'none' }}
            />
            <button onClick={handleSubmit}>Upload</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(MalariaUpload)
