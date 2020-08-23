import React, { useContext } from 'react'
import { StoreContext } from '../../context/store'

// styles
import './Avatar.scss'

// Image
import Profile from '../../assets/images/woman-in-white-medical-robe-3714743.png'

const Avatar = (props: any) => {
  const { state } = useContext(StoreContext)
  return (
    <div className={` avatar ${props.mobile ? 'avatar--mobile' : 'avatar--desktop'}`}>
      <img alt="avatar" src={Profile} />
      <div className="avatar__details">
        <span className="avatar__name">{state.currentUser}</span>
      </div>
    </div>
  )
}

export default Avatar
