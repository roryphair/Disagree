import React from 'react';
import {Link} from 'react-router-dom';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: '',
            email: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state);
    }

    update(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        return ( <div className='signup-form'>
            <h2>Sign up</h2>
            <ul>
                {this.props.errors.length > 0 ? this.props.errors.map((error,idx) =>  <li key={idx}> {error}</li>) : null}
            </ul>
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor=""> Username:
                    <input type="text" onChange={this.update('username')} value={this.state.username} />
                </label>
                <label htmlFor=""> Email:
                    <input type="text" onChange={this.update('email')} value={this.state.email} />
                </label>
                <label htmlFor=""> Password
                    <input type="password" onChange={this.update('password')} value={this.state.password} />
                </label>
                <button>Create Account</button>
            </form>
            
            <Link to='/login'>Log in</Link>
        </div>)
    }
}

export default SignupForm;