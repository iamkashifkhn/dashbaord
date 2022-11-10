import React, {useState} from 'react'
import googleImage from '../../assets/google.png'
import sequencelogo from '../../assets/logo.png'
import cvLogo from '../../assets/cvnewlogo.png'
import {AiOutlineUser, AiFillLock} from 'react-icons/ai'
import {connect} from 'react-redux'
import {BsEyeFill,BsFillEyeSlashFill} from 'react-icons/bs'
import {Link, Navigate} from 'react-router-dom'
import {signup} from '../../actions/auth'
import './signup.css'


const Signup = ({signup, isAuthenticated}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [check, setcheck] = useState(false)
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_password: ''
  });

  const { first_name, last_name, email, password, re_password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault();

    if (password === re_password && check === true) {
        signup(first_name, last_name, email, password, re_password);
        setAccountCreated(true);
    }
    else if(password !== re_password){
      alert("Password does not match")
    }
    else if(check === false){
      alert("Please accept the terms and conditions")
    }

};

if (isAuthenticated){
  return <Navigate to='/'/>
}
if(accountCreated){
  return <Navigate to='/login'/>
}

  const togglePassword = (event) => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
    event.preventDefault();
  };
  const handleChange = (event)=>{
    if(event.target.checked){
      setcheck(!check)
      console.log("checked")
    }else{
      console.log("not checkedd")
    }
  }
  return (
    <div className="main-signup">
      <div className="inner-main-signup-page">
        {/* Signup form on left side */}
        <div className="left-signup bg-overlay-signup">
        <div className='login-logo'>
        <img src={cvLogo} alt="logo" className='signup-logo'/>
      </div>
          <div className="left-inner">
            <form  onSubmit={e => onSubmit(e)}>
              <h2 className="mb-3 right-heading text-center"> Signup for an Account </h2>

              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><AiOutlineUser/></span>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name='first_name'
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  value={first_name}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2"><AiOutlineUser/></span>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name='last_name'
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
    
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
                <input
                  value={email}
                  type="email"
                  id="email"
                  name='email'
                  placeholder="Email Address"
                  className="form-control"
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><AiFillLock/></span>
                <input
                  className="form-control remove-right-border"
                  value={password}
                  type={passwordShown? 'text' : 'password'}
                  id="password1"
                  name='password'
                  placeholder="Password"
                  onChange={e => onChange(e)}
                  required
                />
                 {password.length > 0? <span className="input-group-text show-pswd" onClick={togglePassword}>{passwordShown? <BsEyeFill/> : <BsFillEyeSlashFill/>}</span> : null}
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><AiFillLock/></span>
                <input
                  className="form-control remove-right-border"
                  value={re_password}
                  type={passwordShown? 'text' : 'password'}
                  id="password2"
                  name='re_password'
                  placeholder="Re-type Password"
                  onChange={e => onChange(e)}
                  required
                />
                 {re_password.length > 0? <span className="input-group-text show-pswd" onClick={togglePassword}>{passwordShown? <BsEyeFill/> : <BsFillEyeSlashFill/>}</span> : null}
              </div>

              <div className="field-checkbox mb-3">
                <input type='checkbox' onChange={handleChange}/>
                <label htmlFor="binary">
                  I agree with
                  <span>
                    <a href="https://www.sequenx.com/terms_condition.php"> Terms </a>
                  </span>
                  and
                  <span>
                    <a href="https://www.sequenx.com/privacy_policy.php"> Policy</a>
                  </span>
                </label>
              </div>

              <div className="form-group mb-3">
                <button className="btn btn-primary">Sign up</button>
              </div>

              {/* <div className="form-group">
                <button className="btn btn-primary signin-google">
                  <img
                    src={googleImage}
                    alt="signin with google"
                    className="signinwithgoogle"
                  />
                  Sign Up with Google
                </button>
              </div> */}
              <p className="mt-2">
                Already Have an account? &nbsp;
                <Link to="/login" className="nav_link">
                  Login
                </Link>
              </p>
            </form>
            <div className="powered-by">
              <p>Powered by</p>
              <img src={sequencelogo} alt="Sequenxe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup)