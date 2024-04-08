import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: ""
}

export const UsernameSlice = createSlice({
    name: 'Username',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        }, 
    },
})

export const {setUsername } = UsernameSlice.actions;

export default UsernameSlice.reducer;