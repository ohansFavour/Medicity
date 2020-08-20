import React, { useRef, useState, MutableRefObject } from 'react'
import './PneumoniaUpload.scss'

const PneumoniaUpload = () => {
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
    <div className="PneumoniaUpload__container">
      <div className="PneumoniaUpload">
        <h2>Eye Disease Detection System</h2>
        <div className="PneumoniaUpload__main">
          <div className="PneumoniaUpload__name">
            <label htmlFor="PneumoniaUpload__name">Patient's name</label>
            <input type="name" id="PneumoniaUpload__name" />
          </div>

          <div className="PneumoniaUpload__file" onClick={handleFile1Click}>
            <span>Chest X-Ray</span>
            <div>{file1Name}</div>
          </div>

          <input
            type="file"
            id="PneumoniaUpload__file1"
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

export default PneumoniaUpload
