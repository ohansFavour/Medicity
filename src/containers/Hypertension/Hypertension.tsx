import React from 'react'

import Hyper from '../../assets/images/Blog_thumb-108-36@2x.png'
import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Eye Disease Detection System',
  details:
    '',
  show:
    '',
  img: [
    { alt: '', src: Hyper },
  ],
  one:"Answer given questions correctly.",
  two: "Make sure details given are precise and in the right format.",
}
const Hypertension = () => {
  return <TestStart {...details} />
}

export default Hypertension