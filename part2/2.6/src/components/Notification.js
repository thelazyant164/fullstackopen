import React from 'react'

const Notification = ({message}) => {
  if (message === null) {
    return null
  } else if (message.succeed) {
    return <div className="succeed">{message.content}</div>
  }
  else {
    return <div className="error">{message.content}</div>
  }
}

export default Notification