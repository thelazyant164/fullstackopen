import React from 'react'

const Header = props => (
  <>
    <p>This course is named "{props.course}".</p>
  </>
)

const Content = props => (
  <>
    <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}></Part>
    <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}></Part>
    <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}></Part>
  </>
)

const Part = props => (
  <>
    <p>{props.part}: {props.exercises} exercises</p>
  </>
)

const Total = props => (
  <>
    <p>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises.</p>
  </>
)

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
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
  }]}

  return (
    <>
      <Header course = {course.name}></Header>
      <Content parts = {course.parts}></Content>
      <Total parts = {course.parts}></Total>
    </>
  )
}

export default App