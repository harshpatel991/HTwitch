import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const twitchCredentialsSlice = createSlice({
    name: 'twitchCredentials',
    initialState,
    reducers: {
        setCredentials(state, action) {
            console.log("setting state to" + action.payload);
            state.value = action.payload;
        }
    }
});

export const { setCredentials } = twitchCredentialsSlice.actions


export default twitchCredentialsSlice.reducer;