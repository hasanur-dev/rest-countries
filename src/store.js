import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './features/countriesSlice'
import uiReducer from './features/uiSlice'
import searchReducer from './features/searchSlice'
const store = configureStore({
    reducer: {
        countries: countriesReducer,
        ui: uiReducer,
        search: searchReducer,
    },
})

export default store
