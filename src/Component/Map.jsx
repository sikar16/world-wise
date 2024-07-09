import React from 'react'
import style from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
function Map() {
    const [search, setSearch] = useSearchParams()
    const lat = search.get("lat");
    const lng = search.get("lng")

    const navigate = useNavigate()

    console.log({ lat }, { lng })

    return (
        <div className={style.mapContainer} onClick={() => { navigate("form") }}>
            <h3>map</h3>
            <p>
                Position :- {lat},{lng}
            </p>
            <button onClick={() => setSearch({ lat: 80, lng: 30 })}>Change position</button>
        </div>
    )
}

export default Map