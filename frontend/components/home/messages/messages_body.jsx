import React from 'react';

class MessagesBody extends React.Component{
    constructor(props){
        super(props);
        this.listLogic = this.listLogic.bind(this);
        this.createFullMessage = this.createFullMessage.bind(this);
        this.createSmallMessage = this.createSmallMessage.bind(this);
        this.openForm = this.openForm.bind(this);
    }

    openForm(id, userId){ 
        return () => {
            if(this.props.currentUserId === userId){
                this.props.openModal();
                this.props.history.push(`/channels/${this.props.match.params.serverId}/${this.props.match.params.channelId}/${id}`);
            }
        }
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
           
            <div  className='chat-message-main-start'> 
                <div className='chat-message-image' > 
                    <img className='icon user-icon' src={window.user_icon} alt=""/>
                </div> 
                <li >
                    <div className='chat-username white'> {user ? user.username : 'DELETED'}  </div>
                    
                    <div className='grey'>{`:  ${message.updated_at}`}</div> 
                </li>
            </div>
            <div onClick={this.openForm(message.id, message.user_id)} className='chat-message-main'> 
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
            <div onClick={this.openForm(message.id, message.user_id)} key={message.id} className='chat-message-main'> 
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
            messages = (
            <div className='chat-message-main'>
            <li className='white'> <h1>Join a channel or message a User, it's fun!</h1> </li>
            </div>);
        }
        else if(!this.props.messages || !this.props.receiver ) {
            messages = (<li className='white'></li>);
        }
        else if(this.props.messages.length === 0){
            messages = (<>
                <div className='chat-message-main'>
                <li className='white'> <h1>No one has written anything yet!</h1> </li>
                </div>
                <div className='chat-message-main'>
                <li className='white'> <h1>Come on, be the first one!</h1> </li>
                </div>
                </>);
        }
        else{
            messages = this.listLogic(this.props.messages);
        }
        return (
            <>
             <ul>
                 {messages}
             </ul>
             </>
        );
    }
}

export default MessagesBody;