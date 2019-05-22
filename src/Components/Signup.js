import React from 'react';

class Signup extends React.Component {

  state = {
    email: "",
    password: "",
    price: "",
    radius: ""
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signupSubmitHandler = e => {
    e.preventDefault();
    this.props.signupSubmitHandler(this.state);
    this.setState({
      email: "",
      password: "",
      price: "",
      radius: ""
    })
  }

  render() {
    return (
      <div className="login wrapper">
           <form className="form-signin" onSubmit={this.signupSubmitHandler}>
             <h1 className="form-signin-heading">Sign up</h1>
             <input className="form-control" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
             <input className="form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
             <input className="form-control" type="number" name="price" placeholder="price" value={this.state.price} onChange={this.changeHandler} />
             <input className="form-control" type="number" name="radius" placeholder="radius" value={this.state.radius} onChange={this.changeHandler} />
             <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
           </form>
         </div>
    )
  }
}

export default Signup
