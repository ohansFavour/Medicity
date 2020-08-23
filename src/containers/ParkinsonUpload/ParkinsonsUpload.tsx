import React, { useState, useContext } from 'react'


import './ParkinsonsUpload.scss'
import Upload from '../../components/Upload/Upload'
import { StoreContext } from '../../context/store'
import Spinner from '../../components/Spinner/Spinner'

const ParkinsonsUpload = (props: any) => {
  const [file1, setFile1] = useState<string | Blob>('')
  const [file2, setFile2] = useState<string | Blob>('')

  const { state, dispatch } = useContext(StoreContext)

  function spiral(file): any {
    return new Promise((resolve, reject): any => {
      const data = new FormData()
      data.append('modelId', '771ab6a3-341c-41cd-8aeb-b5d724a3bdb1')
      data.append('file', file) // file is a Blob object

      const xhr = new XMLHttpRequest()
      xhr.onerror = () => {
        reject('An Error Occured')
      }
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          const value = JSON.parse(this.response).result[0].prediction
          const actualValue = value.filter((item) => item.label === 'Parkinsons_spiral')[0]
            .probability
          resolve(actualValue)
        }
      })

      xhr.open('POST', 'https://app.nanonets.com/api/v2/ImageCategorization/LabelFile/')
      xhr.setRequestHeader('authorization', 'Basic ' + btoa('vUy1sXLkgUiwUidvz3Oa2x24ZQHohMNW:'))

      xhr.send(data)
    })
  }

  function wave(file): any {
    return new Promise((resolve, reject): any => {
      const data = new FormData()
      data.append('modelId', '8a962e69-c3a0-44aa-939c-51fde7871c14')
      data.append('file', file) // file is a Blob object

      const xhr = new XMLHttpRequest()

      xhr.onerror = () => {
        reject('An Error Occured')
      }
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          const value = JSON.parse(this.response).result[0].prediction
          const actualValue = value.filter((item) => item.label === 'Parkinsons_wave')[0]
            .probability
          resolve(actualValue)
        }
      })

      xhr.open('POST', 'https://app.nanonets.com/api/v2/ImageCategorization/LabelFile/')
      xhr.setRequestHeader('authorization', 'Basic ' + btoa('vUy1sXLkgUiwUidvz3Oa2x24ZQHohMNW:'))

      xhr.send(data)
    })
  }

  const handleSubmit = async () => {
    await dispatch({
      type: 'IS_LOADING',
    })
    try {
      const spiralResult = await spiral(file1)
      const waveResult = await wave(file2)

      const categorizedResult = (((spiralResult + waveResult) / 2) * 100).toFixed(2)

      await dispatch({
        type: 'SET_RESULT',
        payload: {
          type: 'number',
          header: `There is a ${categorizedResult} chance Of patient Having Parkinson Disease`,
        },
      })
      props.history.push('/dashboard/parkinsons/result')
    } catch (e) {
      dispatch({
        type: 'NOT_LOADING',
      })
      alert("An Error Occured, please ensure that you're using the right file type")
    }
  }

  return (
    <>
      {state.isLoading ? (
        <div className="parkinsonsUpload">
          <Spinner />
        </div>
      ) : (
        <div className="parkinsonsUpload">
          <Upload
            file1Heading="Wave Drawing"
            file2Heading="Spiral Drawing"
            setFile1={setFile1}
            setFile2={setFile2}
            handleSubmit={handleSubmit}
            name="Patient's Name"
          />
        </div>
      )}
    </>
  )
}

export default ParkinsonsUpload
