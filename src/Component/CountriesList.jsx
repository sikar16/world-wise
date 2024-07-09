import React from 'react'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CountriesItem from './CountriesItem'
import { useCity } from '../Context/CityContext'
function CountriesList() {
    const { cities, isLoading } = useCity()

    console.log(cities)
    if (isLoading) return <Spinner />
    if (!cities.length) return <Message message='there is no data' />
    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }]
        else return arr;
    }, [])
    return (
        <>
            <ul className={styles.countryList}>
                {countries.map(country => (
                    <CountriesItem country={country} key={country.id} />
                ))}
            </ul>
        </>
    )
}

export default CountriesList