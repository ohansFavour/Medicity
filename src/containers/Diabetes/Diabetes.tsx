import React from 'react'

import DiabetesScan from '../../assets/images/causes-of-diabetes.png'
import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Diabetes Detection System',
  details: 'This system detects diabetes through the patients details and symptoms',
  img: [{ alt: '', src: DiabetesScan }],
}
const Diabetes = () => {
  return <TestStart {...details} />
}

export default Diabetes
