import React from 'react'

// styles

import './Button.scss'

interface IButtonOwnProps {
  title: string
  width: number
  height: number
  color: string
  handleClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  id?: string
}

const Button: React.FC<IButtonOwnProps> = ({
  title,
  width,
  height,
  color,
  handleClick,
  id,
}): JSX.Element => {
  return (
    <button
      className="button"
      id={id ? `${id}` : ''}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `${color} 0% 0% no-repeat padding-box`,
      }}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default Button
