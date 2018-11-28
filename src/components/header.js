import React, { Component } from 'react';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "vikas",
        }
    }
    render(){
        return(
            <div className="header col-sm-12 row">
               <div className="col-sm-10">
                 <h4 className="pt-4" >WebSite Name</h4>
               </div>
               <div className="col-sm-2 pt-3 ">
                 <button className="btn btn-danger form-control" onClick={this.props.loggedOut} >Logout</button>
               </div>
            </div>
        );
    }
}
export default Header;