import React from 'react'

import Normal from '../../assets/images/IM-0019-0001@2x.png'
import Infected from '../../assets/images/CHNCXR_0341_1@2x.png'

import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Tuberculosis Detection System',
  details: 'This system detects tuberculosis through an x-ray of the chest',
  show:
    'Above is an example of a normal chest scan and a tuberculosis infected chest scan All that is needed to be done is listed below',
  img: [
    { alt: 'Normal Chest Scan', src: Normal },
    { alt: 'Tuberculosis Infected Chest Scan', src: Infected },
  ],
}
const Tuberculosis = () => {
  return <TestStart {...details} />
}

export default Tuberculosis
