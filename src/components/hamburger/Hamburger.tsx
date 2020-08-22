import React, { useState, useContext } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom'

// components
import Button from '../button/Button'
import DropDown from '../dropDown/DropDown'

// images
import Burger from '../../assets/images/menu.svg'
import DownArrow from '../../assets/images/down-arrow.svg'

// styles
import './Hamburger.scss'
import { StoreContext } from '../../context/store'

const Hamburger: React.FC = (props: any): JSX.Element => {
  const { state } = useContext(StoreContext)

  let [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleStateChange = (state: any) => {
    setMenuOpen(state.isOpen)
  }

  return (
    <Menu
      customBurgerIcon={<img src={Burger} alt="hamburger" />}
      disableAutoFocus={true}
      right={true}
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link id="home" className="menu-item" to="/" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <div id="home" className="menu-item">
        <div className="menu-item__drop">
          {' '}
          Service <img src={DownArrow} alt="down-arrow" className="down-arrow" />
          <div className="dropdown__toggle">
            <DropDown closeTab={setMenuOpen} />
          </div>
        </div>
      </div>
      <Link id="home" className="menu-item" to="/" onClick={() => setMenuOpen(false)}>
        Contact Us
      </Link>

      <Button
        width={120}
        height={44}
        title={`${state.currentUser ? 'DASHBOARD' : 'SIGN IN'}`}
        color="#E26777"
        handleClick={() => {
          setMenuOpen(false)
          props.history.push('/sign-in')
        }}
      />
    </Menu>
  )
}

export default withRouter(Hamburger)
