import ServerIndex from './server_index';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';

const msp = (state) =>({
})
const mdp = (dispatch) => ({
})

export default connect(msp, mdp)(ServerIndex);