import React from 'react';

class ChooseServer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return (<div className='choose-create-join-server'>
           <h1 className='black'>Oh, another server huh?</h1>
           <div>
           <div className='choose-create-join-server-option' onClick={ () => this.props.openModal('serverCreateForm')}>
                <h3><strong>Create</strong> a new server and invite your friends. It's free!</h3>
               <img src={window.addServer} alt="create server"/>
               <button className='blue' >Create a server</button>
            </div>
           <div className='choose-create-join-server-option' onClick={ () => this.props.openModal('serverJoinForm')}> 
                <h3><strong>Join</strong> a pre-existing server</h3>
               <img src={window.joinServer} alt="join server"/>
                <button className='green' >Join a server</button>
           </div>
           </div>
          
       </div>)
    }
}
export default ChooseServer;