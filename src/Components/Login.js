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
    <div className="login">
      <h1>Log In</h1>
      <form onSubmit={this.loginSubmitHandler}>
        <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
        <button>Log In</button>
      </form>
    </div>
  )
}
}

export default Login
