import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div>
        <p className='reguler-text' style={{color:'var(--dark-blue)'}}>© 2024 LauchPath Pro</p>
      </div>
      <div className='contact-us'>
        <h3>LaunchPath Pro</h3>

        <p><a href="/privacy-policy">Privacy Policy</a></p>
        <p><a href="mailto:ramaiswara098@gmail.com">ramaiswara098@gmail.com</a></p>
      </div>

        
       
    </div>
  )
}

export default Footer