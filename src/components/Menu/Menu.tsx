import React, { useState, useContext } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom'

// styles
import './Menu.scss'

// images
import Ai from '../../assets/images/ailogo.svg'
import Help from '../../assets/images/XMLID_1489_.svg'
import Check from '../../assets/images/021-medical-history.svg'
import Logout from '../../assets/images/5352308321577437005.svg'
import Burger from '../../assets/images/menu.svg'
import Avatar from '../../containers/Avatar/Avatar'
import { StoreContext } from '../../context/store'

const MenuItem = (props: any): JSX.Element => {
  let [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleStateChange = (state: any) => {
    setMenuOpen(state.isOpen)
  }
  const {dispatch} = useContext(StoreContext)
  const handleLogout = () => {
    dispatch({
      type: "SET_USER",
      payload:null
    })
     props.history.push('/')
   }

  return (
    <Menu
      customBurgerIcon={<img src={Burger} alt="hamburger" />}
      disableAutoFocus={true}
      right={true}
      isOpen={menuOpen}
      onStateChange={(state: any) => handleStateChange(state)}
      className="menu"
    >
      <div className="menu__avatar"  >
        <Avatar mobile={true} />
      </div>
      <div className="menu__items">
        <Link to="/dashboard" className="menu__item" onClick={() => setMenuOpen(false)}>
          <img src={Ai} alt="ai" />
          <span> Ai Diagnosis</span>
        </Link>
        <Link to="/checkup" className="menu__item" onClick={() => setMenuOpen(false)}>
          <img alt="checkup" src={Check} />
          <span>Check up System</span> 
        </Link>
        <Link to="/ai-diagnosis" className="menu__item" onClick={() => setMenuOpen(false)}>
          <img alt="help" src={Help} />
          <span>Help</span> 
        </Link>
      </div>
      <div className="menu__footer " onClick={handleLogout}>
        <img alt="logout" src={Logout} />
        Logout
      </div>
    </Menu>
  )
}
export default withRouter(MenuItem)
