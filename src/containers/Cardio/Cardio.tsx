import React from 'react'

import Cac from '../../assets/images/CAC_Heart_N1803_gi473342614@2x.png'
import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Cardiovascular Detection System',
  details: 'This system detects cardiovascular disease through the patients details and symptoms',
  one:"Answer given questions correctly.",
  two: "Make sure details given are precise and in the right format.",
  img: [{ alt: '', src: Cac }],
}
const Cardio = () => {
  return <TestStart {...details} />
}

export default Cardio
