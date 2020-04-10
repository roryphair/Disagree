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
        console.log(this.props.messages);
        if(prevProps.match.params.channelId !== this.props.match.params.channelId){
            const channelId = this.props.match.params.channelId
            this.props.getChannelMessages(channelId);
        }
    }

    render(){
        if(!this.props.messages || !this.props.servers[this.props.match.params.serverId] ) return (<div>Loading</div>);
        return (
             <ul>
                 {this.props.messages.map( (message) => (
                     <li key={`${message.id}guk`} className='white'>{`${ this.props.users[message.user_id].username} : ${message.body}`} </li>
                 ))}
             </ul>
        );
    }
}

export default MessagesBody;