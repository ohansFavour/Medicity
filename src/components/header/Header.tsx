import React from 'react'

// components
import Hamburger from '../hamburger/Hamburger'
import Button from '../button/Button'
import DropDown from '../dropDown/DropDown'

// image
import Logo from '../../assets/images/logo.png'

// styles
import './Header.scss'

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="health-dome-logo" />
      </div>
      <div className="header__main">
        <div className="header__hamburger">
          <Hamburger />
        </div>
        <div className="header__items">
          <span>Home</span>
          <span className="menu-item__drop">
            Services
            <div className="header-item__drop">
              <DropDown />
            </div>
          </span>
          <span>Contact Us</span>
          <Button width={120} height={44} title="SIGN IN" color="#E26777" handleClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Header
