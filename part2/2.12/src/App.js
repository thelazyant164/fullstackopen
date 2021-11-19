import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountriesPreview from './components/CountriesPreview'
import CountriesList from './components/CountriesList'

const App = () => {

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then(response => {setCountries(response.data)})
  }, [])

  const [ countries, setCountries ] = useState([])
  const [ filterPass, setFilterPass ] = useState('')
  const [ shownCountries, setShownCountries ] = useState(countries)
  const [ listCountries, setListCountries ] = useState(false)
  const [ detailedViewCountry, setDetailedViewCountry ] = useState({})
  const [ weatherObj, setWeatherObj ] = useState({})

  useEffect(() => {
      if (filterPass !== '') {
        setShownCountries(countries.filter(country => country.name.toLowerCase().includes(filterPass)))
      } else {
        setShownCountries(countries)
      }
    }, [ filterPass, countries ]
  )

  useEffect(() => {
    const shortList = shownCountries.length
    if (shortList > 10 || shortList < 1) {
      setListCountries(false)
      setDetailedViewCountry({})
    } else if (shortList === 1) {
      setListCountries(false)
      setDetailedViewCountry(shownCountries[0])
    } else {
      setListCountries(true)
      setDetailedViewCountry({})
    }
  }, [shownCountries])

  useEffect(() => {
    if (Object.keys(detailedViewCountry).length !== 0) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${detailedViewCountry.capital}`)
        .then(response => {setWeatherObj(response.current)})
    }
  }, [detailedViewCountry])

  const filterEvent = event => {
    setFilterPass(event.target.value.toLowerCase())
  }

  const expand = country => () => {
    setDetailedViewCountry(country)
  }

  return <>
    <h1>Country lookup</h1>
    <Filter filterPass={filterPass} filterEvent={filterEvent}/>
    <CountriesPreview shownCountries={shownCountries} expand={expand} listCountries={listCountries}/>
    <CountriesList country={detailedViewCountry} shouldNotShow={Object.keys(detailedViewCountry).length === 0} weatherObj={weatherObj}/>
  </>
}

export default App