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
        dataModalHeading:"Add New User",
        dataModalUser : { name:"vikas", email: "vikas@gmail.com", mobile:"9887712666"},
        message:"",
        isMessageModalActive:false,
        messageType:'negative',
        loggedOut : false,
        currentEvent:'',
      }
  }
  
  closeMessageModal = (bool)=>{
    this.setState({isMessageModalActive:false});
  }

  closeDataModal = (bool)=>{
    this.setState({isDataModalActive:false});
  }

  loggedOut = ()=>{
        this.setState({loggedOut:true,
                       message:"Successfully Logged Out" ,
                       messageType:'positive',
                       isMessageModalActive:true});
  }

  handleAddUserEvent = ()=> {
    this.setState({
                   currentEvent:"add",
                   dataModalHeading:"Add New User",
                   dataModalUser : {name:"", email:"", mobile:""},
                   isDataModalActive:true, 
                   editUserId:0,
    });
  }

  handleEditClicked =(id)=>{

    const editUser = this.state.users.find((user)=>{
                         return user.id === id;
                      });
    this.setState({
                  currentEvent:"edit",
                  dataModalHeading:"Edit User",
                  dataModalUser : editUser,
                  isDataModalActive:true, 
                  editUserId:id,
    });
  }

  handleDeleteClicked = (id)=>{
    const newUsers = this.state.users.filter((user)=>{
           return user.id !== id;
    });
    this.setState({users:newUsers});
  }

  handleOnDataModalSubmit = (event) =>{
     event.preventDefault();
     const name = event.target[0].value;
     const email = event.target[1].value;
     const mobile = event.target[2].value;
     // alert(name+'   '+email+"   "+mobile);
     if(this.state.currentEvent==='edit'){
        this.state.users.map((user)=>{
            if(user.id === this.state.editUserId){
              user.name =name;
              user.email=email;
              user.mobile=mobile;
            }
            return user;
        });
        this.setState({isDataModalActive:false});
        alert('Record updated Successfully');

     } else if(this.state.currentEvent ==='add'){
          const lastUser = this.state.users[this.state.users.length-1];
          const id = lastUser.id+1; 
          const newUser = {id, name, email, mobile};
          let users = this.state.users;
          users.push(newUser);
          
          this.setState({isDataModalActive:false, users:users});
          alert('Record added Successfully');
      }

  }
  render() {
    return (
      <div className="App">
        <Header  loggedOut={()=>{this.loggedOut()}} />
        <Body users={this.state.users}  AddButtonCliicked={()=>{ this.handleAddUserEvent()}} editClicked={(id)=>{ this.handleEditClicked(id)}} deleteClicked={(id)=>{ this.handleDeleteClicked(id)}}/>
        <DataModal heading={this.state.dataModalHeading} isModalActive={this.state.isDataModalActive} isClose={(bool) =>{ this.closeDataModal(bool);} } handleSubmit={(event)=> { this.handleOnDataModalSubmit(event);}} userData={this.state.dataModalUser} />
        <MessageModal message={this.state.message}  isModalActive={this.state.isMessageModalActive} isClose={(bool) =>{ this.closeMessageModal(bool);} } messageType={this.state.messageType} />
      </div>
    );
  }
}
export default App;
