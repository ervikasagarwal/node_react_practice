import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './App';
import Login from './components/login';
import Footer from './components/footer';

import {Route, Redirect, Switch} from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';

class Main extends Component {
    constructor(){
      super();
      this.state = {
        signnedIn:false,
      }
    }
    authorized = async (isValid)=>{
    await  this.setState({
            signnedIn:isValid,
        });
    }
   render() {
       return(
           <Router>
            <div>
                    <Switch>
                        <Route exact strict path="/" component={()=>{ return <Login authorized={(isValid)=>{ this.authorized(isValid)}}/>}}  />
                        <Route path="/data" component={()=>{ return (this.state.signnedIn?<App  loggedOut={(isLoggedOut)=>{ this.authorized(!isLoggedOut)}} /> : <div>{alert('you need to sign in first')}<Redirect  to="/"/></div>) }} />
                    </Switch>
                    <Route path="/" component={Footer}></Route>
             </div>
           </Router>
       );
   }
}
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//switch returns only one route 
//footer will render every time because each path have '/'