import React from 'react'

// styles
import './App.css'

// components
import Introduction from './containers/introduction/Introduction'
import Health from './containers/health/Health'
import Medicity from './containers/medicity/Medicity'
import Services from './containers/services/Services'
import Footer from './components/footer/footer'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Introduction />
      <Health />
      <Medicity />
      <Services />
      <Footer/>
    </div>
  )
}

export default App
