import React, { useState, useEffect } from 'react'
import './AutoSuggest.scss'

import Selected from '../Selected/Selected'
import Suggestion from '../Suggestion/Suggestion'
import Symptoms from '../../assets/data/Symptoms def.json'

const AutoSuggest = (props: any) => {
  const [userInput, setUserInput] = useState('')
  const [chosen, setChosen] = useState<any>([])
  const [selectedDisease, setSelectedDisease] = useState<any>([])

  const handleChange = (e: any) => {
    setUserInput(e.target.value)
  }
  const handlePush = (suggestion: any) => {
    setUserInput('')
    const newChosen = [...chosen]
    const there2 = newChosen.filter((entry) => entry.name === suggestion.name)
    if (there2.length === 1) {
      return
    }
    newChosen.push(suggestion)
    setChosen(newChosen)
  }

  const keys = Object.keys(Symptoms)
  const values = Object.values(Symptoms)
  const onlySecond = values.map((entry: any, index) => {
    const neededArray: any = Object.values(entry)
    const neededItem: any = neededArray[1].split('\n')
    return neededItem.map((entry) => {
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
    if (!userInput && chosen.length && chosen.length === 1) {
      return <Suggestion text="Try to add more than one symptom" setUserInput={setUserInput} />
    }
    if (!userInput) {
      return <Suggestion text="Enter your symptoms" setUserInput={setUserInput} />
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

  const deleteEntry = (item: any) => {
    const newChosen = [...chosen]
    setChosen(newChosen.filter((entry) => entry.name !== item.name))
  }

  useEffect(() => {
    props.setData(chosen)
  }, [chosen, props])

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
          {chosen.map((symptom: any, index: number) => (
            <Selected delete={deleteEntry} key={index} entry={symptom} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AutoSuggest
