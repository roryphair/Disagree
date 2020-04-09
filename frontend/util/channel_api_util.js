export const getChannel = (channelId) => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${channelId}`,
    })
)
export const getChannels = (serverId) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId}/channels`
    })
)

export const createChannel = (channel, serverId) => (
    $.ajax({
        method: 'POST',
        url: `/api/servers/${serverId}/channels`,
        data: {channel}
    })
)

export const removeChannel = (channelId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channels/${channelId}`,
    })
)
