
export async function getToken(formBody) {
    const response = await fetch('https://id.twitch.tv/oauth2/token?' + formBody,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'x-www-form-urlencoded'
            }
        });

    return await response.json();
}

export async function getUserById(id, accessToken, clientId) {
    const response = await fetch('https://api.twitch.tv/helix/users?id=' + id,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Client-Id': clientId
            }
        });

    return await response.json();

}


export async function search(name, accessToken, clientId) {
    const searchResponse = await fetch('https://api.twitch.tv/helix/search/channels?query=' + name,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Client-Id': clientId
            }
        });

    return await searchResponse.json();
}

export async function getVideosForUserId(userId, accessToken, clientId) {
    const videosRespones = await fetch('https://api.twitch.tv/helix/videos?user_id=' + userId + '&type=archive',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Client-Id': clientId
            }
        });

    return await videosRespones.json();
}

export async function getCommentsForVideo(videoId, offset) {

    const req = await fetch(`https://api.twitch.tv/v5/videos/${videoId}/comments?content_offset_seconds=${offset}`,
        {
            headers: {
                'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                "Accept": "application/vnd.twitchtv.v5+json"
            }
        });

    return await req.json();
}