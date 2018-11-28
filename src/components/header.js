import React, { Component } from 'react';

const Header  = (props)=>{
        return(
            <div className="header  row">
               <div className="col-sm-10">
                 <h4 className="pt-4 pl-3" >WebSite Name</h4>
               </div>
               <div className="col-sm-2 pt-3 ">
                 <button className="btn btn-danger  " onClick={props.loggedOut} >
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 </button>
               </div>
            </div>
        );
}
export default Header;