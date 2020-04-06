import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {

    return (
        <div className='homepage'>
            <header >

            </header>
            <h1>A new way to chat with your communities and friends.</h1>
            <p>Disagree is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.</p>
            <Link to='/signup'> <button>Sign Up</button></Link>
            <button>Try the Demo</button>
        </div>
    )
}