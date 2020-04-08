import React from 'react';
import ServersIndex from './servers/server_index_container';
import Modal from './modal/modal';
import {Route, Switch} from 'react-router-dom';
import MessageIndex from './messages/messages_index';
import ChannelsIndex from './channels/channels_index';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getUser(this.props.sessionId);
    }
    render(){
        const name = this.props.user ? this.props.user.username : 'loading';
        return (
            <>
        <Modal />
        <div className='servers-index'> 
            <ServersIndex />
        </div>
        <div className='channels-index'>

            <div className='channels-title' >
                The title
            </div>
            <div className='channels-list'>
                <Switch>
                    <Route  path='/channels/@me' component={MessageIndex}/>
                    <Route  path='/channels/' component={ChannelsIndex}/>
                </Switch>
            </div>
            <div className='channels-user'>
                <h2> {name}</h2>
                <button onClick={this.props.logout}>Logout</button></div>
        </div>
        <div className='messages-index'>
            <div className='messages-header'>HEADER WOAH</div>
            <div className='messages-body'>nice messages</div>
            <div className='messages-bottom'> CHAT STUFf</div>
        </div>
        </>
        );
    }
}
export default Home;