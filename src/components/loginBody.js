import React, { Component } from 'react';

class LoginBody extends Component {
  constructor(){
      super();
  }
  render() {
    return (
      <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 pt-5">
            <h2 className="text-center">Signin</h2><br />
            <form onSubmit={this.props.formSubmitted} method="post">
                 <label htmlFor="email">Email</label>
                 <input type="text" className="form-control" name="email"></input><br/>
                 <label htmlFor="password">Password</label>
                 <input type="password" className="form-control" name="password"></input><br/>
                 <input type="submit" class="btn btn-info form-control" />
            </form>
          </div> 
      </div>
    );
  }
}
export default LoginBody;
