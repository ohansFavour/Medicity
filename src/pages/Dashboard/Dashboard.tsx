import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AiDashboard from '../../containers/aiDashboard/AiDashboard'
import Sidebar from '../../containers/Sidebar/Sidebar'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import Avatar from '../../containers/Avatar/Avatar'
import Parkinsons from '../../containers/Parkinsons/Parkinsons'
import ParkinsonsUpload from '../../containers/ParkinsonUpload/ParkinsonsUpload'
import EyeDefect from '../../containers/EyeDefect/EyeDefect'
import Pneumonia from '../../containers/Pneumonia/Pneumonia'
import Cardio from '../../containers/Cardio/Cardio'
import Diabetes from '../../containers/Diabetes/Diabetes'
import EyeUpload from '../../containers/EyeUpload/EyeUpload'
import TestResult from '../../containers/TestResult/TestResult'
import PneumoniaUpload from '../../containers/PneumoniaUpload/PneumoniaUpload'
import Tuberculosis from '../../containers/Tuberculosis/Tuberculosis'
import TuberculosisUpload from '../../containers/TuberculosisUpload/TuberculosisUpload'
import DiabetesUpload from '../../containers/DiabetesUpload/DiabetesUpload'
import Stress from '../../containers/Stress/Stress'
import CardioUpload from '../../containers/CardioUpload/CardioUpload'
import StressUpload from '../../containers/StressUpload/StressUpload'

const Dashboard = (props: any) => {
  return (
    <>
      <DashboardHeader />
      <Avatar />
      <Sidebar />
      <Switch>
        <Route exact={true} path={`${props.match.path}`} component={AiDashboard}/>
        <Route exact={true} path={`${props.match.path}/parkinsons`} component={Parkinsons} />
        <Route
          exact={true}
          path={`${props.match.path}/parkinsons/upload`}
          component={ParkinsonsUpload}
        />
        <Route exact={true} path={`${props.match.path}/parkinsons/result`} component={TestResult} />
        <Route exact={true} path={`${props.match.path}/eye-defect`} component={EyeDefect} />
        <Route exact={true} path={`${props.match.path}/eye-defect/upload`} component={EyeUpload} />
        <Route exact={true} path={`${props.match.path}/eye-defect/result`} component={TestResult} />
        <Route exact={true} path={`${props.match.path}/pneumonia`} component={Pneumonia} />
        <Route
          exact={true}
          path={`${props.match.path}/pneumonia/upload`}
          component={PneumoniaUpload}
        />
        <Route exact={true} path={`${props.match.path}/pneumonia/result`} component={TestResult} />
        <Route exact={true} path={`${props.match.path}/cardiovascular`} component={Cardio} />
        <Route
          exact={true}
          path={`${props.match.path}/cardiovascular/upload`}
          component={CardioUpload}
        />
        <Route
          exact={true}
          path={`${props.match.path}/cardiovascular/result`}
          component={TestResult}
        />

        <Route exact={true} path={`${props.match.path}/diabetes`} component={Diabetes} />
        <Route
          exact={true}
          path={`${props.match.path}/diabetes/upload`}
          component={DiabetesUpload}
        />
        <Route exact={true} path={`${props.match.path}/diabetes/result`} component={TestResult} />
        <Route exact={true} path={`${props.match.path}/tuberculosis`} component={Tuberculosis} />
        <Route
          exact={true}
          path={`${props.match.path}/tuberculosis/upload`}
          component={TuberculosisUpload}
        />
        <Route
          exact={true}
          path={`${props.match.path}/tuberculosis/result`}
          component={TestResult}
        />
        <Route exact={true} path={`${props.match.path}/stress`} component={Stress} />
        <Route exact={true} path={`${props.match.path}/stress/upload`} component={StressUpload} />
        <Route exact={true} path={`${props.match.path}/stress/result`} component={TestResult} />
      </Switch>
    </>
  )
}

export default withRouter(Dashboard)
