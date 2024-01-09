const obj = {
    name: {
        common: 'India',
        official: 'Republic of India',
        nativeName: {
            eng: {
                official: 'Republic of India',
                common: 'India',
            },
            hin: {
                official: 'भारत गणराज्य',
                common: 'भारत',
            },
            tam: {
                official: 'இந்தியக் குடியரசு',
                common: 'இந்தியா',
            },
        },
    },
    tld: ['.in'],
    cca2: 'IN',
    ccn3: '356',
    cca3: 'IND',
    cioc: 'IND',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
        INR: {
            name: 'Indian rupee',
            symbol: '₹',
        },
    },
    idd: {
        root: '+9',
        suffixes: ['1'],
    },
    capital: ['New Delhi'],
    altSpellings: [
        'IN',
        'Bhārat',
        'Republic of India',
        'Bharat Ganrajya',
        'இந்தியா',
    ],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
        eng: 'English',
        hin: 'Hindi',
        tam: 'Tamil',
    },
    latlng: [20, 77],
    landlocked: false,
    borders: ['BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK'],
    area: 3287590,
    demonyms: {
        eng: {
            f: 'Indian',
            m: 'Indian',
        },
        fra: {
            f: 'Indienne',
            m: 'Indien',
        },
    },
    flag: '🇮🇳',
    maps: {
        googleMaps: 'https://goo.gl/maps/WSk3fLwG4vtPQetp7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/304716',
    },
    population: 1380004385,
    gini: {
        2011: 35.7,
    },
    fifa: 'IND',
    car: {
        signs: ['IND'],
        side: 'left',
    },
    timezones: ['UTC+05:30'],
    continents: ['Asia'],
    flags: {
        png: 'https://flagcdn.com/w320/in.png',
        svg: 'https://flagcdn.com/in.svg',
        alt: 'The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes — the Ashoka Chakra — is centered in the white band.',
    },
    coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/in.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/in.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
        latlng: [28.6, 77.2],
    },
    postalCode: {
        format: '######',
        regex: '^(\\d{6})$',
    },
}
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

    if (isLoading) {
        return <Loader />
    }
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
                                {borders.map((c) => (
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
