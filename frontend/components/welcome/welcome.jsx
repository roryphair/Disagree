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
            <div className='fun-splash'>
                
                <img className='bomb splash-img floating' src={window.bomb} alt=""/>
                <img className='cd splash-img' src={window.cd} alt=""/>
                <img className='circlefill-1 splash-img grey' src={window.circlefill} alt=""/>
                <img className='circlefill-2 splash-img grey' src={window.circlefill} alt=""/>
                <img className='circlefill-3 splash-img grey' src={window.circlefill} alt=""/>
                <img className='circlefill-4 splash-img grey' src={window.circlefill} alt=""/>
                <img className='circlefill-5 splash-img grey' src={window.circlefill} alt=""/>
                <img className='circleopen-1 splash-img grey' src={window.circleopen} alt=""/>
                <img className='circleopen-2 splash-img grey' src={window.circleopen} alt=""/>
                <img className='coin-1 splash-img floating' src={window.coin} alt=""/>
                <img className='coin-2 splash-img floating'src={window.coin} alt=""/>
                <img className='coinblock splash-img' src={window.coinblock} alt=""/>
                <img className='controller splash-img' src={window.controller} alt=""/>
                <img className='disk splash-img floating' src={window.disk} alt=""/>
                <img className='headphone splash-img' src={window.headphone} alt=""/>
                <img className='iphone splash-img' src={window.iphone} alt=""/>
                <img className='laptop splash-img' src={window.laptop} alt=""/>
                <img className='monitor splash-img' src={window.monitor} alt=""/>
                <img className='potion splash-img' src={window.potion} alt=""/>
                <img className='smartphone splash-img' src={window.smartphone} alt=""/>
                <img className='square-1 splash-img grey' src={window.square} alt=""/>
                <img className='square-2 splash-img grey' src={window.square} alt=""/>
                <img className='square-3 splash-img grey' src={window.square} alt=""/>
                <img className='triangle-1 splash-img grey' src={window.triangle} alt=""/>
                <img className='triangle-2 splash-img grey' src={window.triangle} alt=""/>
                <img className='triangle-3 splash-img grey' src={window.triangle} alt=""/>
               <img className='x-1 splash-img grey' src={window.x} alt=""/>
               <img className='x-2 splash-img grey' src={window.x} alt=""/>
               <img className='x-3 splash-img grey' src={window.x} alt=""/>
            </div>
        </div>
    )
}
