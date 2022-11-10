import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./resetPasswordConfirm.css";
import cvLogo from '../../assets/cvnewlogo.png'
import { reset_password_confirm } from "../../actions/auth";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { uid, token } = useParams();
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const togglePassword = (event) => {
    setPasswordShown(!passwordShown);
    event.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (new_password === re_new_password) {
      reset_password_confirm(uid, token, new_password, re_new_password);
      setRequestSent(true);
    } else {
      alert("Password does not match");
    }
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div className="reset-password-confirm">
        <div className="bg-overlay-reset-password">
      <div className="inner-reset-password">
        <div className="login-logo">
          <img src={cvLogo} alt="logo" className="login-logo" />
        </div>
        <h2 className="text-center mb-4 reset-password-heading">
          Reset Your Password
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group input-group mb-3">
            <input
              className="form-control remove-right-border"
              type={passwordShown ? "text" : "password"}
              placeholder="New Password"
              name="new_password"
              value={new_password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
            {new_password.length > 0 ? (
              <span
                className="input-group-text show-pswd"
                onClick={togglePassword}
              >
                {passwordShown ? <BsEyeFill /> : <BsFillEyeSlashFill />}
              </span>
            ) : null}
          </div>
          <div className="form-group input-group mb-3">
            <input
              className="form-control remove-right-border"
              type={passwordShown ? "text" : "password"}
              placeholder="Confirm New Password"
              name="re_new_password"
              value={re_new_password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
            {re_new_password.length > 0 ? (
              <span
                className="input-group-text show-pswd"
                onClick={togglePassword}
              >
                {passwordShown ? <BsEyeFill /> : <BsFillEyeSlashFill />}
              </span>
            ) : null}
          </div>

          <button className="btn btn-primary" type="submit">
            Reset Password
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
