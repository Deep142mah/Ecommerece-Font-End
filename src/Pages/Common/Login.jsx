import React from "react";
import loginImg from "../../Assets/Images/desktop.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

const Login = ({setModelToggle}) => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(false);
  };
  console.log(state, "state");
  return (
    <div className="login">
      <div className="col-sm-5 login-left">
        {/* <h4>Login<h4/> */}
        <h2 className="login-left-heading">Login</h2>
        <p className="login-left-text">
          Get Access to your <br />
          Orders, Wishlist and Recommendations
        </p>
        <img className="login-left-img" src={loginImg} alt="" />
      </div>

      <div className="col-sm-7 login-right">
        <div className="login-Input-1">
          <TextField
            className="mt-4 "
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Email/Mobile number"
            variant="standard"
          />
          <TextField
            className="mt-3 "
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Your Password"
            variant="standard"
          />
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "-12%",
            marginLeft: "1%",
            color: "gray",
          }}
        >
          By continuing,you agree to Flipkart's&nbsp;
          <span style={{ color: "#2874f0", cursor: "pointer" }}>
            Terms of Use
          </span>
          &nbsp;and
          <span style={{ color: "#2874f0", cursor: "pointer" }}>
            &nbsp;Privacy
            <br />
            Policy
          </span>
        </p>
        <Button
          onClick={() => handleClick}
          sx={{ p: 1.5 }}
          style={{
            backgroundColor: "#FF6000",
            borderRadius: 0,
            marginLeft: "8%",
            width: "85%",
          }}
          variant="contained"
        >
          LogIn
        </Button>
        <div>
          <p
            onClick={() => setModelToggle('register')}
            style={{
              color: "#2874f0",
              fontWeight: "550",
              textAlign: "center",
              fontSize: "15px",
              marginTop: "30%",
              cursor: "pointer",
            }}
          >
            New to Flipkart? Create an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
