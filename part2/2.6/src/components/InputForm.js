import React from 'react'

const InputForm = ({submit, newName, newNumber, handleChange}) => <>
  <h3>Add a new</h3>
    <form onSubmit={submit}>
      <div>
        Name: <input value={newName} onChange={handleChange}/>
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
</>

export default InputForm