
export const getChannelMessages = (channelsId) => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${channelsId}/channel_messages`
    })
)

export const getDirectMessages = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/direct_messages`
    })
)

export const createChannelMessage = (message, channelId) => (
    $.ajax({
        method: 'POST',
        url: `/api/channels/${channelId}/channel_messages`,
        data: {message}
    })
)

export const createDirectMessage = (message, receiver_id) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${receiver_id}/direct_messages`,
        data: {message}
    })
)

export const createFirstDirectMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: `/api/direct_messages_first`,
        data: {message}
    })
)

export const updateChannelMessage = (message, messageId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/channel_messages/${messageId}`,
        data: {message}
    })
)

export const updateDirectMessage = (message, messageId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/direct_messages/${messageId}`,
        data: {message}
    })
)


export const removeChannelMessage = (messagesId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channel_messages/${messagesId}`,
    })
)

export const removeDirectMessage = (messagesId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/direct_messages/${messagesId}`,
    })
)
