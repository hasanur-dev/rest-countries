import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import { getCountry, setLoading } from '../features/countriesSlice'
function Country() {
    const { countryName } = useParams()
    const dispatch = useDispatch()
    const { isLoading, selectedCountry } = useSelector(
        (store) => store.countries
    )

    useEffect(() => {
        dispatch(getCountry(countryName))
    }, [dispatch, countryName])

    if (isLoading) {
        return <Loader />
    }

    const {
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
        flags,
    } = selectedCountry

    console.log(selectedCountry)
    // return <h2>hi</h2>

    const getValuesOfObject = function (obj) {
        const keys = Object.keys(obj)
        return keys.map((key) => obj[key])
    }
    return (
        <div className="">
            <div className="mt-8 lg:mt-20 pb-28 px-[7%] 2xl:px-0 text-blue-black dark:text-white max-w-[1280px] mx-auto">
                <div>
                    <button className="transition-all duration-500 flex items-center gap-1 bg-white dark:bg-blue-dark shadow-md px-6 lg:px-8 active:scale-95 py-2 rounded-sm hover:scale-105">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                        Back
                    </button>
                </div>
                <div className="mt-14 lg:mt-20 lg:flex items-center gap-14 lg:gap-16 xl:gap-20 2xl:gap-28 justify-between">
                    <div className="min-w-80 max-w-[500px] lg:max-w-[600px] shrink-[2]">
                        <img src={flags?.svg} alt={flags?.alt} />
                    </div>
                    <div className="mt-10 lg:mt-0 lg:flex lg:flex-col shrink-[1] ">
                        <h2 className="font-bold text-3xl">{name?.common}</h2>
                        <div className="mt-6 grid gap-12 md:flex">
                            <div className="grid gap-3">
                                <p>
                                    <span className="font-semibold">
                                        Native Name:{' '}
                                    </span>
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {name &&
                                            getValuesOfObject(name?.nativeName)
                                                .map((n) => n.common)
                                                .join(', ')}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Population:
                                    </span>{' '}
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {population}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Region:
                                    </span>{' '}
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {region}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Sub Region:
                                    </span>{' '}
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {subregion}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Capital:
                                    </span>{' '}
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {capital}
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p>
                                    <span className="font-semibold">
                                        Top Level Domain:
                                    </span>
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {' '}
                                        {tld}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Currencies:
                                    </span>
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {' '}
                                        {currencies &&
                                            getValuesOfObject(currencies)
                                                .map((cur) => cur.name)
                                                .join(', ')}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Languages:
                                    </span>
                                    <span className="text-blue-black/70 dark:text-gray-light/90 font-light">
                                        {' '}
                                        {languages &&
                                            getValuesOfObject(languages).join(
                                                ', '
                                            )}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 lg:flex items-center gap-4">
                            <p className="text-lg text-nowrap">
                                Border Countries:
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6 lg:mt-0">
                                {borders &&
                                    borders.map((c) => (
                                        <button
                                            key={c}
                                            className="transition-all duration-500 flex items-center gap-1 bg-white dark:bg-blue-dark shadow-md px-6  active:scale-95 py-2 rounded-sm hover:scale-105"
                                        >
                                            {c}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country
