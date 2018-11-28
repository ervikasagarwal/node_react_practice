import React from 'react';
import AddButton from './addButton';
import DataTable from './dataTable';

class Body extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div>
               <div className="row">
                  <div className="col-sm-2" />
                  <div className="data-div row col-sm-8 pt-5">
                     <AddButton className="col-sm-12 " clicked ={()=>{ this.props.AddButtonCliicked(); }}  />
                     <DataTable className="col-sm-12 " users={this.props.users}  />
                  </div>
                  <div className="col-sm-3"></div>
               </div>
            </div>
            );
    }
}
export default Body;