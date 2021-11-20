import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import InputForm from './components/InputForm'
import ContactList from './components/ContactList'
import Notification from './components/Notification'
import phonebookService from './services/phonebookService'
import './index.css'

const App = () => {
  const baseURL = "http://localhost:3001/persons"

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPass, setFilterPass ] = useState('')
  const [ shownPersons, setShownPersons ] = useState(persons)
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    phonebookService
      .getContactList(baseURL)
      .then(contactList => {
        setPersons(contactList)
      })
  }, [])

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
      number: newNumber,
      id: persons.length + 1
    }
    const possibleDuplicatePerson = persons.find(person => person.name === newPerson.name)
    if (possibleDuplicatePerson === undefined) {
      phonebookService
        .addContactList(baseURL, newPerson)
        .then(() => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
        .then(() => {
          setMessage({
            content: `${newName} is added in phonebook.`,
            succeed: true
          })
          setTimeout(() => {setMessage(null)}, 5000)
        })
    } else if (possibleDuplicatePerson.number !== newNumber) {
      const ok = window.confirm(`${newName} is already added to phonebook. Update phone number?`)
      if (ok) {
        const id = possibleDuplicatePerson.id
        phonebookService.updateContactList(`${baseURL}/${id}`, {...possibleDuplicatePerson, number: newNumber})
        .then(() => {
          phonebookService
          .getContactList(baseURL)
          .then(contactList => {
          setPersons(contactList)})
        })
        .then(() => {
          setMessage({
            content: `${newName}'s new number is updated in phonebook.`,
            succeed: true
          })
          setTimeout(() => {setMessage(null)}, 5000)
        })
        .catch(() => {
          setMessage({
            content: `${newName} is already removed from phonebook.`,
            succeed: false
          })
          setTimeout(() => {setMessage(null)}, 5000)
        })
      }
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const confirmDelete = person => () => {
    const ok = window.confirm(`Delete "${person.name}"?`)
    if (ok) {
      phonebookService.removeContactList(`${baseURL}/${person.id}`)
      .then(() => {
        phonebookService
        .getContactList(baseURL)
        .then(contactList => {
        setPersons(contactList)})
      })
      .then(() => {
        setMessage({
          content: `${person.name} is removed from phonebook.`,
          succeed: true
        })
        setTimeout(() => {setMessage(null)}, 5000)
      })
    }
  }

  return <>
    <Notification message={message}/>
    <h2>Phonebook</h2>
    <Filter filterPass={filterPass} filterEvent={filterEvent}/>
    <InputForm submit={submit} newName={newName} newNumber={newNumber} handleChange={handleChange}/>
    <ContactList shownPersons={shownPersons} confirmDelete={confirmDelete}/>
  </>
}

export default App