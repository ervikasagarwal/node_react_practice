import React from 'react';

class AddButton extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div className="col-sm-12">
           <button className="btn btn-info form-control" onClick={this.props.clicked} >Add New User</button>
        </div>
           );
    }
}
export default AddButton;