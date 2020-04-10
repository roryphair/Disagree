import React from 'react'

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
        if(!this.props.messages || this.props.users ) return (<div>Loading</div>);
        return (
             <ul>
                 {this.props.messages.map( (message) => (
                     <li className='white'>{`${ this.props.users[message.user_id].username} : ${message.body}`} </li>
                 ))}
             </ul>
        );
    }
}
export default MessagesBody;