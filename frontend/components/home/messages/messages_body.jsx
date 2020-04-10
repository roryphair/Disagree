import React from 'react';

class MessagesBody extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const channelId = this.props.match.params.channelId
        this.props.getChannelMessages(channelId);
    }

    componentDidUpdate(prevProps){
         if(prevProps.match.params.channelId !== this.props.match.params.channelId){
             const channelId = this.props.match.params.channelId
             this.props.getChannelMessages(channelId);
        }
    }

    render(){
        let messages;
        if(!this.props.match.params.channelId){
            messages = (<li className='white'>Join a channel to see messages</li>);
        }
        else if(!this.props.messages || !this.props.servers[this.props.match.params.serverId] ) {
            messages = (<li className='white'>Loading</li>);
        }
        else if(this.props.messages.length === 0){
            messages = <li className='white' >Nothing here yet, you should write something</li>
        }
        else{
            messages = this.props.messages.map( (message) => (
                
                <li key={`${message.id}guk`} className='white chat-text'>{`${ this.props.users[message.user_id]? this.props.users[message.user_id].username : 'DELETED'} : ${message.body}`} </li>
            ))
        }
        return (
             <ul>

                 {messages}
             </ul>
        );
    }
}

export default MessagesBody;