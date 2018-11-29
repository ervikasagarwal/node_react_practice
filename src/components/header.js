import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

const Header  = (props)=>{
        return(
            <div className="header  row">
               <div className="col-sm-10 row">
                 <div className='col-sm-3'>
                     <h4 className="pt-4 pl-3" >WebSite Name</h4>
                 </div>
                 <div className="col-sm-9 pt-4">
                    <Link className="pt-4 pl-3" to="/data">Home</Link>
                 </div>
               </div>
               <div className="col-sm-2 pt-3 ">

                { !(props.logoutbutton) && <button className="btn btn-danger  " onClick={props.loggedOut} >
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </button>}
               </div>
            </div>
        );
}
export default Header;

// props.logoutbutton is defined in login component only (not defined in app component)
// undefined == false 