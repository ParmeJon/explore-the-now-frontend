import React from 'react';

class Login extends React.Component {

state = {
  email: "",
  password: ""
}

changeHandler = e => {
   this.setState({
     [e.target.name]: e.target.value
   });
 };

 loginSubmitHandler = e => {
   e.preventDefault();
   this.props.loginSubmitHandler(this.state);
   this.setState({
     email: "",
     password: ""
   });
 };

  render() {
    return (
      <div className="login wrapper">
         <form className="form-signin" onSubmit={this.loginSubmitHandler}>
           <h1 className="form-signin-heading">Log In</h1>
           <input className="form-control" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
           <input className="form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
           <button className="btn btn-lg btn-primary btn-block" >Log In</button>
         </form>
       </div>
    )
  }
}

export default Login
