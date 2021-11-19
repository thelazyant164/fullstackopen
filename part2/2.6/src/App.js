import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import InputForm from './components/InputForm'
import ContactList from './components/ContactList'

const App = () => {

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        const initialData = response.data
        setPersons(initialData)
      })
  }, [])

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPass, setFilterPass ] = useState('')
  const [ shownPersons, setShownPersons ] = useState(persons)

  useEffect(
    () => {
      if (filterPass !== '') {
        setShownPersons(persons.filter(person => person.name.includes(filterPass)))
      } else {
        setShownPersons(persons)
      }
    }, [ filterPass, persons ]
  )

  const filterEvent = event => {
    setFilterPass(event.target.value)
  }

  const handleChange = event => {
    const newValue = event.target.value
    if ((/[a-zA-Z]/).test(newValue)) {
      setNewName(newValue)
    } else {
      setNewNumber(newValue)
    }
  }

  const submit = event => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newPerson.name) === undefined) {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return <>
    <h2>Phonebook</h2>
    <Filter filterPass={filterPass} filterEvent={filterEvent}/>
    <InputForm submit={submit} newName={newName} newNumber={newNumber} handleChange={handleChange}/>
    <ContactList shownPersons={shownPersons}/>
  </>
}

export default App