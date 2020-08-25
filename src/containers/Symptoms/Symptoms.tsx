import React from 'react'
import AutoSuggest from '../../components/AutoSuggest/AutoSuggest'
import './Symptoms.scss'

const Symptoms = () => {
  return (
    <div className="symptoms">
      <div>
        <h3>Please Add Your Symptoms</h3>
        <p>Search and add your symptoms</p>
      </div>
      <AutoSuggest />
    </div>
  )
}

export default Symptoms
