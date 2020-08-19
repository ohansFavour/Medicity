import React from 'react'
import { Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Result from './components/Result/Result'
import SignupDoctor from './pages/Signup/Signup'
import SigninPage from './pages/signin/SigninPage'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact={true} path="/test" component={Result} />
        <Route exact={true} path="/sign-up" component={SignupDoctor} />
        <Route exact={true} path="/sign-in" component={SigninPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
