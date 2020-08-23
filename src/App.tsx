import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// styles
import './App.css'

// pages
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import SignupDoctor from './pages/Signup/Signup'
import SigninPage from './pages/signin/SigninPage'

// context
import { StoreContext } from './context/store'

const App: React.FC = (): JSX.Element => {
  const { state } = useContext(StoreContext)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route
            exact={true}
            path="/sign-up"
            render={() => {
              return state.currentUser ? <Redirect to="/dashboard" /> : <SignupDoctor />
            }}
          />
          <Route
            exact={true}
            path="/sign-in"
            render={() => (state.currentUser ? <Redirect to="/dashboard" /> : <SigninPage />)}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
