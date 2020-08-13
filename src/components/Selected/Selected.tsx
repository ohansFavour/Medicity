import React from 'react'

import './Selected.scss'

const Selected = (props: any) => {
  return (
    <div className="selected">
      <span>{props.name}</span>
      <span className="selected__cancel" onClick={()=>props.delete(props.name)}>
        X
      </span>
    </div>
  )
}

export default Selected
