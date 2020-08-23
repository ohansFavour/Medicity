import React, { useRef, useState, MutableRefObject, useEffect, useContext } from 'react'
import './EyeUpload.scss'
import { StoreContext } from '../../context/store'
import { withRouter } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'

const EyeUpload = (props: any) => {
  const [file1Name, setFile1Name] = useState('Image File')
  const [file1, setFile1] = useState(null)

  const file1Input = useRef() as MutableRefObject<HTMLInputElement>

  const { state, dispatch } = useContext(StoreContext)

  const handleFile1Click = () => {
    file1Input.current.click()
  }

  const handleInput1Change = (event: any) => {
    const fileUploaded = event.target.files[0]
    setFile1Name(fileUploaded.name)
    setFile1(fileUploaded)
  }

  function func(file): any {
    return new Promise((resolve, reject): any => {
      var data = new FormData()
      data.append('modelId', 'c78e9d66-d813-4ae4-9ed5-1f15dc2bd675')
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
      xhr.setRequestHeader('authorization', 'Basic ' + btoa('wgMBHPQ3lU44AuKHt7dpDuqVuf8KE4yH:'))

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
          disease: `${data}`,
        },
      })
      props.history.push('/dashboard/eye-defect/result')
    } catch (e) {
      alert(e)
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
    <div className="eyeUpload__container">
      <div className="eyeUpload">
        <h2>Eye Disease Detection System</h2>
        {state.isLoading ? (
          <Spinner />
        ) : (
          <div className="eyeUpload__main">
            <div className="eyeUpload__name">
              <label htmlFor="eyeUpload__name">Patient's name</label>
              <input type="name" id="eyeUpload__name" />
            </div>

            <div className="eyeUpload__file" onClick={handleFile1Click}>
              <span>Eye Scan Image</span>
              <div>{file1Name}</div>
            </div>

            <input
              type="file"
              id="eyeUpload__file1"
              ref={file1Input}
              onChange={handleInput1Change}
              style={{ display: 'none' }}
            />
            <button onClick={handleSubmit}>Upload</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default withRouter(EyeUpload)
