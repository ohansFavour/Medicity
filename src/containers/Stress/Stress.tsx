import React from 'react'

import Normal from '../../assets/images/stress-3@2x.png'

import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Stress Detection System',
  details: 'This system detects stress through the patients details and symptoms',
  show: '',
  img: [{ alt: ' ', src: Normal }],
}
const Stress = () => {
  return <TestStart {...details} />
}

export default Stress
