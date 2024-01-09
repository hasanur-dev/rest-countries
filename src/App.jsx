import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Country from './pages/Country'
import AppMain from './pages/AppMain'
import Header from './components/Header'

import { getAll } from './features/countriesSlice'

// https://restcountries.com/
// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/name/{name}?fullText=true
// https://restcountries.com/v3.1/alpha?codes={code},{code},{code}

export default function App() {
    const { darkMode } = useSelector((store) => store.ui)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const handleGetCountries = function () {
    //         dispatch(getAll())
    //     }
    //     handleGetCountries()
    // }, [dispatch])
    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="transition-colors duration-300 font-Nunito bg-gray-light dark:bg-blue-very-dark min-h-screen dark:text-gray-light ">
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<AppMain />} />
                        {/* <Route path="app" element={<AppMain />} /> */}
                        <Route path="country" element={<Country />} />
                        <Route
                            path="country/:countryName"
                            element={<Country />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
