import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null};

const vodCommentsSlice = createSlice({
    name: 'vodComments',
    initialState,
    reducers: {
        setVodComments(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setVodComments } = vodCommentsSlice.actions


export default vodCommentsSlice.reducer;