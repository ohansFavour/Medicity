import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

// components
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'

// pages
import OnlineDiagnosis from '../onlineDiagnosis/OnlineDiagnosis'
import AiPage from '../aiPage/AiPage'
import Checkup from '../Checkup/Checkup'
import ScrollToTop from '../ScrollToTop'
import Homepage from '../homepage/Homepage'

const Home = (props: any) => {
  return (
    <div>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact={true} path={`${props.match.path}`} component={Homepage} />
          <Route
            exact={true}
            path={`${props.match.path}online-diagnosis`}
            component={OnlineDiagnosis}
          />
          <Route exact={true} path={`${props.match.path}ai-diagnosis`} component={AiPage} />
          <Route exact={true} path={`${props.match.path}checkup`} component={Checkup} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </div>
  )
}

export default withRouter(Home)
