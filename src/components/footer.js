import React, { Component } from 'react';

const Footer  = (props)=>{
        return(
            <div>
                <div className="space"></div>
                <div className="footer text-center">
                 <h5 className="pt-4 text-center ">Designed and Developed by Vikas Agarwal</h5>
                </div>
            </div>
        );
}
export default Footer;

// props.logoutbutton is defined in login component only (not defined in app component)
// undefined == false 