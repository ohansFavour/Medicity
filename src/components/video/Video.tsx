import React from 'react'
import Flash from 'react-reveal/Flash'

// components

// images
// import Poster from '../../assets/images/video.jpg'

// styles
import './Video.scss'

const Video = () => {
  return (
   <Flash duration={4000}>
     <iframe
      src="https://drive.google.com/file/d/1Im8_xv2VO6MBVaWkQWqg77UzHWIn0Jn9/preview"
      width="100%"
      height="350"
      title="Medicity_Mp4"
    ></iframe>
   </Flash> 
  )
}

export default Video