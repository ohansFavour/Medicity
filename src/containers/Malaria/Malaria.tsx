import React from 'react'

import Falciparum from '../../assets/images/Falciparum.jpeg'
import Malariae from '../../assets/images/Malariae.jpeg'
import Ovale from '../../assets/images/Ovale.jpeg'
import Vivax from '../../assets/images/Vivax.jpeg'

import TestStart from '../../components/TestStart/TestStart'

const details = {
  header: 'Malaria Detection System',
  details:
    'This system detects various types of malaria species, such as falciparum, malariae, ovale and vivax',
  show:
    'Above is an example of various malaria species pictures in the cells of a human being. All that is needed to be done is listed below',
  img: [
    { alt: 'Faciparum', src: Falciparum },
    { alt: 'Malariae', src: Malariae },
    { alt: 'Ovale', src: Ovale },
    { alt: 'Vivax', src: Vivax },
  ],
}
const Malaria = () => {
  return <TestStart {...details} />
}

export default Malaria
