import React from 'react';

class ChooseServer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return (<div>
           <h1>Oh, another server huh?</h1>
           <button onClick={ () => this.props.openModal('serverCreateForm')}>Create a server</button>
           <button onClick={ () => this.props.openModal('serverJoinForm')}>Join a server</button>
       </div>)
    }
}
export default ChooseServer;