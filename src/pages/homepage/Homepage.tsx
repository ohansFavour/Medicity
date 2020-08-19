import React from 'react'

// styles
import './Homepage.scss'

// components
import Introduction from '../../containers/introduction/Introduction'
import Medicity from '../../containers/medicity/Medicity'
import Health from '../../containers/health/Health'
import Services from '../../containers/services/Services'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'

const Homepage: React.FC = (): JSX.Element => {
  return (
    <div className="homepage">
      <Header/>
      <Introduction />
      <Health />
      <Medicity />
      <Services />
      <Footer/>
    </div>
  )
}

export default Homepage
