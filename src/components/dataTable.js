import React from 'react';
import UserRow from './userRow';

class DataTable extends React.Component{
    constructor(){
        super();
    }
    render(){
        const users = this.props.users.map((user)=>{
              return (<UserRow key={user.id} userDetails={user} deleteClicked={(id)=>{ this.props.deleteClicked(id);}} editClicked={(id)=>{ this.props.editClicked(id);}} />)  
        }); 
        return(
           <div className="col-sm-12 text-center pt-1 row">
             { users } 
               
           </div>
              
            );
    }
}
export default DataTable;
