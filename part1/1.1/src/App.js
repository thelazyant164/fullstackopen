import React from 'react'

const Header = props => (
  <>
    <p>This course is named "{props.course}".</p>
  </>
)

const Content = props => (
  <>
    <p>{props.part1}: {props.exercises1} exercises</p>
    <p>{props.part2}: {props.exercises2} exercises</p>
    <p>{props.part3}: {props.exercises3} exercises</p>
  </>
)

const Total = props => (
  <>
    <p>Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3} exercises.</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course = {course}></Header>
      <Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}></Content>
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}></Total>
    </>
  )
}

export default App