import React, { useRef, useState, MutableRefObject } from 'react'

// styles
import './Upload.scss'

const Upload = (props: any) => {
  const [file1Heading] = useState(props.file1Heading )
  const [file2Heading] = useState(props.file2Heading )
  const [file1Name, setFile1Name] = useState(props.file1Name || "Image File")
  const [file2Name, setFile2Name] = useState(props.file2Name || "Image File")

  const file1Input = useRef() as MutableRefObject<HTMLInputElement>
  const file2Input = useRef() as MutableRefObject<HTMLInputElement>

  const handleFile1Click = () => {
    file1Input.current.click()
  }
  const handleFile2Click = () => {
    file2Input.current.click()
  }

  const handleInput1Change = (event: any) => {
    const fileUploaded = event.target.files[0]
    setFile1Name(fileUploaded.name)
    props.setFile1(fileUploaded)
  }
  const handleInput2Change = (event: any) => {
    const fileUploaded = event.target.files[0]
    setFile2Name(fileUploaded.name)
    props.setFile2(fileUploaded)
  }

  return (
    <div className="upload">
      <h2>Parkinson's Disease Detection System</h2>
     <div className="upload__main">
     <div className="upload__name">
        <label htmlFor="upload__name">{props.name}</label>
        <input type="name" id="upload__name" />
      </div>
      <div className="upload__file" onClick={() => handleFile1Click()}>
        <span>{file1Heading}</span>
        <div>{file1Name}</div>
      </div>
      <div className="upload__file">
        <span>{file2Heading}</span>
        <div onClick={() => handleFile2Click()}>{file2Name}</div>
      </div>
      <input
        type="file"
        id="upload__file1"
        ref={file1Input}
        onChange={handleInput1Change}
        style={{ display: 'none' }}
      />
      <input
        type="file"
        id="upload__file2"
        ref={file2Input}
        onChange={handleInput2Change}
        style={{ display: 'none' }}
      />
      <button onClick={props.handleSubmit}>Upload</button>
      </div> 
    </div>
  )
}

export default Upload
