import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

// components
import Hamburger from '../hamburger/Hamburger'
import Button from '../button/Button'
import DropDown from '../dropDown/DropDown'

// image
import Logo from '../../assets/images/logo.png'

// styles
import './Header.scss'

// functions
import useDocumentScrollThrottled from '../../utils'

const Header: React.FC = (props: any): JSX.Element => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false)
  const [shouldHideShadow, setShouldHideShadow] = useState(false)

  const MINIMUM_SCROLL = 50
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled((callbackData: any) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideShadow(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'header__shadow' : ''
  const hiddenStyle = shouldHideShadow ? 'header__hide' : ''

  const handleHome = () => {
    props.history.push('/')
  }

  const handleSignin = () => {
    props.history.push('/sign-in')
  }
 

  return (
    <div className={`header__container ${shadowStyle} ${hiddenStyle}`}>
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="health-dome-logo" onClick={handleHome} />
        </div>
        <div className="header__main">
          <div className="header__hamburger">
            <Hamburger />
          </div>
          <div className="header__items">
            <span onClick={handleHome}>Home</span>
            <span className="menu-item__drop">
              Services
              <div className="header-item__drop">
                <DropDown />
              </div>
            </span>
            <span>Contact Us</span>
            <Button
              width={120}
              height={44}
              title="SIGN IN"
              color="#E26777"
              handleClick={handleSignin}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
