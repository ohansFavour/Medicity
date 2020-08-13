import React from 'react'
import { Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// components
import Header from './components/header/Header'
import Footer from './components/footer/footer'


// pages
import Homepage from './pages/homepage/Homepage'
import SigninPage from './pages/signin/SigninPage'
import OnlineDiagnosis from './pages/onlineDiagnosis/OnlineDiagnosis'
import AiPage from './pages/aiPage/AiPage'
import Checkup from './pages/Checkup/Checkup'



const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/sign-in" component={SigninPage} />
        <Route exact={true} path="/online-diagnosis" component={OnlineDiagnosis} />
        <Route exact={true} path="/ai-diagnosis" component={AiPage} />
        <Route exact={true} path="/test" component={Checkup} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
