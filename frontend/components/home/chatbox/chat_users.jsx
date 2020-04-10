import React from 'react';

class chatUsers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.users.length === 0) return (<div className='chat-users'><h4>loading</h4></div>)
        return (
            <div className='chat-users'> 
                <h4 className='grey'>Users- {this.props.users.length} </h4>
                <ul className='users-list'>
                    {this.props.users.map((user) => (<li className='grey users-list-user' >
                        <img  src={window.user_icon} className='icon user-icon' alt=""/>
                        {user.username}</li>))}
                </ul>
            </div>
        );
    }
}
export default chatUsers