import { createContext, useContext, useEffect, useReducer, useState } from "react";

const CityContext = createContext()
const BASE_URL = "http://localhost:9000"

const initalState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: ""
}
function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoading: true
            }
        case 'cities/loaded':
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            }
        case 'city/loaded':
            return {
                ...state,
                isLoading: false,
                currentCity: action.payload
            }

        case 'city/created':
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload
            }


        case 'city/deleted':
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities.filter((city) => city.id != action.payload)],
                currentCity: {}

            }

        case 'rejected':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }


        default:
            throw new Error("Unkonew action type")
    }
}

function Cityprovider({ children }) {


    const [{ cities, isLoading, currentCity }, dispatch] = useReducer(reducer, initalState)

    // const [cities, setCities] = useState([])
    // const [isLoading, setIsloading] = useState(false)
    // const [currentCity, setCurrentCity] = useState({})


    useEffect(function () {
        async function fetchcities() {
            dispatch({ type: "loading" });
            try {
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json();
                dispatch({ type: "cities/loaded", payload: data })
            }
            catch {
                dispatch({
                    type: "rejected",
                    payload: "There was an error loading date..."
                })
            }

        }
        fetchcities();
    }, [])


    async function getCity(id) {
        if (Number(id) === currentCity.id) return;
        dispatch({ type: 'loading' })
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json()
            // console.log(data)
            dispatch({ type: 'city/loaded', payload: data })

        }
        catch {
            dispatch({ type: 'rejected', payload: "There was an error loading city..." })
        }


    }




    async function createCity(newCity) {
        dispatch({ type: 'loading' })

        try {
            const res = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json()
            // console.log(data)
            dispatch({ type: 'city/created', payload: data })
            // setCities((cities) => [data, ...cities])
            // setCurrentCity(data)
        }
        catch {
            dispatch({
                type: "rejected",
                payload: "There was an error creating the city date..."
            })
        }


    }




    async function deleteCity(id) {
        dispatch({ type: 'loading' })

        try {
            await fetch(`${BASE_URL}/cities /${id}`, {
                method: "DELETE",
            });
            dispatch({ type: 'city/deleted', payload: id })
            // setCities((cities) => cities.filter((city) => city.id != id))
            // setCurrentCity(data)
        }
        catch {
            dispatch({
                type: "rejected",
                payload: "There was an error deleting city  date..."
            })
        }

    }

    // console.log(currentCity)


    return (
        <CityContext.Provider
            value={{
                cities, isLoading, currentCity, getCity, createCity, deleteCity
            }}
        >{children}</CityContext.Provider>
    )
}
function useCity() {
    const context = useContext(CityContext)
    if (context === undefined) throw new Error("CityContext is used outside of the CityProvider")
    return context
    // console.log(context)

}

export { Cityprovider, useCity }