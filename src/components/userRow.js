import React from 'react';

class UserRow extends React.Component{
    render(){
        return(
            <div className="row col-sm-12 pt-3">
                <div className="col-sm-1">{this.props.userDetails.id} </div>
                <div className="col-sm-2 " >{this.props.userDetails.name}</div>
                <div  className="col-sm-2 " >{this.props.userDetails.email}</div>
                <div  className="col-sm-2 " >{this.props.userDetails.mobile}</div>
                <button className="col-sm-2  btn btn-primary" onClick={()=>{this.props.editClicked(this.props.userDetails.id);}} >Edit</button>
                <div className="col-sm-1"></div>
                <button className="col-sm-2 btn btn-danger " onClick={()=>{this.props.deleteClicked(this.props.userDetails.id);}} >Delete</button> 
            </div>
        );
    }
}
export default UserRow;