import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserById, getVideosForUserId } from "../utility/requests";
import AccountCard from "./AccountCard";

const FavoritesList = () => {
    const [favoritesVideos, setFavoritesVideos] = useState([]);

    const favorites = useSelector(state => state.favorites);
    const tokenData = useSelector(state => state.twitchCredentials.value);

    console.log("Rendering favorites list");



    useEffect(async () => {
        if (tokenData != null) {
            //TODO: make these reqeusts in parallel
            console.log("favorite before: " + JSON.stringify(favorites));
            const favoritesData = await Promise.all(
                favorites.map(async ({ channelId }) => { return { channelId, videos: await getVideosForUserId(channelId, tokenData, process.env.NEXT_PUBLIC_CLIENT_ID), user: await getUserById(channelId, tokenData, process.env.NEXT_PUBLIC_CLIENT_ID) } })
            );
            setFavoritesVideos(favoritesData);
            console.log("Favorites after: " + JSON.stringify(favoritesData));


            favoritesData.map(({ channelId, videos, user }) => {
                console.log("!!channelId" + channelId);
                console.log(user.data[0]);
            });
        }
    }, [favorites, tokenData]);



    return (
        <div>
            Favorites
            {
                favoritesVideos.flatMap(({ channelId, videos, user }) => {
                    return <AccountCard key={channelId} account={user.data[0]} />

                })
            }
        </div>
    )
}

export default FavoritesList;