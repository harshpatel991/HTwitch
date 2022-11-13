import { Grid } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import MyTwitchPlayer from "./MyTwitchPlayer";
import MemoizedMyTwitchPlayer from "./MyTwitchPlayer";
import VodComments from "./VodComments";


function TwitchClientSideRendered({ videoId }) {
    const [videoSize, setVideoSize] = useState(10);
    const [commentSize, setCommentSize] = useState(2);

    useEffect(() => {
        const intervalId = window.setInterval(randomlyUpdateGridSizing, 1 * 1000);

        return () => { clearInterval(intervalId) }
    }, []);

    async function randomlyUpdateGridSizing() {
        let videoSize = Math.floor(Math.random() * 2) + 9;
        setVideoSize(videoSize);
        setCommentSize(12 - videoSize);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={videoSize} style={{ transition: 'all .5s ease-in-out' }}>
                    <MyTwitchPlayer videoId={videoId} />
                </Grid>
                <Grid item xs={commentSize} style={{ transition: 'all .5s ease-in-out', maxHeight: '95vh', overflowY: 'scroll', marginTop: '20px' }}>
                    <VodComments />
                </Grid>
            </Grid>
        </div >
    )
}

export default TwitchClientSideRendered;