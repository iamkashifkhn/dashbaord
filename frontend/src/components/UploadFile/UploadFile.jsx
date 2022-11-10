import React, { useState } from "react";
import { connect } from "react-redux";
import FileUploadConfirmation from '../FileUploadConfirmation/fileuploadConfirmation'
import './uploadfile.css'


const UploadFile=()=>{
  const [zipfile, setZipFile] = useState(false)
  const [loader, setLoader] = useState(false);

  const newZipFile =()=>{
    const uploadZip = new FormData();
    uploadZip.append("zip_file_path",zipfile);
    uploadZip.append('zip_file_name',zipfile.name);


    // if we want to send the user id to the backend
    // uploadZip.append('user_id', userInfo?.id)


  fetch("http://localhost:8000/api/upload_zip_test/",
//   fetch("http://18.133.41.137:8000/api/upload_zip_test/",
  {
    method: "POST",
    body: uploadZip
  }
  )
  .then((res) => {
    console.log(res)
    setLoader(!loader)
  })
  .then((data)=>{
    console.log(data)
  })
  .catch(err => console.log(err))
}

  return (
    <>
    {
      loader ? <FileUploadConfirmation/> :
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to ComplyVantage </h1>
          <p>
          ComplyVantage is an auditing tool that helps you to check if your open source components are compliant with your organization's policies.
          it helps you in compliance and give you findings.
          </p>
          </div>
        <div className="button-wrapper">
      <div className="upload-btn-wrapper">
        {
          zipfile ? <button className="btn-upload file-uploaded"> File Selected </button> :
          <button className="btn-upload">Upload a zip file</button>
        }
        <input type="file" accept=".zip" name="zipfile" 
        onChange={(e)=>{
          setZipFile(e.target.files[0])
        }}
        />

      </div>
      {
        zipfile ? <button type="button" className="submit-file" onClick={newZipFile}>Submit</button> :
      <button type="button" disabled className="disable-button"> Submit </button> }
    </div>
      </div>
    }

    </>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(UploadFile)