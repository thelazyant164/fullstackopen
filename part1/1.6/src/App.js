import React, { useState } from 'react'

const Button = ({onClick, text}) => (
  <>
    <button onClick={onClick}>{text}</button>
  </>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  } else {
    return <>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={good + neutral + bad}></StatisticLine>
        <StatisticLine text="average" value={(good * 1 + bad * (-1))/(good + bad)}></StatisticLine>
        <StatisticLine text="positive" value={good/(good + neutral + bad) * 100 + "%"}></StatisticLine>
      </table>
    </>
  }
}

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
      <Button onClick={handleClick(good, setGood)} text="good"></Button>
      <Button onClick={handleClick(neutral, setNeutral)} text="neutral"></Button>
      <Button onClick={handleClick(bad, setBad)} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App