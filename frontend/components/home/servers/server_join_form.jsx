import React from 'react';

class ServerJoinForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={name: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e){
        e.preventDefault();
        const history = this.props.history;
        this.props.joinServer(this.state.name)
        .then((e)=> history.push(`/channels/${e.server.id}`));
        this.props.closeModal();  
    }

    update(type){
        return (e) => (this.setState({[type]: e.currentTarget.value}))
    }

    render(){
        return (<div className='server-join'>
            <h5>Join a sever</h5>
            <p>Enter a server name to join a server.</p>
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" id='name' value={this.state.name} onChange={this.update('name')} />
                <label htmlFor="" id='name'>Enter a name</label>
                <button>Join</button>
            </form>
           <button onClick={this.props.openModal}>BACK</button>
        </div>)
    }
}
export default ServerJoinForm;
    