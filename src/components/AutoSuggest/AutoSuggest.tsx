import React, { useState } from 'react'
import './AutoSuggest.scss'

import { suggestions } from '../../utils'
import Selected from '../Selected/Selected'
import Suggestion from '../Suggestion/Suggestion'

const AutoSuggest = () => {
  const [userInput, setUserInput] = useState('')
  const [selected, setSelected] = useState<any>([])

  const handleChange = (e: any) => {
    setUserInput(e.target.value)
  }
  const handlePush = (suggestion: any) => {
    setUserInput('')
    const newSelected = [...selected]
    const there = newSelected.filter((entry) => entry === suggestion)
    if (there.length === 1) {
      return
    }
    newSelected.push(suggestion)
    setSelected(newSelected)
  }

  const suggestion = () => {
    const availableSuggestions = suggestions.filter((suggestion) => suggestion.includes(userInput))
    if (!userInput && selected.length && selected.length===1) {
      return <Suggestion text="Try to add more than one symptom" />
    }
    if (!userInput ) {
      return <Suggestion text="Enter your symptoms" />
    }
    if (userInput && availableSuggestions.length) {
      return <Suggestion suggestion={availableSuggestions} add={handlePush} />
    }
    return <Suggestion text="No suggestions" />
  }

  const deleteEntry = (name: any) => {
    const newSelected = [...selected]
    setSelected(newSelected.filter((entry) => entry !== name))
  }

  return (
    <div className="autoSuggest">
      <div className="autoSuggest__suggest">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          id="selected"
          placeholder="Search, e.g. headache "
        />
        <div className="autoSuggest__suggestion">{suggestion()}</div>
        <div className="autoSuggest__selected">
          {selected.map((symptom: any, index: number) => (
            <Selected name={symptom} delete={deleteEntry} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AutoSuggest
