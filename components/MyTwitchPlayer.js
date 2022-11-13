import { Button } from "@mui/material";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { TwitchPlayer } from "react-twitch-embed";
import { getCommentsForVideo } from "../utility/requests";
import { setVodComments } from "../vodCommentsSlice";
import { setVodTimestamp } from "../vodVideoSlice";
import Comment from "./Comment";


function MyTwitchPlayer({ videoId }) {

    let player;

    let dispatch = useDispatch();

    useEffect(() => {
        const intervalId = window.setInterval(updateComments, 1000);

        return () => { clearInterval(intervalId); }
    }, []);

    const onReady = (currentPlayer) => {
        player = currentPlayer;
    };

    function onClickPause() {
        player.pause();
    }

    function onClickPlay() {
        player.play();
    }

    let lastCommentTimestampLoaded = -1;

    async function updateComments() {
        if (player != null) {
            let currentVideoTime = player.getCurrentTime();

            if (currentVideoTime !== 0 && currentVideoTime != lastCommentTimestampLoaded) {
                dispatch(setVodTimestamp(currentVideoTime));
                dispatch(setVodComments(await getCommentsForVideo(videoId, currentVideoTime)));
                lastCommentTimestampLoaded = currentVideoTime;
            }
        }
    }

    let rando = Math.floor(Math.random() * 10);

    return (
        <div>

            <TwitchPlayer hideControls={true} width='100%' height='900px' style={{ height: '100vh' }} video={videoId + ''} autoplay={false} onReady={onReady} id={'my-twitch-player' + rando} />

            <div id={'my-twitch-player' + rando}></div>
            <Button onClick={onClickPause}>Pause</Button>
            <Button onClick={onClickPlay}>Play</Button>

            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />


        </div >
    )
}

export default memo(MyTwitchPlayer)