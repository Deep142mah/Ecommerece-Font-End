import React from "react";
import loginImg from "../../Assets/Images/desktop.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SignUp = ({setModelToggle}) => {

  return (
    <div className="login">
      <div className="col-sm-5 login-left">
        {/* <h4>Login<h4/> */}
        <h2 className="login-left-heading"> Looks like you're <br />
          new here!</h2>
        <p className="login-left-text">
          Sign Up with your mobile<br/>number to get started <br />
          new here!
        </p>
        <img className="signUp-left-img" src={loginImg} alt="" />
      </div>

      <div className="col-sm-7 login-right">
        <div className="login-Input-1">
        <TextField
            
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Full Name"
            variant="standard"
          />
          <TextField
            className="mt-1 "
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            className="mt-1"
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Mobile number"
            variant="standard"
          />
           <TextField
            className="mt-1 "
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Password"
            variant="standard"
          />
             <TextField
            className="mt-1 "
            size="small"
            style={{ width: "92%" }}
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
          />
   
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "15%",
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
          onClick={() => setModelToggle('verifyotp')}
          sx={{ p: 1.5 }}
          style={{
            backgroundColor: "#FF6000",
            borderRadius: 0,
            marginLeft: "8%",
            marginTop: "1%",
            width: "85%",
          }}
          variant="contained"
        >
          SignUp
        </Button>
        <div>
          <p
            onClick={() => setModelToggle("login")}
            style={{
              color: "#2874f0",
              fontWeight: "550",
              textAlign: "center",
              fontSize: "15px",
              marginTop: "5%",
              cursor: "pointer",
            }}
          >
            Existing User? Log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
