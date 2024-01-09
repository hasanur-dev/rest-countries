import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../features/searchSlice'
import SelectMenu from './SelectMenu'
function Search() {
    const dispatch = useDispatch()
    const { searchValue, selectValue } = useSelector((store) => store.search)
    return (
        <div className="">
            <div className="mt-7 sm:mt-9 lg:mt-11 px-[6%] flex flex-col gap-10 md:gap-16 md:flex-row justify-between max-w-[1280px] 2xl:p-0 mx-auto">
                <form className="flex flex-1 relative max-w-[480px] ">
                    <div className="absolute -translate-y-1/2 top-1/2 left-8 z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                    <input
                        placeholder="Search for a country"
                        type="text"
                        value={searchValue}
                        onChange={(e) => {
                            dispatch(setSearch(e.target.value))
                        }}
                        className="transition-colors duration-300 font-semibold tracking-wide bg-white shadow-md dark:bg-blue-dark text-blue-dark dark:text-gray-light placeholder-blue-black/50 dark:placeholder-gray-light/70 text-lg px-2 py-5 w-full rounded-md indent-16 focus:border-none focus:outline-none focus:ring focus:ring-blue-black/10 dark:focus:ring-gray-light/15"
                    />
                </form>
                <div className="w-64">
                    <SelectMenu />
                </div>
            </div>
        </div>
    )
}

export default Search
