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
            <img className='session-img' src={window.signinback} alt=""/>
            <div className='session-logo'>
                <Link to='/'>
                    <div className='logo'>
                        <img src={window.icon} alt="icon"/>
                        <img src={window.logo} className='logo-img' alt="logo"/>
                    </div></Link>
           </div>
        <div className='session-form'>
        
            <form action="" onSubmit={this.handleSubmit}>
                
                <h2>Create an account</h2>
                {this.props.errors.length > 0 ? (
                <ul className='session-ul'>
                    {this.props.errors.map((error,idx) =>  <li className='red' key={idx}> {error}</li>)} 
                </ul>
             ) : null}
                <label htmlFor="" id='email'>  EMAIL</label>
                <input type="email" onChange={this.update('email')} value={this.state.email}  id='email'/>
                
                <label htmlFor="" id='username'> USERNAME </label>
                <input type="text" onChange={this.update('username')} value={this.state.username} id='username'/>
                
                    
                <label htmlFor="" id='password'> PASSWORD  </label>
                <input type="password" onChange={this.update('password')} value={this.state.password} id='password'/>
                
                <button className='blue wide'>Continue</button>
            </form>
            <div className='session-bottom'>
                <Link to='/login'>Already have an account?</Link>  <h4 className={'blue pointer'} onClick={this.props.demoLogin}>Use the Demo Account</h4>  
            </div>
            
            
        </div>
        </div>)
    }
}

export default SignupForm;