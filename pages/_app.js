import React, { useEffect, useState } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/global.css';
import store from '../store';
import { Provider, useDispatch } from 'react-redux';
import MyApp from './MyApp';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }) {

    const emotionCache = clientSideEmotionCache;

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <MyApp>
                        <Component {...pageProps} />
                    </MyApp>
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    )
}
