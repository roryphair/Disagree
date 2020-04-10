import React from 'react'

class MessagesWrite extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {body: ''};
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.writeMessage(this.state);
        this.setState({body: ''});
    }

    update(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        return (
            <div className='chat-box-input'>
                <form action="" onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.update('body')} />
                </form>
            </div>
        )
    }
}
export default MessagesWrite;