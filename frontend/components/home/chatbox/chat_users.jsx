import React from 'react';

class chatUsers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='chat-users'> 
                <h4 className='grey'>Users- {this.props.users.length} </h4>
                <ul className='users-list'>
                    {this.props.users.map((user) => (<li key={user.username} className='grey users-list-user' >
                        <img  src={window.user_icon} className='icon user-icon' alt=""/>
                        {user.username}</li>))}
                </ul>
            </div>
        );
    }
}
export default chatUsers