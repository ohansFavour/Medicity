import React, { useState } from 'react'

import './ParkinsonsUpload.scss'
import Upload from '../../components/Upload/Upload'

const ParkinsonsUpload = (props: any) => {
  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)

  const handleSubmit = () => {
    console.log(file1, file2)
  }
  return (
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
  )
}

export default ParkinsonsUpload
