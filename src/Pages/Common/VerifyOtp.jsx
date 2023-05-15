import React ,{useState} from 'react';


import OTPInput from 'react-otp-input';

const VerifyOtp = ({setModelToggle}) => {

  const [otp, setOtp] = useState('');


  // const handleResend = async () => {
  //   let params = { user_id: id };
  //   await resendOtp(params)
  //     .then((res) => {
  //       toast.success(res.data.message);
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //     });
  // };

  // const renderButton = (buttonProps) => {
  //   return (
  //     <Button {...buttonProps} className="main-button" variant="contained">
  //       {buttonProps.remainingTime !== 0
  //         ? `Resend in ${buttonProps.remainingTime} sec`
  //         : "Resend"}
  //     </Button>
  //   );
  // };

  // const handleSubmit = async () => {
  //   setLoader(true);
  //   if (otp.length < 4) {
  //     toast.error("Enter 4 Digit OTP");
  //     return false;
  //   } else {
  //     let params = { user_id: id, otp: otp };
  //     await verifyOtp(params)
  //       .then((res) => {
  //         setLoader(false);
  //         toast.success(res.data.message);
  //         if(prevpath === 'forget'){
  //           navigate(`/reset/${id}`);
  //         }
  //         else{
  //           navigate(`/login`);
  //         }
  //       })
  //       .catch((err) => {
  //         setLoader(false);
  //         toast.error(err.message);
  //       });
  //   }
  // };

  // const renderTime = () => React.Fragment;
  // window.history.forward();

  return (
    <div className="login_body ">
      <div className="left-logo">RAFFLE GO</div>
      <div className="login_container p-5 text-center">
        <h3 style={{ color: "#3834b8" }}>One-Time-Password</h3>
        <p>
          Please enter the <br />
          4-digit otp sent on your
          <br /> registered email.
        </p>
        <div className="d-flex justify-content-center">
        <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center border mt-5">
          {/* <ResendOTP
            renderButton={renderButton}
            renderTime={renderTime}
            maxTime={10}
            onResendClick={(e) => {
              handleResend(e);
            }}
          /> */}
          {/* <Button
            className="main-button ms-2"
            onClick={handleSubmit}
            variant="contained"
            color="success"
          > */}
            {/* {loader ? <Spinner animation="border" variant="light" size="sm" /> : "Submit"}
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp

