import React from 'react'

import DiabetesScan from '../../assets/images/causes-of-diabetes.png'
import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Diabetes Detection System',
  details: 'This system detects diabetes through the patients details and symptoms',
  img: [{ alt: '', src: DiabetesScan }],
  one:"Answer given questions correctly.",
  two: "Make sure details given are precise and in the right format.",
}
const Diabetes = () => {
  return <TestStart {...details} />
}

export default Diabetes
