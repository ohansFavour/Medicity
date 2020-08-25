import React from 'react'

// styles
import './Homepage.scss'

// components
import Introduction from '../../containers/introduction/Introduction'
import Medicity from '../../containers/medicity/Medicity'
import Health from '../../containers/health/Health'
import Services from '../../containers/services/Services'
import CovidHome from '../../containers/CovidHome/CovidHome'

const Homepage: React.FC = (): JSX.Element => {
  return (
    <div className="homepage">
      <Introduction />
      <Health />
      <CovidHome/>
      <Medicity />
      <Services />
    </div>
  )
}

export default Homepage
