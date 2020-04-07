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
                    <li className='server-list-item' key={server.name}>
                        <img className='icon server-icon' src={window.user_icon} alt={server.name}/>
                        <h2 className='server-title'>{server.name}</h2>
                    </li>
                ))}
                <li className='server-list-item'> <button className='icon server-icon' onClick={this.props.openModal}>+</button> 
                <h2 className='server-title'>Add Server</h2></li>
            </ul>
        </div>)
    }
}

export default ServerIndex;