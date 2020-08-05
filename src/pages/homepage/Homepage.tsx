import React from 'react'

// styles
import './Homepage.scss'

// components
import Introduction from '../../containers/introduction/Introduction'
import Medicity from '../../containers/medicity/Medicity'
import Health from '../../containers/health/Health'
import Services from '../../containers/services/Services'

const Homepage: React.FC = (): JSX.Element => {
  return (
    <div className="homepage">
      <Introduction />
      <Health />
      <Medicity />
      <Services />
    </div>
  )
}

export default Homepage
