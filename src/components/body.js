import React from 'react';
import AddButton from './addButton';
import DataTable from './dataTable';

const Body = (props)=>{
   
        return(
            <div>
               <div className="row">
                  <div className="col-sm-2" />
                  <div className="data-div row col-sm-8 pt-5">
                     <AddButton className="col-sm-12 " clicked ={()=>{ props.AddButtonCliicked(); }}  />
                     <DataTable className="col-sm-12 " users={props.users} deleteClicked={(id)=>{ props.deleteClicked(id);}} editClicked={(id)=>{props.editClicked(id);}} />
                  </div>
                  <div className="col-sm-3"></div>
               </div>
            </div>
            );
}
export default Body;