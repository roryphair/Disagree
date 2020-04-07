import React from 'react';

class ServerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchServers();
    }

    render(){
        const servers = this.props.servers ? this.props.servers : []
        return (<div className='server-list'>
            <ul>
                {this.props.servers.map( server => (
                    <li key={server.name}>
                        {server.name}
                    </li>
                ))}
                <li>create server</li>
            </ul>
        </div>)
    }
}

export default ServerIndex;