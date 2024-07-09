import React from 'react'
import style from './CityItem.module.css'
export default function CountriesItem({ country }) {
    return (
        <>
            <li className={style.countryItem}>
                <span className={style.emoji}>{country.emoji}</span>
                <span className={style.country}>{country.country}</span>
            </li>
        </>
    )
}
