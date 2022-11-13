import { StarOutline } from "@mui/icons-material";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Video from "../../components/Video";
import { addFavorite } from "../../favoritesSlice";
import { getToken, getUserById, getVideosForUserId } from "../../utility/requests";


export default function Channel() {

    const [videos, setVideos] = useState([]);
    const [user, setUser] = useState({});
    const channelId = useRouter().query.id;
    const dispatch = useDispatch();
    const tokenData = useSelector(state => state.twitchCredentials.value);

    useEffect(async () => {

        if (tokenData != null) {
            const videosJson = await getVideosForUserId(channelId, tokenData, process.env.NEXT_PUBLIC_CLIENT_ID);
            setVideos(videosJson.data);

            const userJson = await getUserById(channelId, tokenData, process.env.NEXT_PUBLIC_CLIENT_ID);
            console.log("user: ");
            console.log(userJson.data[0]);
            setUser(userJson.data[0]);
        }
    }, [tokenData])

    function onClickSaveToFavorites() {
        dispatch(addFavorite({ channelId: channelId }))
    }

    return (
        <div>

            <Grid container mt={3}>
                <Grid item>
                    <Avatar src={user.profile_image_url} sx={{ width: 56, height: 56, marginRight: '15px' }} />
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        {user.display_name}
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h6" my={3} >
                {user.description}
            </Typography>

            <Button startIcon={<StarOutline />} variant="contained" onClick={() => onClickSaveToFavorites()}>Save to Favorites</Button>

            <Grid container spacing={2} mt={3}>
                {videos.map((video) => { return (<Video key={video.id} video={video}></Video>) })}
            </Grid>

        </div >
    )
}

