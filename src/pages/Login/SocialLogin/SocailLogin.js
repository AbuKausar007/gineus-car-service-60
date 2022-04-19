import React from "react";
import google from "../../../images/SocialIcon/google.png";
import facebook from "../../../images/SocialIcon/facebook.png";
import github from "../../../images/SocialIcon/github.png";

const SocailLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="w-25 bg-dark"></div>
        <h6 className="px-4">OR</h6>
        <div style={{ height: "1px" }} className="w-25 bg-dark"></div>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto mt-3">
          <img style={{ height: "35px" }} src={google} alt="" /> Google Sign In
        </button>
      </div>
      <div>
        <button className="btn btn-primary w-50 d-block mx-auto mt-3">
          <img style={{ height: "30px" }} src={facebook} alt="" /> Google Sign
          In
        </button>
      </div>
      <div>
        <button className="btn btn-secondary w-50 d-block mx-auto mt-3">
          <img style={{ height: "30px" }} src={github} alt="" /> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
