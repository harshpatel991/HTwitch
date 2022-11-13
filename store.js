import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import twitchCredentialsSlice from './twitchCredentialsSlice';
import vodCommentsSlice from './vodCommentsSlice';
import vodVideoSlice from './vodVideoSlice';

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
        twitchCredentials: twitchCredentialsSlice,
        vodComments: vodCommentsSlice,
        vodVideo: vodVideoSlice
    }
})