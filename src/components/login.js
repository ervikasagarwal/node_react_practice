import React, { Component } from 'react';
import Header from './header';
import LoginBody from './loginBody';
import MessageModal from './messageModal';

import {Redirect} from 'react-router';

class Login extends Component {
  constructor(){
      super();
      this.state = {
        isValid:false,
        message:'',
        isMessageModalActive:false,
        messageType:'positive',
      }
  }
  
  handleLoginSubmit = async(event)=>{
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    let isValid=false;
    if(email==='test' && password==='test'){
        isValid=true;
    }
    if(isValid){
        await this.setState({
            isValid:true,
            message:'User validated successfully...now you can go to home page',
            messageType:'positive',
            isMessageModalActive:true,
        });
    } else{
        await  this.setState({
                isValid:false,
                message:'Invalid username or password',
                messageType:'negative',
                isMessageModalActive:true,
            });
    }
  }
  messageModalClosed = async ()=>{

    await  this.setState({isMessageModalActive:false});
    await this.props.authorized(this.state.isValid);

  }
   
  render() {
    return (
      <div className="App">
        <MessageModal message={this.state.message}  isModalActive={this.state.isMessageModalActive} isClose={(bool) =>{this.messageModalClosed() }} messageType={this.state.messageType} />
        <Header  logoutbutton='hidden' />
        <LoginBody  formSubmitted={this.handleLoginSubmit} />
        
       </div>
    );
  }
}
export default Login;
