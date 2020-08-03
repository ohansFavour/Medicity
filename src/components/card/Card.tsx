import React from 'react'

// styles
import './Card.scss'

interface ICardOwnProps {
  image: any
  title: string
  text: string
  alt: string
  customClass?: string
}

const Card: React.FC<ICardOwnProps> = ({ image, title, text, alt, customClass }): JSX.Element => {
  return (
    <div className={`card ${customClass}`}>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
