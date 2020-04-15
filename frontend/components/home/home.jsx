import React from 'react';
import ServersIndex from './servers/server_index_container';
import Modal from './modal/modal';
import {Route, Switch} from 'react-router-dom';
import DMIndex from './channels/dm_index_container';
import ChannelsIndex from './channels/channels_index_container';
import ChatUsers from './chatbox/chat_users';
import MessagesBody from './messages/messages_body_container';
import MessagesWrite from './messages/messages_write_container';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getUser(this.props.sessionId);
        if(this.props.match.params.serverId === '@me'){
            if(this.props.match.params.channelId){
                this.props.getDirectMessages(this.props.match.params.channelId);
                this.props.subscribeToChannelMessages(this.props.channelId);
            }
        }  
        else{
            this.props.getServer(this.props.match.params.serverId);
            if(this.props.match.params.channelId){
                this.props.getChannelMessages(this.props.match.params.channelId);
                this.props.subscribeToChannelMessages(this.props.channelId);
            }
        }
    }

    componentDidUpdate(prevProps){
        
        if(this.props.match.params.serverId === '@me'){

            if(this.props.match.params.channelId && (prevProps.match.params.channelId !== this.props.match.params.channelId)) {
                this.props.getDirectMessages(this.props.match.params.channelId);
                this.props.subscribeToChannelMessages(this.props.channelId);
                this.props.closeModal();
            }
        }  
        else{
            if(prevProps.match.params.serverId !== this.props.match.params.serverId && this.props.server){ 
                this.props.getServer(this.props.match.params.serverId);
                this.props.closeModal();
            }
            if((prevProps.match.params.channelId !== this.props.match.params.channelId)) {
                this.props.getChannelMessages(this.props.channelId);
                this.props.subscribeToChannelMessages(this.props.channelId);
                this.props.closeModal();
            }
        }
    }

    render(){
        if(!this.props.user) return <div></div> 
        let serverTitle = '';
        let messagePrefix;
        let messagesHeader = '';
        let chatUsers = <div></div>
        if(this.props.match.params.serverId === '@me'){
            messagePrefix = '@  ';
            if(this.props.match.params.channelId && this.props.users[this.props.match.params.channelId] ){
                messagesHeader = this.props.users[this.props.match.params.channelId].username;
            }    
        }
        else{
            serverTitle = this.props.server ? this.props.server.name : '';
            messagePrefix = '#  ';
            const currentServer = this.props.servers[this.props.match.params.serverId];
            let newUsers = {};
            if(currentServer && currentServer.users){
                const users = this.props.users;
                newUsers = currentServer.users.map((userId) => users[userId]);
                if(this.props.match.params.channelId && this.props.channels[this.props.match.params.channelId]){
                    messagesHeader = this.props.channels[this.props.match.params.channelId].name;
                }
            }
            const chatters = Object.values(newUsers);
            chatUsers = <ChatUsers users={chatters} usersLength={chatters.length}/>;
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
                    <Route path='/channels/@me/:channelId' component={DMIndex} />
                    <Route path='/channels/@me/' component={DMIndex} />
                    <Route path='/channels/:serverId/:channelId' component={ChannelsIndex}/>
                    <Route path='/channels/:serverId' component={ChannelsIndex}/>
                </Switch>
            </div>
            <div className='channels-user'>
                <div>
                    <img  src={window.user_icon} className='icon user-icon' alt=""/> 
                    <h4 className='white'> {this.props.user.username}</h4>
                </div>
                <button className='grey' onClick={this.props.logout}>Logout</button>
            </div>
        </div>
        <div className='messages-index'>
            <div className='messages-header'> 
                <h2 className='grey'>{messagePrefix}</h2> 
                <h3 className='white'>{messagesHeader}</h3> 
                <button className='grey edit-channel' onClick={this.props.openModal}>EDIT CHANNEL</button>
            </div>
            <div className='messages-main'>  
                <div className='messages-middle'>
                    <div className='messages-bottom'>  <MessagesWrite /> </div> 
                    <div className='messages-body'>  <MessagesBody length={this.props.messlength} messages={this.props.messages} /></div>
                </div>
                {chatUsers}
            </div>
        </div>
        </>
        );
    }
}
export default Home;