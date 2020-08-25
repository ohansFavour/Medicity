import React from 'react'

import './Selected.scss'

const Selected = (props: any) => {
  return (
    <span className="selected">
      <span>{props.entry.name}</span>
      <span className="selected__cancel" onClick={()=>props.delete(props.entry)}>
        X
      </span>
    </span>
  )
}

export default Selected
