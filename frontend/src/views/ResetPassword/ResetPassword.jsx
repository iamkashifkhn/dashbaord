import React, {useState} from 'react'
import {connect } from 'react-redux'
// import {login} from '../actions/auth'
import './resetPassword.css'
import {Navigate} from 'react-router-dom'
import {reset_password} from '../../actions/auth'




const ResetPassword = ({reset_password}) => {
  const [requestSent, setRequestSent] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
  })
  const {email} = formData
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = async e => {
    e.preventDefault()
    reset_password(email)
    setRequestSent(true)
  
  }
  if(requestSent){
    return <Navigate to="/"/>
  }
  return (

    <div className='reset-password'>
    <div className='reset-password-inner  bg-overlay'>
      <h2 className='large reset-password-heading text-center mb-3'> Password Reset </h2>
      <p> You will recieve an Email for resetting your password </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>@</span>
          <input 
          className='form-control' 
          type='email' 
          placeholder='Email Address' 
          name='email' 
          value={email} 
          onChange={e => onChange(e)} 
          required 
          />
        </div>
        <div className='form-group mb-3'>
        <button type='submit' className='btn btn-primary'> Reset Password </button>
        </div>
        </form>
    </div>
    </div>

  )
}

export default connect(null, {reset_password})(ResetPassword)