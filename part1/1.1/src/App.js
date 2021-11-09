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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course = {course}></Header>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}></Content>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}></Total>
    </>
  )
}

export default App