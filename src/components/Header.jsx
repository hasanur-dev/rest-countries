import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../features/uiSlice'

function Header() {
    const { darkMode } = useSelector((store) => store.ui)
    const dispatch = useDispatch()
    const toggleTheme = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <header className="transition-colors text-blue-black dark:text-gray-light duration-300 bg-white dark:bg-blue-dark shadow-md ">
            <div className="flex justify-between items-center py-8 sm:py-7 lg:py-6 p-[7%] max-w-[1280px] 2xl:px-1 mx-auto">
                <a href="/">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-medium">
                        Where in the world?
                    </h1>
                </a>
                <div
                    onClick={toggleTheme}
                    className="flex items-center gap-2 cursor-pointer sm:text-lg"
                >
                    <div className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={darkMode ? 'white' : 'none'}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            // height={10}
                            // width={10}
                            className="w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                            />
                        </svg>
                    </div>
                    <span>Dark Mode</span>
                </div>
            </div>
        </header>
    )
}

export default Header
