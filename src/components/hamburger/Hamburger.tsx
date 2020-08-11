import React, { useState } from 'react'
import { stack as Menu } from 'react-burger-menu'

// components
import Button from '../button/Button'
import DropDown from '../dropDown/DropDown'

// images
import Burger from '../../assets/images/menu.svg'
import DownArrow from '../../assets/images/down-arrow.svg'

// styles
import './Hamburger.scss'

const Hamburger: React.FC = (): JSX.Element => {
  const [, setBtnStatus] = useState<boolean>(false)

  
    
 

  return (
    <Menu
      customBurgerIcon={<img src={Burger} alt="hamburger" />}
      disableAutoFocus={true}
      right={true}
    >
      <a id="home" className="menu-item" href="/" onClick={()=>{setBtnStatus(false)}}>
        Home
      </a>
      <div id="home" className="menu-item">
        <div className="menu-item__drop">
          {' '}
          Service <img src={DownArrow} alt="down-arrow" className="down-arrow" />
          <div className="dropdown__toggle">
            <DropDown closeTab={setBtnStatus}/>
          </div>
        </div>
      </div>
      <a id="home" className="menu-item" href="/" onClick={()=>{setBtnStatus(false)}}>
        Contact Us
      </a>

      <Button width={120} height={44} title="SIGN IN" color="#E26777" handleClick={()=>{setBtnStatus(false)}} />
    </Menu>
  )
}

export default Hamburger
