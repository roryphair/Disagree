import React from 'react';
import {withRouter} from 'react-router-dom';

class chatUsers extends React.Component{
    constructor(props){
        super(props);

    }

    openCreateMessage(user){
        return () => {
            if(this.props.currentUserId !== user.id){
                this.props.openModal();
                this.props.history.push(`/channels/${this.props.match.params.serverId}/${this.props.match.params.channelId}/${user.username}`);
            }
            this.props.openModal()
        }
    }


    render(){
        return (
            <div className='chat-users'> 
                <h4 className='grey'>Users- {this.props.usersLength} </h4>
                <ul className='users-list'>
                    {this.props.users.map((user) => (<li onClick={this.openCreateMessage(user)} key={user.username} className='grey users-list-user' >
                        <img  src={user.image_url} className='icon user-icon' alt=""/>
                        {user.username}</li>))}
                </ul>
            </div>
        );
    }
}
export default withRouter(chatUsers)