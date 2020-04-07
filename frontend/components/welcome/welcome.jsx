import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {

    return (
        <div className='splash-page'>
            <header className='splash-header'>
                <div className='logo'>
                    <img src={'/icon.png'}  alt="icon"/>
                    <img src="/assests/images/logo.png" alt="logo"/>
                </div>
            </header>
            <div className='splash-body'>
            <h1>A new way to chat with your communities and friends.</h1>
            <p>Disagree is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.</p>
           <div className='splash-buttons'><Link to='/signup'> <button>Sign Up</button></Link>
            <button onClick={props.login}>Try the Demo</button></div> 
            </div>
        </div>
    )
}
