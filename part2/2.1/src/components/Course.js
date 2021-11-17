import React from 'react'

const Header = props => (
  <>
    <h2>{props.course}</h2>
  </>
)

const Content = ({parts}) => (
  <>
    {parts.map(part => <Part part = {part.name} exercises = {part.exercises} key = {part.id}/>)}
  </>
)

const Part = ({part, exercises}) => (
  <>
    <p>{part}: {exercises} exercises</p>
  </>
)

const Total = ({parts}) => {
  const exercisesPerPart = parts.map(part => part.exercises)
  const totalExercises = exercisesPerPart.reduce((total, exercises) => total += exercises)
  return <>
    <b>Total of {totalExercises} exercises.</b>
  </>
}

const Course = ({course}) => (
  <>
    <Header course = {course.name}></Header>
    <Content parts = {course.parts}></Content>
    <Total parts = {course.parts}></Total>
  </>
)

export default Course