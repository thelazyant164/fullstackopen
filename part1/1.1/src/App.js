import React from 'react'

const Header = props => (
  <>
    <p>This course is named "{props.course}".</p>
  </>
)

const Content = props => (
  <>
    <Part part = {props.part1} exercises = {props.exercises1}></Part>
    <Part part = {props.part2} exercises = {props.exercises2}></Part>
    <Part part = {props.part3} exercises = {props.exercises3}></Part>
  </>
)

const Part = props => (
  <>
    <p>{props.part}: {props.exercises} exercises</p>
  </>
)

const Total = props => (
  <>
    <p>Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3} exercises.</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]

  return (
    <>
      <Header course = {course}></Header>
      <Content part1 = {parts[0].name} part2 = {parts[1].name} part3 = {parts[2].name} exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises}></Content>
      <Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises}></Total>
    </>
  )
}

export default App