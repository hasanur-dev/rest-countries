import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CountryItem from '../components/CountryItem'
import { getAll } from '../features/countriesSlice'

function Countries() {
    const { countries } = useSelector((store) => store.countries)
    const dispatch = useDispatch()

    if (countries.length === 0) dispatch(getAll())
    useEffect(() => {
        // dispatch(getAll())
    }, [dispatch])

    return (
        <div className="">
            <div className="max-w-[1280px] mt-12 lg:mt-14 mx-auto pb-24 px-[6%] md:gap-12 2xl:px-0 grid gap-9 justify-center justify-items-center sm:items-baseline grid-cols-countries">
                {countries.map((country) => (
                    <CountryItem
                        key={country.name.official}
                        country={country}
                    />
                ))}
            </div>
        </div>
    )
}

export default Countries
