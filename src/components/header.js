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
            <div className="header  row">
               <div className="col-sm-10">
                 <h4 className="pt-4 pl-3" >WebSite Name</h4>
               </div>
               <div className="col-sm-2 pt-3 pr-2  ">
                 <button className="btn btn-danger  " onClick={this.props.loggedOut} >
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 </button>
               </div>
            </div>
        );
    }
}
export default Header;