import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            username: "",
            password: ''
        });
    }

    update(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        if(this.props.user) return <Redirect to='/'/>
        
        return ( <div className='login-form'>
            <h2>Log In</h2>
            <ul>
                    {this.props.errors.length > 0 ? this.props.errors.map((error,idx) =>  <li key={idx}> {error}</li>) : null}
            </ul>
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor=""> Username:
                    <input type="text" onChange={this.update('username')} value={this.state.username} />
                </label>
                <label htmlFor=""> Password
                    <input type="password" onChange={this.update('password')} value={this.state.password} />
                </label>
                <button>Log in</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </div>)
    }
}

export default LoginForm;