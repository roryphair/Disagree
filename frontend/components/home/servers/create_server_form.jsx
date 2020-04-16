import React from 'react';

class CreateServer extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: `${props.user.username}'s server`, admin_id: props.user.id, public: false}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const history = this.props.history;
        this.props.createServer(this.state)
        .then((e)=> history.push(`/channels/${e.server.id}`));
    }

    update(type){
        return (e) => (this.setState({[type]: e.currentTarget.value}))
    }
    render(){
        let errors = null;
        if(this.props.errors.length > 0){
            errors = (<ul className='errors-ul'>
                {this.props.errors.map (error => (<li className={'errors-li'} key={error}>{error}</li>))}
            </ul>)
        }
       return (<div className='create-server'>
           <div>
           <h1 className='blue'>Create Your Server</h1>
           <p>By creating a server, you will have access to free 
               text chat to use amongst your friends.</p>
            
           <form action="" onSubmit={this.handleSubmit}>
               <label className='blue' htmlFor="" id='name'>Server Name</label>
               <input type="text" placeholder='Enter a Server Name' value={this.state.name} onChange={this.update('name')} />
               <button className='blue create-button'>Create</button>
           </form>
           {errors}
           </div>
           <div>
               <button className='black' onClick={this.props.openModal}>BACK</button>
           </div>
       </div>)
    }
}
export default CreateServer;