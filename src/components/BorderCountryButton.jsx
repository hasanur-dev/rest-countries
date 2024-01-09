import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function BorderCountryButton({ code }) {
    const { countries } = useSelector((store) => store.countries)
    const [name, setName] = useState(() => {
        if (countries.length === 0) return ''
        return countries.filter((c) => c.cioc === code)[0]?.name.common
    })

    useState(() => {
        if (name) return
        try {
            fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
                .then((res) => res.json())
                .then((data) => setName(data.at(0).name.common))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        name && (
            <Link to={`/country/${name}`}>
                <div>
                    <button className="transition-all duration-500 flex items-center gap-1 bg-white dark:bg-blue-dark shadow-md px-6  active:scale-95 py-2 rounded-sm hover:scale-105">
                        {name}
                    </button>
                </div>
            </Link>
        )
    )
}

export default BorderCountryButton
