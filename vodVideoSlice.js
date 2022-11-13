import { createSlice } from "@reduxjs/toolkit";

const initialState = { timestamp: null };

const vodVideoSlice = createSlice({
    name: 'vodVideo',
    initialState,
    reducers: {
        setVodTimestamp(state, action) {
            state.timestamp = action.payload;
        }
    }
});

export const { setVodTimestamp } = vodVideoSlice.actions


export default vodVideoSlice.reducer;