import React from "react";
import loginImg from '../../Assets/Images/desktop.png'
import TextField from '@mui/material/TextField';
const Login = () => {
  return (
    <div className="login">
      <div className="col-sm-5 login-left">
        {/* <h4>Login<h4/> */}
        <h2 className="login-left-heading">Login</h2>
        <p className="login-left-text">Get Access to your <br/>Orders, Wishlist and Recommendations</p>
        <img className="login-left-img" src={loginImg} alt=""/>
      </div>
     
      <div className="col-sm-7 login-right" > 
      <TextField id="standard-basic" label="Enter Email/Mobile number" variant="standard" />
      </div>

    </div>
  );
};

export default Login;
