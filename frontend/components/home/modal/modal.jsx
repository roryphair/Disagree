import React from 'react';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateServerContainer from '../servers/create_server_form_container';
import ChooseServer from '../servers/choose_server';;
import JoinServer from '../servers/server_join_form';


class Modal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (!this.props.modal) {
            return null;
          }
        let displayComp;
        switch(this.props.modal){
            case 'serverChoice':
                displayComp = <ChooseServer openModal={this.props.openModal} />;
                break;
            case 'serverCreateForm':
                displayComp = <CreateServerContainer />;
                break;
            case 'serverJoinForm':
                displayComp = <JoinServer />
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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);