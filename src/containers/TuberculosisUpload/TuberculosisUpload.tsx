import React, { useRef, useState, MutableRefObject } from 'react'
import './TuberculosisUpload.scss'

const TuberculosisUpload = () => {
  const [file1Name, setFile1Name] = useState('Image File')

  const file1Input = useRef() as MutableRefObject<HTMLInputElement>

  const handleFile1Click = () => {
    file1Input.current.click()
  }

  const handleInput1Change = (event: any) => {
    const fileUploaded = event.target.files[0]
    setFile1Name(fileUploaded.name)
  }

  return (
    <div className="TuberculosisUpload__container">
      <div className="TuberculosisUpload">
        <h2>Tuberculosis Detection System</h2>
        <div className="TuberculosisUpload__main">
          <div className="TuberculosisUpload__name">
            <label htmlFor="TuberculosisUpload__name">Patient's name</label>
            <input type="name" id="TuberculosisUpload__name" />
          </div>

          <div className="TuberculosisUpload__file" onClick={handleFile1Click}>
            <span>Chest X-Ray</span>
            <div>{file1Name}</div>
          </div>

          <input
            type="file"
            id="TuberculosisUpload__file1"
            ref={file1Input}
            onChange={handleInput1Change}
            style={{ display: 'none' }}
          />
          <button>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default TuberculosisUpload
