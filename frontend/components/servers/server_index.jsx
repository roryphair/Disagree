import React from 'react';
import {Link} from 'react-router-dom';

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
                <li><Link to=''>create server</Link></li>
            </ul>
        </div>)
    }
}

export default ServerIndex;