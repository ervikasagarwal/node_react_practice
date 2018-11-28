import React from 'react';

const AddButton = (props)=>{
        return(
                <div className="col-sm-12">
                   <button className="btn btn-info form-control" onClick={props.clicked} >Add New User</button>
                </div>
        );
}
export default AddButton;