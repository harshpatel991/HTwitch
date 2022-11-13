function Comment({ displayName, message, timestamp, color }) {

    return (
        <div>
            <p><b>{timestamp} <span style={{ color: color }}>{displayName}:</span></b> {message}</p>
        </div>
    )
}

export default Comment;