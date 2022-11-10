import React, { Fragment, useState } from "react";
import "./header.css";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Navigate } from "react-router-dom";
import {Tooltip} from 'antd'

function Header({ logout }) {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <Tooltip title="Notification" color="#6B7280">
          <div className="header-icon-wrapper">
            <i className="header-icon pi pi-bell"></i>
          </div>
        </Tooltip>

        <Tooltip title="Profile" color="#6B7280">
        <div className="header-icon-wrapper">
          <i className="header-icon pi pi-user"></i>
        </div>
        </Tooltip>

        <Tooltip title="Logout" color="#6B7280" overlayStyle={{backgroundSize:'100%', borderRadius:'5px'}}>
        <div className="header-icon-wrapper" onClick={logout_user}>
          <i className="header-icon pi pi-sign-out" ></i>
        </div>
        </Tooltip>
   
        {redirect ? <Navigate to="/login" /> : <Fragment></Fragment>}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
