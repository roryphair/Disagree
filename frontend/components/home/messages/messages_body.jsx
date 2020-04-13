import React from 'react';

class MessagesBody extends React.Component{
    constructor(props){
        super(props);
        this.listLogic = this.listLogic.bind(this);
        this.createFullMessage = this.createFullMessage.bind(this);
        this.createSmallMessage = this.createSmallMessage.bind(this);
    }

    listLogic(messages){
        let i = 1;
        const messagesArray = [];
        messagesArray.push(this.createFullMessage(messages[0], this.props.users[messages[0].user_id]));
        while( i < messages.length){
            if(messages[i-1].user_id  !== messages[i].user_id){
                messagesArray.push(this.createFullMessage(messages[i], this.props.users[messages[i].user_id]));
            }
            else{
                messagesArray.push(this.createSmallMessage(messages[i]));
            }
            i++;
        };
        return messagesArray.map(chat => chat);
    }

    createFullMessage(message, user){
        return (
            <div key={message.id}>
           
            <div  className='chat-message-main start'> 
                <div className='chat-message-image' > 
                    <img className='icon user-icon' src={window.user_icon} alt=""/>
                </div> 
                <li >
                    <div className='chat-username white'> {user ? user.username : 'DELETED'}  </div>
                    
                    <div className='grey'>{`:  ${message.updated_at}`}</div> 
                </li>
            </div>
            <div className='chat-message-main'> 
                <div className='chat-message-image' > 
                </div> 
                <li >
                    <div className='white'>{message.body}</div>
                </li>
            </div>
        </div>
        )
    }

    createSmallMessage(message){
        return ( 
            <div  key={message.id} className='chat-message-main'> 
                <div className='chat-message-image'> 
                </div> 
                <li >
                    <div className='white'>{message.body}</div>
                </li>
            </div>
        )
    }

    render(){
        let messages;
        if(!this.props.match.params.channelId){
            messages = (<li className='white'>Join a channel to see messages</li>);
        }
        else if(!this.props.messages || !this.props.receiver ) {
            messages = (<li className='white'></li>);
        }
        else if(this.props.messages.length === 0){
            messages = <li className='white' >Nothing here yet, you should write something</li>
        }
        else{
            messages = this.listLogic(this.props.messages);
        }
        return (
             <ul>
                 {messages}
             </ul>
        );
    }
}

export default MessagesBody;