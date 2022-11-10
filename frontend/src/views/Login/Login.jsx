import React, {useState, useRef} from 'react'
import {connect } from 'react-redux'
import sequencelogo from '../../assets/logo.png'
import cvLogo from '../../assets/cvnewlogo.png'
import './login.css'
import {Link, Navigate} from 'react-router-dom'
import {login} from '../../actions/auth'
import { AiFillLock } from "react-icons/ai";
import {Checkbox} from 'primereact/checkbox'
import googleImage from '../../assets/googlelogo.svg'
import { BsEyeFill ,BsFillEyeSlashFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify'




const Login = ({login, isAuthenticated}) => {
  // const userInfo = useSelector(state => state.auth.isAuthenticated);

  const emailRef = useRef()
  const passwordRef = useRef()
  const [password, setPassword] = useState('')
  const onChange = (e) => {
    setPassword(e.target.value)
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (event) => {
    setPasswordShown(!passwordShown);
    event.preventDefault();
  };

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // })
  // const {email, password} = formData
  // const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const HandleClick = async e => {
    e.preventDefault()
    login(emailRef.current.value, passwordRef.current.value)
  }
  if (isAuthenticated) {
    return <Navigate to="/main" />
  }




 


 

  return (
    <div className="inner-main-login-page">

    <div className='right-login bg-overlay'>
    <div className='inner-login'>
      <div className='login-logo'>
        <img src={cvLogo} alt="logo" className='login-logo' />
      </div>
      <h2 className='large login-heading text-center mb-3'>Login to your Account</h2>
      <form className='form'>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>@</span>
          <input 
          className='form-control' 
          type='email' 
          placeholder='Email Address' 
          name='email' 
          // value={email} 
          ref={emailRef}
          // onChange={e => onChange(e)} 
          required 
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'><AiFillLock/></span>
          <input 
          className='form-control remove-right-border' 
          type={passwordShown? 'text' : 'password'} 
          placeholder='Password' 
          name='password' 
          value={password} 
          ref={passwordRef}
          onChange={e => onChange(e)} 
          minLength='6'
          required 
          />
          {password.length > 0? <span className="input-group-text show-pswd" onClick={togglePassword}>{passwordShown? <BsEyeFill/> : <BsFillEyeSlashFill/>}</span> : null}
        </div>

        <div className="field-checkbox mb-3">
                  <Checkbox
                    inputId="binary"
                  />
                  <label htmlFor="binary">Remember Me</label>
                </div>
        <div className='form-group mb-3'>
        <button type='submit' className='btn btn-primary' onClick={HandleClick}> Login </button>
        </div>
        </form>
        {/* <div>
            <button className="btn btn-primary signin-google">
              <img
                src={googleImage}
                alt="loginwithGoogle"
                className="signinwithgoogle"
              />
              Sign in with <span style={{fontWeight:'bold'}}>Google </span>
            </button>
        </div> */}
      
      <p className='mt-3'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
      <p className='mt-3'>
        Forgot your password? <Link to='/reset-password'>Reset Password</Link>
      </p>
      <div className="powered-by">
        <p>Powered by</p>
        <img src={sequencelogo} alt="Sequenxe" />
    </div>
    </div>
    
    </div>
    <ToastContainer/>
    </div>
    
  )
}
    
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})


export default connect(mapStateToProps, {login})(Login)