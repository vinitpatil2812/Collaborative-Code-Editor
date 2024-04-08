import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clients: [],
}

export const ClientsSlice = createSlice({
    name: 'Clients',
    initialState,
    reducers: {
        addClient: (state, action) => {
            const client = {
                socketId: action.payload.socketId,
                username: action.payload.username,
            }

            state.clients.push(client);
        },

        removeClient : (state, action) => {
            state.clients = state.clients.filter((client) => client.socketId !== action.payload.socketId);
        },
    }
})

export const {addClient, removeClient} = ClientsSlice.actions;

export default ClientsSlice.reducer;