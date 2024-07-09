import React from 'react'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Cityitem from './Cityitem'
import Message from './Message'
import { useCity } from '../Context/CityContext'
function CityList() {
    const { cities, isLoading } = useCity()
    if (isLoading) return <Spinner />
    if (!cities.length) return <Message message='there is no data' />

    return (
        <>
            <ul className={styles.cityList}>
                {cities.map(city => (
                    <Cityitem city={city} key={city.id} />
                ))}
            </ul>
        </>
    )
}

export default CityList