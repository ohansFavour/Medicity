import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// styles
import './Sidebar.scss'

// images
import Logo from '../../assets/images/logo.png'
import Ai from '../../assets/images/ailogo.svg'
import Help from '../../assets/images/XMLID_1489_.svg'
import Check from '../../assets/images/021-medical-history.svg'
import Logout from '../../assets/images/5352308321577437005.svg'

const Sidebar = (props: any) => {
 const handleLogout = () => {
    props.history.push('/')
  }
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="sidebar__items">
        <Link to="/dashboard" className="sidebar__item">
          <img src={Ai} alt="ai" />
          Ai Diagnosis
        </Link>
        <Link to="/checkup" className="sidebar__item">
          <img alt="checkup" src={Check} />
          Check up System
        </Link>
        <Link to="/ai-diagnosis" className="sidebar__item">
          <img alt="help" src={Help} />
          Help
        </Link>
      </div>
      <div className="sidebar__footer " onClick={handleLogout}>
        <img alt="logout" src={Logout} />
        Logout
      </div>
    </div>
  )
}

export default withRouter(Sidebar)
