import React from 'react';

class CreateServer extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: `${props.user.username}'s server`, admin_id: props.user.id, public: false, image_url: 'user_icon.png'}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createServer(this.state);
    }
    update(type){
        return (e) => (this.setState({[type]: e.currentTarget.value}))
    }
    render(){
       return (<div className='create-server'>
           <h1 className='blue'>Create Your Server</h1>
           <p>By creating a server, you will have access to free voice and text chat to use amongst your friends.</p>
           <form action="" onSubmit={this.handleSubmit}>
               <label htmlFor="" id='name'>Server Name</label>
               <input type="text" placeholder='Enter a Server Name' value={this.state.name} onChange={this.update('name')} />
               <button className='blue'>Create</button>
           </form>
           <button onClick={this.props.openModal}> back</button>
       </div>)
    }
}
export default CreateServer;