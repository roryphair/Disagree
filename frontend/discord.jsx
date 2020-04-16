import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import {createServer} from './actions/server_actions';

document.addEventListener("DOMContentLoaded", ()=>{
    
    let jaeed = false;
    const jaeize = (e) =>{
        console.log(e)
            if(e.key ==='j' && e.altKey){
            document.getElementById('root').classList.toggle('jaed');
            jaeed = !jaeed;
            if (jaeed){
                document.getElementById('nightnight').play();
                document.getElementById('nightnight').volume = 0.4; 
            }
            else{
                document.getElementById('nightnight').pause();
            }
        }
    }


    document.addEventListener('keydown', jaeize)

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.currentUser]: window.currentUser.users[window.currentUser.currentUser] }
            },
            session: { id: window.currentUser.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //testing
    window.store = store;
    window.createServer = createServer;
    window.dispatch = store.dispatch;
    //testing
    const root = document.getElementById('root');
    ReactDOM.render( <Root store={store}/>, root);
});

