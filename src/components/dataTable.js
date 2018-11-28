import React from 'react';
import UserRow from './userRow';

class DataTable extends React.Component{
    constructor(){
        super();
       
    }
    DeleteRow = (id)=>{
        const newArray = this.state.users.filter((user)=>{
            return user.id !== id;
        })
        this.setState({users:newArray});
    }
    render(){
        const users = this.props.users.map((user)=>{
              return (<UserRow key={user.id} userDetails={user} deleteClicked={(id)=>{ this.DeleteRow(user.id);}} editClicked={(id)=>{ alert(id);}} />)  
        }); 
        return(
           <div className="col-sm-12 text-center pt-1 row">
             { users } 
               
           </div>
              
            );
    }
}
export default DataTable;
