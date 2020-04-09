import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, RESET_ERRORS} from '../actions/session_actions';

const errorsReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RESET_ERRORS:
            return {};
        case RECEIVE_CURRENT_USER:
            return {};
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
}
export default errorsReducer;