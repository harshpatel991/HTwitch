import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { TwitchChat, TwitchClip, TwitchEmbed, TwitchPlayer } from "react-twitch-embed";
import Video from "../../components/Video";
import { addFavorite } from "../../favoritesSlice";
import { getCommentsForVideo, getToken, getVideosForUserId } from "../../utility/requests";
import dynamic from 'next/dynamic'




export default function VideoPage() {
    const videoId = useRouter().query.id;

    const DynamicComponentWithNoSSR = dynamic(() => import('../../components/TwitchClientSideRendered'), {
        ssr: false
    })

    return <DynamicComponentWithNoSSR videoId={videoId} />
}

