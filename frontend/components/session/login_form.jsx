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
        return ( <div className='session-form'>
            
            <ul>
                    {this.props.errors.length > 0 ? this.props.errors.map((error,idx) =>  <li key={idx}> {error}</li>) : null}
            </ul>
            <form action="" onSubmit={this.handleSubmit}>
                <h2>Welcome back!</h2>
                <h3>We're so excited to see you again!</h3>
                
                <label htmlFor="" id='username'> USERNAME </label>
                <input type="text" onChange={this.update('username')} value={this.state.username} id='username'/>
                    
                        
                <label htmlFor="" id='password'> PASSWORD  </label>
                <input type="password" onChange={this.update('password')} value={this.state.password} id='password'/>
                <button>Login</button>
            </form>
            <h4>Need an account? <Link to='/signup'>Register</Link></h4>
            
        </div>)
    }
}

export default LoginForm;