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
       return (
        <div className='create-server'>
            <div className='create-channel-base'>
                <h1 className='blue'>Message Someone New!</h1>
                <form className='create-channel-form' action="" onSubmit={this.handleSubmit}>
               <label htmlFor="" id='name'>Username</label>
               <input type="text" id='name' value={this.state.username} onChange={this.update('username')} />
               <label htmlFor="" id='body'>body</label>
               <input type="text" id='body' value={this.state.body} onChange={this.update('body')} />
               
               <button className='blue create-button'>Create Message</button>
           </form>
           {errors}
           </div>
           <div>
                <button onClick={this.props.closeModal}>Cancel</button>
           </div>
        </div>)
    }
}

export default CreateChannel;