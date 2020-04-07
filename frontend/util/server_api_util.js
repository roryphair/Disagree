export const getServers = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/servers',
        data: {userId}
    })
)

export const createServer = (server) => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: {server}
    })
)

export const removeServer = (serverId) => (
    $.ajax({
        method: 'DELETE',
        url: '/api/servers',
        data: {serverId}
    })
)
