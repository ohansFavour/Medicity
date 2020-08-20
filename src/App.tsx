import React from 'react'
import { Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import SignupDoctor from './pages/Signup/Signup'
import SigninPage from './pages/signin/SigninPage'
import Age from './containers/Age/Age'
import { StoreProvider } from './context/store'

const App: React.FC = (): JSX.Element => {
  return (
    <StoreProvider>
      <div className="app">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/test" component={Age} />
          <Route exact={true} path="/sign-up" component={SignupDoctor} />
          <Route exact={true} path="/sign-in" component={SigninPage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </StoreProvider>
  )
}

export default App
