import React, { useState } from 'react'
import './AutoSuggest.scss'

import Selected from '../Selected/Selected'
import Suggestion from '../Suggestion/Suggestion'
import Symptoms from '../../assets/data/Symptoms def.json'

const AutoSuggest = () => {
  const [userInput, setUserInput] = useState('')
  const [selected, setSelected] = useState<any>([])
  const [selectedDisease, setSelectedDisease] = useState<any>([])

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
  const keys = Object.keys(Symptoms)
  const values = Object.values(Symptoms)
  const onlySecond = values.map((entry: any) => {
    const neededArray: any = Object.values(entry)
    const neededItem: any = neededArray[1].split('\n')
    return neededItem.map((entry, index) => {
      return {
        name: entry,
        number: index,
      }
    })
  })

  const singleArr = onlySecond.reduce((acc, current) => {
    return [...acc, ...current]
  }, [])

  const suggestion = () => {
    const availableSuggestions = singleArr.filter((suggestion) =>
      suggestion.name.toLowerCase().includes(userInput.toLowerCase())
    )
    if (!userInput && selected.length && selected.length === 1) {
      return <Suggestion text="Try to add more than one symptom" setUserInput={setUserInput} />
    }
    if (!userInput) {
      return <Suggestion text="Enter your symptoms" setUserInput={setUserInput}/>
    }
    if (userInput && availableSuggestions.length) {
      return (
        <Suggestion
          suggestion={availableSuggestions}
          add={handlePush}
          setDiseases={setSelectedDisease}
          diseases={selectedDisease}
          keys={keys}
          setUserInput={setUserInput}
        />
      )
    }
    return <Suggestion text="No suggestions" setUserInput={setUserInput} />
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
