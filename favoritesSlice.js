import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            //TODO: add logic to not add duplicates
            state.push(action.payload);
        }
    }
});

export const { addFavorite } = favoritesSlice.actions


export default favoritesSlice.reducer;