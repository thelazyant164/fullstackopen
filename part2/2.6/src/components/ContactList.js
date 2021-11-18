import React from 'react'

const ContactList = ({shownPersons}) => <>
  <h2>Numbers</h2>
  {shownPersons.map(person => <div key={person.name}>{person.name}: {person.number}</div>)}
</>

export default ContactList