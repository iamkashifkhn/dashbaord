import React from 'react'
import './settings.css'

function settings() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'#455590'}}>settings</h1>
      <div className='setting-notifications'>
        <div className='notification-wrapper'>
          <div className='notification-inner'>
               <span className='notification-heading'> Notifications </span>
               <span className='notification-text'> Manage the Notifications </span>
          </div>
        </div>
        <hr/>
        <div>
             <div>
                <div>
                  <span> Notifications </span>
                  <span> <input type='checkbox'/> Email </span>
                  <span> <input type='checkbox'/> Push Notifications </span>
                  <span> <input type='checkbox'/> Text Messages </span>
                  <span> <input type='checkbox'/></span>
                </div>
                <div>

                </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default settings