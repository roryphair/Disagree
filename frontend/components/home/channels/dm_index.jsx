import React from 'react'
import {Link} from 'react-router-dom';

class DMIndex extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (Object.keys(this.props.users).length <= 1) return (<div className='text-channels'><h2 className='grey'>DIRECT MESSAGES</h2> <h2 className='grey' onClick={this.props.openModal}>+</h2></div>
        )
        const users = this.props.dmUsers.map( (userId) => this.props.users[userId]); 
        return (
            <>
            <div className='text-channels'><h2 className='grey'>DIRECT MESSAGES</h2> <h2 className='grey' onClick={this.props.openModal} >+</h2></div>
            
            <ul className='channels-names-list'>
                {users.map( (user) => {
                return (
                   <Link  key={user.username} to={`/channels/@me/${user.id}`}> 
                   <li key={`li${user.username}`} className={'channel-item ' + (this.props.match.params.channelId == user.id ? 'selected' : 'grey')}> <img className='icon user-icon' src={user.image_url} alt=""/> {user.username}</li>
                   </Link>
                ) })}
            </ul>
            </>
        )
    }
}
export default DMIndex;
