import React from 'react'

// components

// images
import Poster from '../../assets/images/video.jpg'

// styles
import './Video.scss'

const Video = () => {
  return (
    <video width="100%" height="100%" controls={true} poster={Poster}>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
