import { createContext, useContext, useEffect, useState } from "react";

const CityContext = createContext()
const BASE_URL = "http://localhost:9000"

function Cityprovider({ children }) {

    const [cities, setCities] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})


    useEffect(function () {
        async function fetchcities() {
            try {
                setIsloading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json()
                // console.log(data)
                setCities(data)
            }
            catch {
                alert("There was an error loading date...")
            }
            finally {
                setIsloading(false)
            }
        }
        fetchcities();
    }, [])


    async function getCity(id) {
        try {
            setIsloading(true)
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json()
            console.log(data)
            setCurrentCity(data)
        }
        catch {
            alert("There was an error loading date...")
        }
        finally {
            setIsloading(false)
        }

    }

    // console.log(currentCity)


    return (
        <CityContext.Provider
            value={{
                cities, isLoading, currentCity, getCity
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