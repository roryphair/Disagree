import * as api_util from '../util/server_api_util';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveServer = ({server, channels, users}) => ({
    type: RECEIVE_SERVER,
    server,
    channels,
    users
});

export const removeServer = (serverId) =>({
    type: REMOVE_SERVER,
    serverId
})

export const receiveServers = (servers) =>({
    type: RECEIVE_SERVERS,
    servers
});

export const getServer = (serverId) => dispatch => (
    api_util.getServer(serverId).then( 
        (server) => dispatch(receiveServer(server)), 
        (error) => dispatch(receiveErrors(error))
    )
);

export const getServers = () => dispatch =>(
    api_util.getServers().then( 
        (servers) => dispatch(receiveServers(servers)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createServer = (server) => dispatch =>(
    api_util.createServer(server).then( 
        (server) => dispatch(receiveServer(server)), 
        (error) => dispatch(receiveErrors(error))
        )
);
export const deleteServer = (serverId) => dispatch =>(
    api_util.removeServer(serverId).then( 
        (serverId2) => dispatch(removeServer(serverId2)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const joinServer = (server) => dispatch => (
    api_util.joinServer(server).then( 
        (server) => dispatch(receiveServer(server)), 
        (error) => dispatch(receiveErrors(error))
    )
);
export const leaveServer = (serverId, userId) => dispatch =>(
    api_util.leaveServer(serverId, userId).then( 
        (serverId2) => dispatch(removeServer(serverId2)), 
        (error) => dispatch(receiveErrors(error))
        )
);
