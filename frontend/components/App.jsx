import React from "react";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Welcome from './welcome/welcome_container';
import Home from './home/home_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div className='app-main'>
    <AuthRoute exact path='/' component={Welcome}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path='/channels/@me' component={Home} />
  </div>
  
);

export default App;