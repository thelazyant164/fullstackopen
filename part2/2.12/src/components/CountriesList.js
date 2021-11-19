import React from 'react'

const CountriesList = ({country, shouldNotShow, weatherObj}) => {
  if (shouldNotShow) {
    return <></>
  }
  else {
    return <>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Languages spoken:</h3>
      <ul>
        {country.languages.map(language => <li key={language.name}>
          {language.name}
        </li>
        )}
      </ul>
      <img src={country.flags[0]} alt={`Flag of ${country.name}`}/>
      {/* <h3>Weather in {country.capital}</h3>
      <b>Temperature: </b>{weatherObj.temperature}
      <img src={weatherObj.weather_icons[0]} alt="Weather"/>
      <b>Wind: </b>{`${weatherObj.wind_speed} mph direction ${weatherObj.wind_dir}`} */}
    </>
  }
}

export default CountriesList