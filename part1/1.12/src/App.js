import React, {useState} from 'react';

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const arr = new Array(7).fill(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(arr)

  const randomize = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const vote = () => {
    const updatedVote = [...points]
    updatedVote[selected] += 1
    setPoints(updatedVote)
  }

  return <>
    <h1>Anecdote of the day</h1>
    {anecdotes[selected]}
    <p>has {points[selected]} votes</p>
    <div></div>
    <Button onClick={vote} text="vote"></Button>
    <Button onClick={randomize} text="next anecdote"></Button>
    <h1>Anecdote with most votes</h1>
    {anecdotes[points.indexOf(Math.max(...points))]}
    <p>has {Math.max(...points)} votes</p>
  </>
}

export default App;