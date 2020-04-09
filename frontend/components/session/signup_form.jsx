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
    
    componentDidMount(){
        this.props.resetErrors();
    }
    
    
    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state);
    }

    update(type){
        return (e) => this.setState({[type]: e.currentTarget.value})
    }

    render(){
        return ( 
        <div className='session-background'>
        <div className='session-form'>
            <ul>
                {this.props.errors.length > 0 ? this.props.errors.map((error,idx) =>  <li key={idx}> {error}</li>) : null}
            </ul>
            <form action="" onSubmit={this.handleSubmit}>
                
                <h2>Create an account</h2>
                <label htmlFor="" id='username'> USERNAME </label>
                <input type="text" onChange={this.update('username')} value={this.state.username} id='username'/>
                
                <label htmlFor="" id='email'>  EMAIL</label>
                <input type="text" onChange={this.update('email')} value={this.state.email}  id='email'/>
                    
                <label htmlFor="" id='password'> PASSWORD  </label>
                <input type="password" onChange={this.update('password')} value={this.state.password} id='password'/>
                
                <button className='blue'>Continue</button>
            </form>
            
            <Link to='/login'>Already have an account?</Link>
        </div>
        </div>)
    }
}

export default SignupForm;