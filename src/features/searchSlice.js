import { createSlice } from '@reduxjs/toolkit'
import { setLoading } from './countriesSlice'
const initialState = {
    searchValue: '',
    selectValue: '',
    error: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.searchValue = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
    },
})

// console.log(uiSlice)
// export const { setSearch } = searchSlice.actions

export const setSearch = function (value) {
    console.log(value === '')

    return async function (dispatch) {
        dispatch({ type: 'countries/setLoading' })
        dispatch({ type: 'search/setSearch', payload: value })
        // https://restcountries.com/v3.1/all
        try {
            const res = await fetch(
                `https://restcountries.com/v3.1/${
                    value === '' ? 'all' : `/name/${value}`
                }`
            )
            // const res = await fetch(`https://restcountries.com/v3.1/name/${value}`)
            const data = await res.json()
            console.log(res.ok)
            if (!res.ok) throw new Error('Country not found')
            console.log(data)
            dispatch({ type: 'countries/getAll', payload: data })
        } catch (error) {
            // dispatch({ type: 'search/setError', payload: error.message })
            dispatch({ type: 'countries/setError', payload: error.message })
        }
    }
}

export default searchSlice.reducer
