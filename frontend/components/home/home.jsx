import React from 'react';
import ServersIndex from './servers/server_index_container';

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
        <div className='servers-index'> 
            <ServersIndex />
        </div>
        <div className='channels-index'>
            <div className='channels-title' >
                The title
            </div>
            <div className='channels-list'>
                list of channels
            </div>
            <div className='channels-user'>
                <h2> {name}</h2>
                <button onClick={this.props.logout}>Logout</button></div>
        </div>
        <div className='messages-index'></div>
        </>
        );
    }
}
export default Home;