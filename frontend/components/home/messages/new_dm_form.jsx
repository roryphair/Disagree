import React from 'react';

class CreateChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ``, body: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const history = this.props.history;
        this.props.createFirstDirectMessage(this.state)
        .then((e)=> history.push(`/channels/@me/${e.message.receiver_id}`));
        this.props.closeModal();
    }

    update(type){
        return (e) => (this.setState({[type]: e.currentTarget.value}))
    }

    render(){
       return (<div className='create-channel'>
           <h4 className='blue'>Message Someone New!</h4>
           <form className='create-channel-form' action="" onSubmit={this.handleSubmit}>
               <label htmlFor="" id='name'>Username</label>
               <input type="text" id='name' value={this.state.username} onChange={this.update('username')} />
               
               <label htmlFor="" id='body'>body</label>
               <input type="text" id='body' value={this.state.body} onChange={this.update('body')} />
               
               <button className='blue'>Create Message</button>
           </form>
           <button onClick={this.props.closeModal}>Cancel</button>
       </div>)
    }
}
export default CreateChannel;