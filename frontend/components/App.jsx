import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Welcome from './welcome/welcome';
import Home from './home/home_container';
import ChannelsIndex from './channels/channels_index';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div className='app-main'>
    <header>
    {/* <h1>Disagree</h1>
    <GreetingContainer /> */}
    </header>
    <AuthRoute exact path='/' component={Welcome}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path='/channels/@me' component={Home} />
  </div>
  
);

export default App;