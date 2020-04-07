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
