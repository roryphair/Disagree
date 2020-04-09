import React from "react";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Welcome from './welcome/welcome_container';
import Home from './home/home_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Switch} from 'react-router-dom'

const App = () => (
  <div className='app-main'>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path='/channels/:serverId/:channelId' component={Home} />
      <ProtectedRoute path='/channels/:serverId' component={Home} />
      <Route exact path='/' component={Welcome}/>
    </Switch>
  </div>
  
);

export default App;