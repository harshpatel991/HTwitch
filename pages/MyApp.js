import { VideogameAsset } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../twitchCredentialsSlice";
import { getToken } from "../utility/requests";

const MyApp = ({ children }) => {

    const urlParameters = {
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        grant_type: 'client_credentials'
    }

    const dispatch = useDispatch();

    useEffect(async () => {
        var formBody = [];
        for (var property in urlParameters) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(urlParameters[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const json = await getToken(formBody);

        dispatch(setCredentials(json.access_token));

    }, [])

    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>

            <Head>
                <title>HTwitch</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <VideogameAsset paddingRight="5px" />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            HTwitch
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {children}
        </div>
    )
}

export default MyApp;