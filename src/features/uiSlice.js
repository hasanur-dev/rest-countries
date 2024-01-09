import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    darkMode: true,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleDarkMode(state, action) {
            console.log('darkMode')
            state.darkMode = !state.darkMode
        },
    },
})

export const { toggleDarkMode } = uiSlice.actions

export default uiSlice.reducer
