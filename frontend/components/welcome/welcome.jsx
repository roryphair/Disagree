import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {

    return (
        <div className='splash-page'>
            
            <div className='splash-body'>
                <header className='splash-header'>
                <div className='logo'>
                    <img src={window.icon} alt="icon"/>
                    <img src={window.logo} className='logo-img' alt="logo"/>
                </div>
                <div className='right-side' >
                    something for now
                </div>
            </header>
            <h1>A new way to chat with your communities and friends.</h1>
            <p>Disagree is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.</p>
           <div className='splash-buttons'><Link to='/signup'> <button>Sign Up</button></Link>
            <button onClick={props.login}>Try the Demo</button></div> 
            </div>
        </div>
    )
}
