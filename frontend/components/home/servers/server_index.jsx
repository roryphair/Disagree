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
                <li className='server-list-item'> 
                   <Link to='/channels/@me'>
                       <img className='icon server-icon' src={window.user_icon} alt='home'/>
                    </Link> 
                    <h2 className='server-title'>Home</h2>
                   
                    </li>
                     <div className='server-seperator'>
                        </div>
                {this.props.servers.map( server => (
                    <li className='server-list-item' key={server.name}>
                        <img className='icon server-icon' src={window.user_icon} alt={server.name}/>
                        <h2 className='server-title'>{server.name}</h2>
                    </li>
                ))}
                <div className='server-seperator'>
                        </div>
                <li className='server-list-item'> 
                    <button className='icon server-icon' onClick={this.props.openModal}>+</button> 
                    <h2 className='server-title'>Add Server</h2>
                </li>
            </ul>
        </div>)
    }
}

export default ServerIndex;