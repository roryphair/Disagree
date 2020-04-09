import React from 'react';
import ServersIndex from './servers/server_index_container';
import Modal from './modal/modal';
import {Route, Switch} from 'react-router-dom';
import MessageIndex from './messages/messages_write';
import ChannelsIndex from './channels/channels_index_container';
import ChatUsers from './chatbox/chat_users';
import MessagesBody from './messages/messages_body_container';
import MessagesWrite from './messages/messages_write';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getUser(this.props.sessionId);
        // this.props.getServers(this.props.sessionId);
    }
    render(){
        const name = this.props.user ? this.props.user.username : 'loading';
        let serverTitle = '';
        let chatUsers = <div></div>
        if(this.props.match.params.serverId !== '@me'){
            serverTitle = this.props.server ? this.props.server.name : 'loading'
            chatUsers = <ChatUsers />;
        }
        return (
            <>
        <Modal />
        <div className='servers-index'> 
            <ServersIndex />
        </div>
        <div className='channels-index'>
            <div className='channels-title' >
                <h1>{serverTitle}</h1>
            </div>
            <div className='channels-list'>
                <Switch>
                    <Route path='/channels/@me' component={MessageIndex}/>
                    <Route path='/channels/:serverId' component={ChannelsIndex}/>
                </Switch>
            </div>
            <div className='channels-user'>
                <h2> {name}</h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        </div>
        <div className='messages-index'>
            <div className='messages-header'>HEADER WOAH</div>
            <div className='messages-main'>  
                <div className='messages-middle'>
                    <div className='messages-bottom'>  <MessagesWrite /> </div> 
                    <div className='messages-body'>  <MessagesBody /></div>
                </div>
                {chatUsers}
            </div>
          
        </div>
            
        </>
        );
    }
}
export default Home;