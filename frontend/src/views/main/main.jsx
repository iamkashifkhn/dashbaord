import React from "react";
import './main.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/header";
import { Outlet} from "react-router-dom";
import {ToastContainer} from 'react-toastify'

 
function Main() {
  return (
    <div className="main-app">
      <div className="container-fluid">
        <Header />
      </div>

      <div className="main-container">
            <Sidebar />

          <div className="main">
            <Outlet/>
          </div>
          <ToastContainer/>
      </div>
      
    </div>
  );
}

export default Main;
