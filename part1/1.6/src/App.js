import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => (
  <>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {(good * 1 + bad * (-1))/(good + bad)}</p>
    <p>positive {good/(good + neutral + bad) * 100}%</p>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (state, setState) => () => {
    setState(state + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClick(good, setGood)}>good</button>
      <button onClick={handleClick(neutral, setNeutral)}>neutral</button>
      <button onClick={handleClick(bad, setBad)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App