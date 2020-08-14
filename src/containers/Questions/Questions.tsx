import React, { useEffect } from 'react'
import Question from '../../components/Question/Question'
import './Questions.scss'

const Questions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="questions">
      <h3>Please check all the statements below that apply to you</h3>
      <div className="questions__container">
        <Question name="I am overweight or obese" />
        <Question name="I smoke cigarettes" />
        <Question name="I've recently injured" />
        <Question name="I have high cholesterol" />
        <Question name="I have high hypertension" nohr={true} />
      </div>
    </div>
  )
}

export default Questions
