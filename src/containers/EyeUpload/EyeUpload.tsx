import React, { useRef, useState, MutableRefObject } from 'react'
import './EyeUpload.scss'

const EyeUpload = () => {
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
    <div className="eyeUpload__container">
      <div className="eyeUpload">
        <h2>Eye Disease Detection System</h2>
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
          <button>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default EyeUpload
