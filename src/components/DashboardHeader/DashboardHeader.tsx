import React, { useState } from 'react'

import './DashboardHeader.scss'
import Logo from '../../assets/images/logo.png'
import Menu from '../Menu/Menu'
import useDocumentScrollThrottled from '../../utils'

const DashboardHeader = () => {
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
  return (
    <div className={`dashboard__header ${shadowStyle} ${hiddenStyle}`}>
      <img src={Logo} alt="logo" /> <Menu />
    </div>
  )
}

export default DashboardHeader
