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
        let emailLabel;
        let passwordLabel;
        let usernameLabel;
        if(this.props.errors['email']){
            emailLabel = (<>
            <label htmlFor="" id='email' className='red'>EMAIL  - {this.props.errors['email']} </label>
            <input type="email" className='session-input red-outline' onChange={this.update('email')} value={this.state.email} id='email'/> 
            </>
            )
        }else{
           emailLabel = (<> 
           <label htmlFor="" id='email'>EMAIL</label>
           <input type="email" className='session-input no-outline' onChange={this.update('email')} value={this.state.email} id='email'/> 
           </>)
        }
        if(this.props.errors['password']){
            passwordLabel =(<> 
            <label htmlFor="" id='password' className='red'>PASSWORD - {this.props.errors['password']} </label>
            <input type="password"  className='session-input red-outline' onChange={this.update('password')} value={this.state.password} id='password'/>
            </>)
        }else{
            passwordLabel =(<> 
            <label htmlFor="" id='password'>PASSWORD</label>
            <input type="password" className='session-input no-outline' onChange={this.update('password')} value={this.state.password} id='password'/>
            </>)
        }
        if(this.props.errors['username']){

            usernameLabel = (<>
            <label htmlFor="" id='username' className='red'>USERNAME - {this.props.errors['username']} </label>
            <input type="text" className='session-input red-outline' onChange={this.update('username')} value={this.state.username} id='username'/>
            </>)
        }else{
            usernameLabel = (<>
            <label htmlFor="" id='username'>USERNAME</label>
            <input type="text" className='session-input no-outline' onChange={this.update('username')} value={this.state.username} id='username'/>
            </>)
        }
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
                {emailLabel}
                {usernameLabel}
                {passwordLabel}
                
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