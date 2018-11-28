import React from 'react';
import AddButton from './addButton';
import DataTable from './dataTable';

class Body extends React.Component{
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
        return(
            <div>
               <div className="row">
                  <div className="col-sm-2" />
                  <div className="data-div row col-sm-8 pt-5">
                     <AddButton className="col-sm-12 " clicked ={()=>{ this.props.AddButtonCliicked(); }}  />
                     <DataTable className="col-sm-12 " users={this.props.users} deleteClicked={(id)=>{ this.props.deleteClicked(id);}} editClicked={(id)=>{this.props.editClicked(id);}} />
                  </div>
                  <div className="col-sm-3"></div>
               </div>
            </div>
            );
    }
}
export default Body;