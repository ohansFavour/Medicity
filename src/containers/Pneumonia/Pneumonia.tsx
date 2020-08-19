import React from 'react'

import Normal from '../../assets/images/IM-0019-0001.png'
import Infect from '../../assets/images/person19_virus_50.png'
import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Pneumonia Detection System',
  details:
    'This system detects pneumonia through an x-ray of the chest',
  img: [
    { alt: 'Normal Chest Scan', src: Normal },
    { alt: 'Pneumonia Infected Chest Scan', src: Infect }
  ],
}
const Pneumonia = () => {
  return <TestStart {...details}/>
}

export default Pneumonia