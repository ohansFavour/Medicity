import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AiDashboard from '../../containers/aiDashboard/AiDashboard'
import Sidebar from '../../containers/Sidebar/Sidebar'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Avatar from '../../containers/Avatar/Avatar'
import Parkinsons from '../../containers/Parkinsons/Parkinsons'
import ParkinsonsResult from '../../containers/ParkinsonsResult/ParkinsonsResult'
import ParkinsonsUpload from '../../containers/ParkinsonUpload/ParkinsonsUpload'
import EyeDefect from '../../containers/EyeDefect/EyeDefect'
import Pneumonia from '../../containers/Pneumonia/Pneumonia'
import Cardio from '../../containers/Cardio/Cardio'
import Diabetes from '../../containers/Diabetes/Diabetes'

const Dashboard = (props: any) => {
  return (
    <>
      <DashboardHeader />
      <Avatar />
      <Sidebar />
      <Switch>
        <Route exact={true} path={`${props.match.path}`} component={AiDashboard} s />
        <Route exact={true} path={`${props.match.path}/parkinsons`} component={Parkinsons} />
        <Route
          exact={true}
          path={`${props.match.path}/parkinsons/upload`}
          component={ParkinsonsUpload}
        />
        <Route
          exact={true}
          path={`${props.match.path}/parkinsons/result`}
          component={ParkinsonsResult}
        />
        <Route exact={true} path={`${props.match.path}/eye-defect`} component={EyeDefect} />
        <Route exact={true} path={`${props.match.path}/pneumonia`} component={Pneumonia} />
        <Route exact={true} path={`${props.match.path}/cardiovascular`} component={Cardio} />
        <Route exact={true} path={`${props.match.path}/diabetes`} component={Diabetes} />
      </Switch>
    </>
  )
}

export default withRouter(Dashboard)
