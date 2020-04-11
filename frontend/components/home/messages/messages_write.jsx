import React from 'react'

class MessagesWrite extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {body: '' };
    }

    handleSubmit(e){
        e.preventDefault();
        const receiverId = this.props.match.params.channelId;
        this.props.createMessage(this.state, receiverId);
        this.setState({body: ''});
    }

    update(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        let receiverName = '';
        if(this.props.receiver) {
            receiverName = this.props.match.params.channelId ==='@me' ? '@' + this.props.receiver.username : '#' + this.props.receiver.name ;
        }
         return (
            <div className='chat-box-input'>
                <form action="" onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.body} placeholder={`Message ${receiverName}`} onChange={this.update('body')} />       
                </form>
            </div>
        )
    }
}
export default MessagesWrite;