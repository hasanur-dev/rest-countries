import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    countries: [],
    selectedCountry: {},
    error: '',
    isLoading: false,
    selectValue: { id: 0, name: 'Select', value: '' },
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        getAll(state, action) {
            state.countries = action.payload
            state.isLoading = false
            state.error = ''
        },
        setCountry(state, action) {
            state.selectedCountry = action.payload
            state.isLoading = false
        },
        setLoading(state) {
            state.isLoading = true
        },
        setError(state, action) {
            state.error = action.payload
            state.isLoading = false
        },
        setSelect(state, action) {
            if (action.payload === '') {
                state.selectValue = { id: 0, name: 'Select', value: '' }
                return
            }
            state.selectValue = action.payload.select
            state.countries = action.payload.data
            state.isLoading = false
        },
    },
})

export const getAll = function () {
    const url = 'https://restcountries.com/v3.1/all'

    return async function (dispatch, getState) {
        dispatch({ type: 'countries/setLoading' })
        const res = await fetch(url)
        const data = await res.json()
        dispatch({ type: 'countries/getAll', payload: data })
    }
}
export const getCountry = function (countryName) {
    return async function (dispatch, getState) {
        dispatch({ type: 'countries/setLoading' })
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        )
        const data = await res.json()
        dispatch({ type: 'countries/setCountry', payload: data[0] })
    }
}
export const setSelect = function (select) {
    console.log(select)
    if (select.value === '') return { type: 'countries/setSelect', payload: '' }
    return async function (dispatch, getState) {
        dispatch({ type: 'countries/setLoading' })
        const res = await fetch(
            `
            https://restcountries.com/v3.1/region/${select.value}`
        )
        const data = await res.json()
        dispatch({ type: 'countries/setSelect', payload: { data, select } })
    }
}
export const { setLoading } = countriesSlice.actions
export default countriesSlice.reducer
