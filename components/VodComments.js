import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";


function VodComments() {

    const comments = useSelector(state => state.vodComments.value);
    const currentVodVideoTime = useSelector(state => state.vodVideo.timestamp);

    if (comments != null) {
        var commentsRendered = comments["comments"].map(comment => { return <Comment key={comment._id} color={comment.message.user_color} displayName={comment.commenter.display_name} message={comment.message.body} timestamp={comment.content_offset_seconds}></Comment> })
    }

    return (
        <div>
            <Typography variant="body2">Current Time: {currentVodVideoTime}</Typography>
            {commentsRendered}
        </div>
    )
}


export default VodComments;