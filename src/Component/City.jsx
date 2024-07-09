import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCity } from "../Context/CityContext";
import { useEffect } from "react";
import Spinner from "./Spinner"
import Button from "./Button";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));


function City() {
  // const [search, setSearch] = useSearchParams()
  // const lat = search.get("lat");
  // const lng = search.get("lng")
  const navigate = useNavigate()

  const { id } = useParams()
  const { getCity, currentCity, isLoading } = useCity()

  useEffect(function () {
    getCity(id)
  }, [id])

  // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };



  const { cityName, emoji, date, notes } = currentCity;
  // console.log(currentCity)

  // return (
  //   <>
  //     <h2>city {id}</h2>
  //     <p>Position :- {lat},{lng}</p>
  //   </>
  // )

  if (isLoading) return <Spinner />

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button type="back" onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}>
          &larr; back
        </Button>
      </div>
    </div >
  );
}

export default City;
