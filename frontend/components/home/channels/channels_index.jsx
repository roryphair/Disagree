import React from 'react';
import {Link} from 'react-router-dom';

class ChannelsIndex extends React.Component{
    constructor(props){
        super(props);
        this.sendDelete = this.sendDelete.bind(this);
        this.sendLeave = this.sendLeave.bind(this);
    }

    componentDidMount(){
    }

    sendDelete(){
        const history = this.props.history;
        this.props.deleteServer(this.props.match.params.serverId)
        .then((e)=> history.push(`/channels/@me`));
    }

    sendLeave(){
        const history = this.props.history;
        this.props.leaveServer(this.props.match.params.serverId, this.props.userId)
        .then((e)=> history.push(`/channels/@me`));
    }

    render(){
        let servers = null;
        if (this.props.channels.length > 0){
            servers = this.props.channels.map( (channel) => (
                <Link  key={channel.name} to={`/channels/${this.props.match.params.serverId}/${channel.id}`}> 
                <li key={`li${channel.name}`} className={'channel-item ' + (this.props.match.params.channelId == channel.id ? 'selected' : 'grey')}>{`# ${channel.name}`}</li>
                </Link>
             ) )
        }
        let leaveButton;
        
        if(this.props.server){
            if(this.props.server.admin_id === this.props.userId) {
                leaveButton =<button className='grey wide' onClick={this.sendDelete}>Delete Server</button>
            }else{
                leaveButton =<button className='grey wide' onClick={this.sendLeave}>Leave Server</button>
            }
        }

        return(
            <>
            <div className='text-channels'><h2 className='grey'>TEXT CHANNELS</h2> <h2 className='grey' onClick={this.props.openModal} >+</h2></div>
            <div className='channels-total'>
            <ul className='channels-names-list'>
                {servers}
            </ul>
            <div className='leave-button'>{leaveButton}</div>
            </div>
            </>
       )
    }
}
export default ChannelsIndex;