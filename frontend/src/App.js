import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../src/views/Home/Home'
import Login from '../src/views/Login/Login'
import Signup from '../src/views/Signup/Signup'
import ResetPassword from '../src/views/ResetPassword/ResetPassword'
import ResetPasswordConfirm from '../src/views/ResetPasswordConfirm/ResetPasswordConfirm'
import Activate from '../src/views/Activate/Activate'
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './views/main/main'
import Dashboard from "./views/Dashboard/dashboard";
import UploadRepos from "./components/Uploaded Repos/uploadedRepos";
import Scan from "./views/Scan/scan";
import Find from "./views/Find/Find";
import Settings from "./views/Settings/settings";
import RepoResults from './components/RepoDetails/repodetails'
import UploadFile from './components/UploadFile/UploadFile'

const App = () => {

  
  return (
    <Provider store={store}>
      <Routes>
        <Route  path="/" element={<Login/>}/>
          <Route  path="home" element={<Home/>} />
          <Route  path="login" element={<Login/>} />
          <Route  path="signup" element={<Signup/>} />
          <Route  path="reset-password" element={<ResetPassword/>} />
          <Route  path='password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
          <Route  path="activate/:uid/:token" element={<Activate/>} />
          <Route  path='main' element={<Main/>}>
                <Route exact path='' element={<Dashboard/>}/>
                <Route exact path='upload' element={<UploadFile/>}/>
                <Route exact path="scans" element={<Scan/>} />
                <Route exact path="find" element={<Find/>} />
                <Route exact path="settings" element={<Settings/>} />
                <Route exact path="uploadedRepos" element={<UploadRepos/>}/>
                <Route exact path="scans/:id" element={<RepoResults/>}/>
          </Route>
      </Routes>
    </Provider>
  )
}


export default App