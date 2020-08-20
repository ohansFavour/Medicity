import React from 'react'

import Cataract from '../../assets/images/cataract_027.png'
import Glaucoma from '../../assets/images/Glaucoma_041.png'
import Normal from '../../assets/images/NL_028.png'
import Retina from '../../assets/images/Retina_006.png'
import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Eye Disease Detection System',
  details:
    'This system detects eye defects or diseases such as Cataracts, Glaucoma, and Reina disease',
  show:
    'Above is an example of various eye scans from a normal eye to a retina disease infected eye All that is needed to be done is listed below',
  img: [
    { alt: 'Normal Eye Scan', src: Normal },
    { alt: 'Cataract Infected Eye', src: Cataract },
    { alt: 'Glaucoma Eye Scan', src: Glaucoma },
    { alt: 'Retina Disease Scan', src: Retina },
  ],
}
const EyeDefect = () => {
  return <TestStart {...details} />
}

export default EyeDefect
