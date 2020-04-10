export const getServer = (serverId) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId}`,
    })
)
export const getServers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/servers'
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
        url: `/api/servers/${serverId}`,
    })
)

export const joinServer = (server_name) => (
    $.ajax({
        method: 'POST',
        url: `/api/server_users`,
        data: {server_name}
    })
)
export const leaveServer = (serverId, userId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/server_users`,
        data: {server_id: serverId, user_id: userId}
    })
)