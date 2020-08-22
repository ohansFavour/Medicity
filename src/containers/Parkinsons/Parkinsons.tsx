import React from 'react'

import Wave from '../../assets/images/V06PE03@2x.png'
import Spiral from '../../assets/images/V06PO03@2x.png'

import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: "Parkinson's Disease Detection System",
  details: "This system detects Parkinson's disease using drawings of wave and spirals",
  show:
    "Above is an example of a drawing of spiral and wave drawn by a Parkinson's Patient. All that is needed to be done is listed below",
  img: [
    { alt: 'wave', src: Wave },
    { alt: 'spiral', src: Spiral },
  ],
}
const Parkinsons = () => {
  return <TestStart {...details} />
}

export default Parkinsons
