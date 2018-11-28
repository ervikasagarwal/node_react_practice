import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '10%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class MessageModal extends React.Component{
    constructor(){
        super();
        this.state={
            colorClass:'text-success',
        }
    }
    setColor = (success)=>{
        if(success){
            this.setState({colorClass:'text-success'});
        } else{
            this.setState({colorClass:'text-danger'});
        }
    }
    
    onClose = ()=>{
        this.props.isClose(true);
    }
    render(){
        return(
            <div>
                <Modal className="col-sm-6 " isOpen={this.props.isModalActive} onRequestClose={this.onClose} style={customStyles}>
                    <div className="modal-header bg-info">
                        <h4 className="modal-title text-center">Message</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={this.onClose} >&times;</button>
                    </div>
                    <div className="modal-body bg-white shadow-lg ">
                        <h5 className={this.props.messageType==='positive'?'text-success':'text-danger'}>{this.props.message} </h5>
                    </div>
                </Modal>
          </div>
        );
    }
}
export default MessageModal;