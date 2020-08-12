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

  let [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleStateChange = (state: any) =>{
 
    setMenuOpen(state.isOpen)  
  }
 
  

   return (
    <Menu
      customBurgerIcon={<img src={Burger} alt="hamburger" />}
      disableAutoFocus={true}
      right={true}
      isOpen ={menuOpen}
      onStateChange = {(state)=> handleStateChange(state)}
    >
      <a id="home" className="menu-item" href="/" onClick={()=> setMenuOpen(false)}>
        Home
      </a>
      <div id="home" className="menu-item">
        <div className="menu-item__drop">
          {' '}
          Service <img src={DownArrow} alt="down-arrow" className="down-arrow" />
          <div className="dropdown__toggle">
            <DropDown closeTab={setMenuOpen}/>
          </div>
        </div>
      </div>
      <a id="home" className="menu-item" href="/" onClick={()=> setMenuOpen(false)}>
        Contact Us
      </a>

      <Button width={120} height={44} title="SIGN IN" color="#E26777"  handleClick={()=> setMenuOpen(false)}/>
     
    </Menu>
  )
}

export default Hamburger
