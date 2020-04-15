import React from 'react';

class EditChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: props.message.body};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const closeModal = this.props.closeModal;
        
        if(this.props.match.params.serverId === '@me'){
            this.props.updateDirectMessage(this.state, this.props.messageId )
            .then((e)=> closeModal());
        }
        else{
            this.props.updateChannelMessage(this.state, this.props.messageId )
            .then((e)=> closeModal());
        }
    }


    deleteMessage(e){
        const closeModal = this.props.closeModal;
        if(this.props.match.params.serverId === '@me'){
            this.props.deleteDirectMessage(this.props.messageId)
            .then((e)=> closeModal());
        }
        else{
            this.props.deleteChannelMessage(this.props.messageId)
            .then((e)=> closeModal());
        }
    
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
        return (<div className='message-edit-form'>
        <div className='create-server'>
                <div className='create-channel-base'>
                    <h1 className='blue'>Edit Message</h1>
                <form className='create-channel-form' action="" onSubmit={this.handleSubmit}>
                    <label className='blue' htmlFor="" id='body'>Message</label>
                    <input id='body' type="text" placeholder='Change Message' value={this.state.body} onChange={this.update('body')} />
                    <button className='blue create-button'>Edit Message</button>
                </form>
                {errors}
                </div>
            <div>
           <button className='black' onClick={this.props.closeModal}>Cancel</button>
           <button className='red delete-button' onClick={this.deleteMessage}>Delete Message</button>
            </div>
        </div>
        </div>)

    }
}
export default EditChannel;
