import React from 'react'

import Normal from '../../assets/images/stress-3@2x.png'

import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Stress Detection System',
  details: 'This system detects stress through the patients details and symptoms',
  show: '',
  one:"Answer given questions correctly.",
  two: "Make sure details given are precise and in the right format.",
  img: [{ alt: ' ', src: Normal }],
}
const Stress = () => {
  return <TestStart {...details} />
}

export default Stress
