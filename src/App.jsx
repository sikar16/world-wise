import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./Page/Homepage"
import Product from "./Page/Product"
import Pricing from "./Page/Pricing"
import PagenotFound from "./Page/PageNotFound"
import AppLayout from "./Page/AppLayout"
import Login from "./Page/Login"
4// import { useEffect, useState } from "react"
import CountriesList from "./Component/CountriesList"
import City from "./Component/City"
import Form from "./Component/Form"
import CityList from './Component/CityList'
import { Cityprovider, useCity } from "./Context/CityContext"
function App() {

  // const BASE_URL = "http://localhost:9000"

  // const [cities, setCities] = useState([])
  // const [isLoading, setIsloading] = useState(false)

  // useEffect(function () {
  //   async function fetchcities() {
  //     try {
  //       setIsloading(true)
  //       const res = await fetch(`${BASE_URL}/cities`)
  //       const data = await res.json()
  //       // console.log(data)
  //       setCities(data)
  //     }
  //     catch {
  //       alert("There was an error loading date...")
  //     }
  //     finally {
  //       setIsloading(false)
  //     }
  //   }
  //   fetchcities();
  // }, [])


  return (
    <Cityprovider>
      <BrowserRouter>
        <Routes>

          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />} >
            <Route index element={<Navigate replace to='cities' />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </Cityprovider>
  )
}

export default App