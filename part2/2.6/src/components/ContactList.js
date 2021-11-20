import React from 'react'

const ContactList = ({shownPersons, confirmDelete}) => <>
  <h2>Numbers</h2>
  {shownPersons.map(person => <div key={person.name}>
    {person.name}: {person.number} <button onClick={confirmDelete(person)}>delete</button>
  </div>)}
</>

export default ContactList