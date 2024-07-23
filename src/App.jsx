import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
// import Homepage from "./Page/Homepage"
// import Product from "./Page/Product"
// import Pricing from "./Page/Pricing"
// import PagenotFound from "./Page/PageNotFound"
// import AppLayout from "./Page/AppLayout"
// import Login from "./Page/Login"
// import { useEffect, useState } from "react"
import CountriesList from "./Component/CountriesList"
import City from "./Component/City"
import Form from "./Component/Form"
import CityList from "./Component/CityList"
import { Cityprovider, useCity } from "./Context/CityContext"
import { AuthProvider } from "./Context/FakeAuthContext"
import ProectedRoute from "./Page/ProectedRoute"
import SpinnerFullPage from "./Component/SpinnerFullPage"

const Homepage = lazy(() => import("./Page/Homepage"))
const Pricing = lazy(() => import("./Page/Pricing"))
const Product = lazy(() => import("./Page/Product"))
const PagenotFound = lazy(() => import("./Page/PageNotFound"))
const AppLayout = lazy(() => import("./Page/AppLayout"))
const Login = lazy(() => import("./Page/Login"))

function App() {




  return (
    <>
      <AuthProvider>
        <Cityprovider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="app" element={<ProectedRoute><AppLayout /></ProectedRoute>} >
                  <Route index element={<Navigate replace to='cities' />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountriesList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PagenotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Cityprovider>
      </AuthProvider>
    </>
  )
}

export default App