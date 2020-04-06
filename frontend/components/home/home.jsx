import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <>
        <div className='servers-index'> 
            <h1>servers go here</h1>
            <h1>for fixing later</h1>
        </div>
        <div className='channels-index'>
            <div className='channels-title' >
                The title
            </div>
            <div className='channels-list'>
                list of channels
            </div>
            <div className='channels-user'>
                <h2> {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>Logout</button></div>
        </div>
        <div className='messages-index'></div>
        </>
        );
    }
}
export default Home;