import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import DataModal from './components/dataModal';
import MessageModal from './components/messageModal';

class App extends Component {
  constructor(){
      super();
      this.state = {
        users : [
          { id:1,'name': 'vikas', 'email':"vkas@gmail.com", 'mobile': '9879896975' },
          { id:2,'name': 'vikas', 'email':"vkas@gmail.com", 'mobile': '9879896975' },
          { id:3,'name': 'vikas', 'email':"vkas@gmail.com", 'mobile': '9879896975' },
          { id:4, 'name': 'vikas', 'email':"vkas@gmail.com", 'mobile': '9879896975' },
          { id:5,'name': 'vikas', 'email':"vkas@gmail.com", 'mobile': '9879896975' },
          { id:6,'name': 'vikas', 'email':"vkas@gmail.com", 'mobile': '9879896975' },
        ],
        isDataModalActive:false,
        DataModalHeading:"Add New User",
        DataModalUser : { name:"vikas", email: "vikas@gmail.com", mobile:"9887712666"},
        message:"",
        isMessageModalActive:false,
        loggedOut : false,
        currentEvent:'',


      }
  }
  handleOnDataModalSubmit = (event)=>{

  };
  closeMessageModal = (bool)=>{
    this.setState({isMessageModalActive:false});
  }
  loggedOut = ()=>{
        this.setState({loggedOut:true,message:"Successfully Logged Out" ,isMessageModalActive:true});
  }
  handleAddUserEvent = ()=> {
    this.setState({currentEvent:"add New User",
                   DataModalHeading:"Add New User",
                   DataModalUser : {name:"", email:"", mobile:""},
                   isDataModalActive:true, 
                  });

  }
  render() {
    return (
      <div className="App">
        <Header  loggedOut={()=>{this.loggedOut()}} />
        <Body users={this.state.users}  AddButtonCliicked={()=>{ this.handleAddUserEvent()}} editClicked={(id)=>{ this.handleEditClicked(id)}} deleteClicked={(id)=>{ this.handleDeleteClicked(id)}}/>
        <DataModal heading={this.state.DataModalHeading} isModalActive={this.state.isDataModalActive} isClose={(bool) =>{ this.closeMessageModal(bool);} } handleSubmit={(event)=> { this.handleOnDataModalSubmit(event);}} userData={this.state.DataModalUser} />
        <MessageModal message={this.state.message}  isModalActive={this.state.isMessageModalActive} isClose={(bool) =>{ this.closeMessageModal(bool);} } />
      </div>
    );
  }
}
export default App;
