import React from 'react';
import {Link} from 'react-router-dom';

class ChannelsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getChannels(this.props.match.params.serverId);
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.serverId !== this.props.match.params.serverId){
            this.props.getChannels(this.props.match.params.serverId);
        }
    }

    render(){
        if (this.props.channels.length === 0) return (<div className='text-channels'> loading</div>)
        return(
            <>
            <div className='text-channels'><h2 className='grey'>TEXT CHANNELS</h2> <h2 className='grey' onClick={this.props.openModal} >+</h2></div>
            
            <ul className='channels-names-list'>
                {this.props.channels.map( (channel) => (
                   <Link  key={channel.name} to={`/channels/${this.props.match.params.serverId}/${channel.id}`}> 
                   <li key={channel.name} className='grey'># {channel.name}</li>
                   </Link>
                ) )}
            </ul>
            </>
       )
    }
}
export default ChannelsIndex;