import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    code: ""
}

export const CodeSlice = createSlice({
    name: 'Code',
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.username = action.payload
        }, 
    },
})

export const {setCode } = CodeSlice.actions;

export default CodeSlice.reducer;