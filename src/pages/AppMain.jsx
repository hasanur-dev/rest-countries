import Search from '../components/Search'
import Countries from './Countries'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
function AppMain() {
    const { isLoading, error } = useSelector((store) => store.countries)
    return (
        <>
            <Search />
            {error !== '' ? (
                <Error message={error} />
            ) : isLoading ? (
                <Loader />
            ) : (
                <Countries />
            )}
        </>
    )
    // return isLoading ? (
    //     <Loader />
    // ) : (
    //     <div>
    //         <Search />
    //         <Countries />
    //     </div>
    // )
}

export default AppMain
