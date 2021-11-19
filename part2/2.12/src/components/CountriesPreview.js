import React from 'react'

const CountriesPreview = ({shownCountries, expand, listCountries}) => {
  const shortList = shownCountries.length
  if (listCountries === false && shortList > 10) {
    return <div>
      Too many matches, specify clearer filter.
    </div>
  } else if (listCountries === false && shortList < 1) {
    return <div>
      No match found.
    </div>
  } else if (listCountries === false && shortList === 1) {
    return <div>
    </div>
  }
  else {
    return <>
      {shownCountries.map(country => <div key={country.name}>
        {country.name}
        <button onClick={expand(country)}>detail</button>
      </div>)}
    </>
  }
}

export default CountriesPreview