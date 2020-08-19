import React from 'react'

// styles
import './Avatar.scss'

// Image
import Profile from '../../assets/images/woman-in-white-medical-robe-3714743.png'

const Avatar = (props: any) => {
  return (
    <div className={` avatar ${props.mobile ? 'avatar--mobile' : 'avatar--desktop'}`}>
      <img alt="avatar" src={Profile} />
      <div className="avatar__details">
        <span className="avatar__name">John Doe</span>
      </div>
    </div>
  )
}

export default Avatar
