import React, {useEffect} from "react";
import "./sidebar.css";
import Applogo from "../../assets/cvnewlogo.png";
import { Link } from "react-router-dom";
import { checkAuthenticated, load_user } from '../../actions/auth'
import {  connect, useSelector } from 'react-redux'

function Sidebar({checkAuthenticated, load_user}) {
  const userInfo = useSelector(state => state.auth.user);
  useEffect(() => {
    load_user();
}, []);
  const links = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      url: "/main",
    },
    {
      label: "Scans",
      icon: "pi pi-search",
      url: "/main/scans",
    },
    {
      label: "Reports",
      icon: "pi pi-file",
      url: "/main/uploadedRepos",
    },
    {
      label: "Find",
      icon: "pi pi-chart-bar",
      url: "/main/find",
    },
    {
        label: "Settings",
        icon: "pi pi-cog",
        url: "/main/settings",
    }
  ];
  const sidebarLinks = () => {
    return links.map((link, index) => {
      return (
                <li className="sidebar-link" key={index}>
                    <Link to={link.url} className='sidebar-links'>
                        <i className={`link-icon ${link.icon}`}></i>
                        {link.label}
                    </Link>
                </li>
      );
    });
  };

  return (
    <div className="sidebar">
      <div className="d-flex sidebar-logo-section">
        <img className="app-logo" src={Applogo} alt="logo" />
      </div>

      <nav>
        <ul className="sidebar-link-wrapper">
            {sidebarLinks()}
        </ul>
      </nav>
      <div className="sidebar-user-section" style={{marginTop:'10px', marginLeft:'-5px'}}>
        <div className="user-info">
          <div className="user-image-wrapper">
            <img className="user-image" src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg' alt="default user" />
          </div>
          <div className="user-text-wrapper">
            <p className="user-name"> {userInfo?.first_name}  </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default connect(null, {checkAuthenticated, load_user})(Sidebar);
