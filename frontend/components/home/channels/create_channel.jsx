import React from 'react';

class CreateChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: ``};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const history = this.props.history;
        const serverId = this.props.serverId
        this.props.createChannel(this.state, serverId )
        .then((e)=> history.push(`/channels/${serverId}/${e.channel.id}`));
        this.props.closeModal();
    }

    update(type){
        return (e) => (this.setState({[type]: e.currentTarget.value}))
    }
    render(){
       return (<div className='create-channel'>
           <h4 className='blue'>Create Text</h4>
           <p>in Text Channels</p>
           <form className='create-channel-form' action="" onSubmit={this.handleSubmit}>
               <label htmlFor="" id='name'>Channel Name</label>
               <input type="text"  value={this.state.name} onChange={this.update('name')} />
               <button className='blue'>Create Channel</button>
           </form>
           <button onClick={this.props.closeModal}>Cancel</button>
       </div>)
    }
}
export default CreateChannel;