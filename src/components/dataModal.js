import React from 'react';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'

    }
  };

class DataModal extends React.Component{
    constructor(){
        super();

    }
    onClose = ()=>{
        this.props.isClose(true);
    }
    render(){
        return(
            <div>
              <Modal isOpen={this.props.isModalActive} onRequestClose={this.onClose}  style={customStyles}>
                    <div className="modal-header bg-info">
                    <h5 className="modal-title ">{this.props.heading}</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={this.onClose} >&times;</button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.props.handleSubmit} className="text-left form " name=""  method="post">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" required="required" defaultValue={this.props.userData.name}/>
                            <label htmlFor="name">Email Id </label>
                            <input type="email" className="form-control " name="email"  required="required" placeholder="vikas@gmail.com" defaultValue={this.props.userData.email} />
                            <label htmlFor="mobile">Mobile Number</label>
                            <input  type="number" className=" form-control" name="description"  required="required"  defaultValue={this.props.userData.mobile} /><br />
                            <input type="submit" value="submit" className="btn btn-primary form-control"  />
                        </form >
                    </div>
              </Modal>
            </div>
        );
    }
}

export default DataModal;