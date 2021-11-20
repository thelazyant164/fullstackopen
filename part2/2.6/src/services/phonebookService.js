import axios from 'axios'

const getContactList = url => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const addContactList = (url, newPerson) => {
  const request = axios.post(url, newPerson)
  return request.then(response => response.data)
}

const removeContactList = url => {
  const request = axios.delete(url)
  return request.then(response => response)
}

const updateContactList = (url, newPerson) => {
  const request = axios.put(url, newPerson)
  return request.then(response => response)
}

const phonebookService = {
  getContactList,
  addContactList,
  removeContactList,
  updateContactList
}

export default phonebookService