import React from 'react'

// components
import Card from '../../components/card/Card'

// images
import Medical from '../../assets/images/medical-history.svg'
import Ai from '../../assets/images/021-atom.svg'

// styles
import './Services.scss'

const configObject = {
  diagnosis: {
    title: 'Online Diagnosis',
    image: Medical,
    text:
      'Feeling ill use our online symptoms checker to get certified diagnosis on what you are feeling with prescribed medication',
    alt: 'Online Diagnosis',
    customClass: 'service__diagnosis',
  },
  ai: {
    title: 'AI Diagnosis',
    image: Ai,
    text:
      'Doctors have well trained artificial intelligence models at the palm of their hands for fast and efficient diagnosis of various diseases',
    alt: 'Ai Diagnosis',
    customClass: 'ai__diagnosis',
  },
}
const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services__main">
        <Card {...configObject.diagnosis} />
        <Card {...configObject.ai} />
      </div>
    </div>
  )
}

export default Services
