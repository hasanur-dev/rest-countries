import { Link } from 'react-router-dom'
function CountryItem({ country }) {
    const {
        flags: { svg, alt },
        name: { common: countryName },
        population,
        region,
        capital,
    } = country

    return (
        <Link
            className="self-stretch justify-self-stretch bg-white dark:bg-blue-dark shadow-xl rounded-md hover:scale-105 active:scale-100 transition-transform overflow-hidden"
            to={`country/${countryName}`}
        >
            <div className=" transition-colors duration-300 text-blue-black dark:text-gray-light   shadow-blue-black/5  min-w-60  box-border max-sm:max-w-80 ">
                <div>
                    <img src={svg} alt={alt} />
                </div>
                <div className="pt-7 pb-14 px-6 grid gap-4">
                    <h2 className="text-2xl font-bold tracking-wide">
                        {countryName}
                    </h2>
                    <ul className="grid gap-2">
                        <li>
                            <span className="font-medium">Population:</span>{' '}
                            <span className="font-light dark:text-gray-light/85">
                                {population.toLocaleString()}
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">Region:</span>{' '}
                            <span className="font-light dark:text-gray-light/85">
                                {region}
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">Capital:</span>{' '}
                            <span className="font-light dark:text-gray-light/85">
                                {capital}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default CountryItem
