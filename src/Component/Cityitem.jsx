import React from 'react'
import style from './CityItem.module.css'
import { Link } from 'react-router-dom';
import { useCity } from '../Context/CityContext';
const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
function Cityitem({ city }) {
    // console.log(city)
    const { cityName, emoji, date, id, position } = city;
    const { currentCity } = useCity()
    // console.log(position)
    return (
        <li >

            <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={`${style.cityItem} ${id === currentCity.id ? style["cityItem--active"] : " "}`}>
                <span className={style.emoji}>{emoji}</span>
                <h3 className={style.name}>{cityName}</h3>
                <time className={style.date}>({formatDate(date)})</time>
                <button className={style.deleteBtn}>&times;</button>
            </Link>
        </li>
    )
}

export default Cityitem