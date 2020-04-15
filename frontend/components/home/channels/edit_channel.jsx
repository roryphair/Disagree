import React from 'react';

class EditChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: props.channel.name};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteChannel = this.deleteChannel.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const closeModal = this.props.closeModal;
        this.props.updateChannel(this.state, this.props.channelId )
        .then((e)=> closeModal());
    }


    deleteChannel(e){
        const history = this.props.history
        const serverId = this.props.match.params.serverId;
        this.props.deleteChannel(this.props.channelId)
        .then((e)=> history.push(`/channels/${serverId}`));
    
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
                <div className='create-channel-base'>
                    <h1 className='blue'>Edit Text Channel</h1>
                <form className='create-channel-form' action="" onSubmit={this.handleSubmit}>
                    <label className='blue' htmlFor="" id='name'>Channel Name</label>
                    <input type="text" placeholder='Enter Channel Name' value={this.state.name} onChange={this.update('name')} />
                    <button className='blue create-button'>Edit Channel</button>
                </form>
                {errors}
                </div>
            <div>
           <button className='black' onClick={this.props.closeModal}>Cancel</button>
           <button className='red delete-button' onClick={this.deleteChannel}>Delete Channel</button>
            </div>
        </div>)

    }
}
export default EditChannel;
