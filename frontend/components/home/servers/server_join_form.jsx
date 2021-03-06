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
                <h1 className='green'>Join a server</h1>
                <p>Enter a server name to join a server.</p>
                <form action="" onSubmit={this.handleSubmit}>
                    <label className='green' id='name'>Enter a name</label>
                    <input type="text" placeholder='Enter a Server Name' id='name' value={this.state.name} onChange={this.update('name')} />
                    <button className='green create-button'>Join</button>
                </form>
                {errors}
            </div>
            <div>
                <button className='black'  onClick={this.props.openModal}>BACK</button>
            </div>
        </div>)
    }
}
export default ServerJoinForm;
    