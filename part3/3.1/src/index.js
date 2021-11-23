const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

morgan.token('reqBodyToString', (req, res) => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqBodyToString'))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/info', (req, res) => {
  const date = new Date()
  const display = `Phonebook has info for ${persons.length} people.`
  res.send(display + date.toString())
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person === undefined) {
    res.status(404).end()
  } else {
    res.json(person)
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  const newPerson = {
    ...body,
    "id": Math.random() * 200,
  }
  if (newPerson.name === undefined || newPerson.number === undefined) {
    return res.status(400).json({ 
      error: 'name or number is missing' 
    })
  } else if (persons.find(person => person.name === newPerson.name) !== undefined) {
    return res.status(400).json({ 
      error: 'name must be unique' 
    })
  } else {
    persons = persons.concat(newPerson)
    res.json(persons)
  }
})

app.listen(3001, () => {
  console.log(`Server running on port ${3001}`)
})