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
                    <h1 className='blue'>Create Text Channel</h1>
                <form className='create-channel-form' action="" onSubmit={this.handleSubmit}>
                    <label className='blue' htmlFor="" id='name'>Channel Name</label>
                    <input type="text" placeholder='Enter Channel Name' value={this.state.name} onChange={this.update('name')} />
                    <button className='blue create-button'>Create Channel</button>
                </form>
                {errors}
                </div>
            <div>
           <button className='black' onClick={this.props.closeModal}>Cancel</button>
            </div>
        </div>)

    }
}
export default CreateChannel;
