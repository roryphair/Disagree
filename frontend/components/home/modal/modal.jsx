import React from 'react';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateServerContainer from '../servers/create_server_form_container';
import CreateChannelContainer from '../channels/create_channel_container';
import EditChannelContainer from '../channels/edit_channel_container';
import EditMessageContainer from '../messages/edit_message_form_container';
import CreateDMForm from '../messages/new_dm_form_container';
import ChooseServer from '../servers/choose_server';;
import JoinServer from '../servers/server_join_form_container';
import {resetErrors} from '../../../actions/session_actions'


class Modal extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      this.props.resetErrors();
    }
    render(){
        if (!this.props.modal) {
            return null;
          }
        let displayComp;
        switch(this.props.modal){
            case 'serverChoice':
                this.props.resetErrors();
                displayComp = <ChooseServer openModal={this.props.openModal} />;
                break;
            case 'serverCreateForm':
                displayComp = <CreateServerContainer />;
                break;
            case 'channelCreateForm':
                this.props.resetErrors();
                displayComp = <CreateChannelContainer />;
                break;
            case 'channelEditForm':
              this.props.resetErrors();
              displayComp = <EditChannelContainer />;
              break;
            case 'channelMessageEdit':
              this.props.resetErrors();
              displayComp = <EditMessageContainer />;
              break;
            case 'serverJoinForm':
                displayComp = <JoinServer />
                break
            case 'dmCreateForm':
                displayComp = <CreateDMForm />
                break
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {displayComp}
        </div>
  </div>)
    }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modaltype) => dispatch(openModal(modaltype)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);