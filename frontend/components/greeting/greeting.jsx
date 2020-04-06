import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        if(this.props.currentUser){
            return ( <div className='greeting'> 
                <h2>Welcome {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>)
        }else{
            return( <div className='greeting'>
                <h3>Not logged in!</h3>
                <Link to='/signup'>Sign Up</Link>
                <Link to ='login'>Log in</Link>
            </div>)
        }

    }
}

export default Greeting;